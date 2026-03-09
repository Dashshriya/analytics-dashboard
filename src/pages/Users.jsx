import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@email.com", role: "Manager" },
  { id: 3, name: "Carol Lee", email: "carol@email.com", role: "User" },
  { id: 4, name: "David Kim", email: "david@email.com", role: "User" }
]

function Users() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h2 style={{ marginBottom: "20px" }}>Users</h2>

          <table
            style={{
              width: "100%",
              background: "white",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            <thead style={{ background: "#1e293b", color: "white" }}>
              <tr>
                <th style={{ padding: "12px" }}>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} style={{ textAlign: "center" }}>
                  <td style={{ padding: "10px" }}>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users