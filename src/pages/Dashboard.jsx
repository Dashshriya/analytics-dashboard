import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import RevenueChart from "../charts/RevenueChart"
import UserChart from "../charts/UserChart"

const ranges = {
  "7 days": { users: "1,284", revenue: "$34,820", orders: "426", conversion: "4.82%", delta: ["+12.8%", "+8.4%", "+6.2%", "+0.7%"] },
  "30 days": { users: "5,842", revenue: "$142,680", orders: "1,836", conversion: "4.56%", delta: ["+18.2%", "+11.6%", "+9.1%", "+0.4%"] },
  "90 days": { users: "16,904", revenue: "$418,240", orders: "5,214", conversion: "4.39%", delta: ["+24.6%", "+16.3%", "+13.8%", "+0.9%"] },
}
const activity = [
  { id: "ORD-2048", event: "Order completed", person: "Aarav Mehta", amount: "$249.00", status: "Completed", time: "2 min ago" },
  { id: "ORD-2047", event: "Payment received", person: "Mira Das", amount: "$128.50", status: "Completed", time: "8 min ago" },
  { id: "ORD-2046", event: "Refund requested", person: "Kabir Shah", amount: "$74.00", status: "Review", time: "16 min ago" },
  { id: "ORD-2045", event: "Order processing", person: "Anaya Roy", amount: "$412.00", status: "Processing", time: "24 min ago" },
  { id: "ORD-2044", event: "Order completed", person: "Ishaan Sen", amount: "$96.00", status: "Completed", time: "31 min ago" },
]
function Dashboard() {
  const [range, setRange] = useState("30 days")
  const [query, setQuery] = useState("")
  const [notice, setNotice] = useState("")
  const metrics = ranges[range]
  const visibleActivity = useMemo(() => activity.filter((item) => Object.values(item).some((value) => value.toLowerCase().includes(query.toLowerCase()))), [query])
  const exportActivity = () => {
    const csv = [["Order", "Event", "Customer", "Amount", "Status", "Time"], ...visibleActivity.map((item) => [item.id, item.event, item.person, item.amount, item.status, item.time])]
      .map((row) => row.map((value) => '"' + String(value).replaceAll('"', '""') + '"').join(",")).join("\\r\\n")
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = "analytics-activity.csv"
    anchor.click()
    URL.revokeObjectURL(url)
    setNotice("Activity export downloaded")
    window.setTimeout(() => setNotice(""), 2500)
  }
  return (
    <div className="analytics-shell">
      <aside className="analytics-sidebar">
        <Link className="analytics-brand" to="/"><span className="analytics-brandmark">a.</span><span>northstar<span className="brand-sub">ANALYTICS STUDIO</span></span></Link>
        <div className="nav-caption">WORKSPACE</div>
        <Link className="nav-link active" to="/">◫ <span>Overview</span></Link>
        <Link className="nav-link" to="/reports">▤ <span>Reports</span></Link>
        <Link className="nav-link" to="/users">♙ <span>Customers</span></Link>
        <Link className="nav-link" to="/settings">⚙ <span>Settings</span></Link>
        <div className="sidebar-bottom"><div className="workspace-avatar">NS</div><div><strong>Northstar Store</strong><small>Demo workspace</small></div><span className="online-dot" /></div>
      </aside>
      <main className="analytics-main">
        <header className="analytics-topbar"><div><span className="crumb-muted">Workspace</span><span className="crumb-slash">/</span><strong>Overview</strong></div><div className="topbar-right"><span className="demo-chip"><i /> DEMO DATA</span><div className="user-avatar">SD</div></div></header>
        <div className="analytics-content">
          <section className="page-heading"><div><div className="eyebrow">MONDAY, OCTOBER 26, 2026</div><h1>Good afternoon, Shriya <span>✳</span></h1><p>Here’s what’s happening with your store today.</p></div><div className="heading-actions"><label className="range-label" htmlFor="range">Period</label><select id="range" value={range} onChange={(event) => setRange(event.target.value)} className="range-select"><option>7 days</option><option>30 days</option><option>90 days</option></select><button className="export-button" onClick={exportActivity}>↓ Export activity</button></div></section>
          <section className="metric-grid" aria-label="Key metrics">
            {[["Total customers", metrics.users, metrics.delta[0], "↗"], ["Gross revenue", metrics.revenue, metrics.delta[1], "$"], ["Orders", metrics.orders, metrics.delta[2], "↗"], ["Conversion rate", metrics.conversion, metrics.delta[3], "%"]].map(([label, value, delta, symbol]) => <article className="metric-card" key={label}><div className="metric-top"><span>{label}</span><span className="metric-icon">{symbol}</span></div><div className="metric-value">{value}</div><div className="metric-change"><span>↗ {delta}</span><span className="muted">vs previous period</span></div></article>)}
          </section>
          <section className="chart-grid"><div className="chart-frame"><div className="chart-heading"><div><h2>Revenue performance</h2><p>Monthly gross revenue · sample data</p></div><span className="chart-tag">TREND</span></div><RevenueChart /></div><div className="chart-frame"><div className="chart-heading"><div><h2>Customer growth</h2><p>New customers by month · sample data</p></div><span className="chart-tag">GROWTH</span></div><UserChart /></div></section>
          <section className="activity-card"><div className="activity-heading"><div><h2>Recent activity</h2><p>Latest transactions across your workspace</p></div><div className="activity-tools"><input aria-label="Search activity" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search activity…" /><button onClick={exportActivity}>Export CSV</button></div></div>
            <div className="activity-table-wrap"><table className="activity-table"><thead><tr><th>Order</th><th>Activity</th><th>Customer</th><th>Amount</th><th>Status</th><th>Updated</th></tr></thead><tbody>{visibleActivity.length ? visibleActivity.map((item) => <tr key={item.id}><td className="order-id">{item.id}</td><td>{item.event}</td><td>{item.person}</td><td className="amount">{item.amount}</td><td><span className={"status-pill " + item.status.toLowerCase()}>{item.status}</span></td><td className="muted">{item.time}</td></tr>) : <tr><td colSpan="6" className="empty-cell">No activity matches “{query}”. Try another search.</td></tr>}</tbody></table></div>
            <div className="table-footer"><span>Showing {visibleActivity.length} of {activity.length} recent events</span><span>Updated moments ago</span></div>
          </section>
          <footer className="analytics-footer"><span>Northstar Analytics · Frontend portfolio project</span><span>Sample metrics are illustrative, not live business data.</span></footer>
          {notice && <div className="analytics-toast" role="status">{notice}</div>}
        </div>
      </main>
    </div>
  )
}
export default Dashboard
