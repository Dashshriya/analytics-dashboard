import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Reports() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h2 style={{ marginBottom: "20px" }}>Reports</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px"
            }}
          >
            <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
              Monthly Revenue Report
            </div>

            <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
              User Activity Report
            </div>

            <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
              Sales Performance Report
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports