import { FaChartLine, FaUser, FaCog, FaFileAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function Sidebar() {

  const item={
    display:"flex",
    alignItems:"center",
    gap:"10px",
    padding:"12px",
    borderRadius:"8px",
    transition:"0.2s"
  }

  return(
    <div
      style={{
        width:"220px",
        background:"#020617",
        padding:"25px",
        display:"flex",
        flexDirection:"column",
        gap:"15px"
      }}
    >

      <h2 style={{marginBottom:"20px"}}>Admin</h2>

      <Link to="/" style={item}> <FaChartLine/> Dashboard </Link>
      <Link to="/reports" style={item}> <FaFileAlt/> Reports </Link>
      <Link to="/users" style={item}> <FaUser/> Users </Link>
      <Link to="/settings" style={item}> <FaCog/> Settings </Link>

    </div>
  )
}

export default Sidebar