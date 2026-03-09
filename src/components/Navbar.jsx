import { FaBell, FaUserCircle } from "react-icons/fa"
import { useState } from "react"

function Navbar(){

  const[search,setSearch]=useState("")
  const items=["Users","Revenue","Sales","Reports"]

  const results=items.filter(i =>
    i.toLowerCase().includes(search.toLowerCase())
  )

  return(
    <div
      style={{
        height:"65px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0 30px",
        background:"rgba(0,0,0,0.25)",
        backdropFilter:"blur(10px)"
      }}
    >

      <h3>Analytics Dashboard</h3>

      <div style={{position:"relative"}}>

        <input
          placeholder="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{
            padding:"8px 12px",
            borderRadius:"6px",
            border:"none",
            outline:"none"
          }}
        />

        {search && (
          <div
            style={{
              position:"absolute",
              top:"38px",
              background:"#020617",
              width:"100%",
              borderRadius:"6px"
            }}
          >
            {results.map((r,i)=>(
              <div key={i} style={{padding:"8px"}}>{r}</div>
            ))}
          </div>
        )}

      </div>

      <div style={{display:"flex",gap:"15px"}}>
        <FaBell/>
        <FaUserCircle size={22}/>
      </div>

    </div>
  )
}

export default Navbar