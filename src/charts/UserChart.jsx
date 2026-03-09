import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 650 },
  { month: "May", users: 800 }
]

function UserChart() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px", height: "300px" }}>
      <h3>User Growth</h3>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default UserChart