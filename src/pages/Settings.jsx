import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Settings() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h2 style={{ marginBottom: "20px" }}>Settings</h2>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "10px",
              width: "400px"
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter name"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <button
              style={{
                padding: "10px 15px",
                background: "#1e293b",
                color: "white",
                border: "none",
                borderRadius: "6px"
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings