import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import MetricCard from "../components/MetricCard"
import RevenueChart from "../charts/RevenueChart"
import UserChart from "../charts/UserChart"

function Dashboard() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0f172a"
      }}
    >
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "30px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white"
            }}
          >
            <h2>Analytics Overview</h2>

            <select
              style={{
                padding: "8px",
                borderRadius: "6px"
              }}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            <MetricCard title="Users" value="1,200" />
            <MetricCard title="Revenue" value="$34,000" />
            <MetricCard title="Sales" value="320" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px"
            }}
          >
            <RevenueChart />
            <UserChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard