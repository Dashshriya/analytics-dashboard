import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa"

function MetricCard({ title, value }) {

  let Icon

  if (title === "Users") Icon = FaUsers
  if (title === "Revenue") Icon = FaDollarSign
  if (title === "Sales") Icon = FaShoppingCart

  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "25px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        transition: "0.2s",
        cursor: "pointer"
      }}
      onMouseEnter={(e)=>{
        e.currentTarget.style.transform="translateY(-6px)"
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.transform="translateY(0)"
      }}
    >

      <Icon size={26}/>

      <div>
        <h4>{title}</h4>
        <p style={{opacity:.8}}>{value}</p>
      </div>

    </div>
  )
}

export default MetricCard