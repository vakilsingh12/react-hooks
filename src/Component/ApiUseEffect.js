import React, { useState,useEffect } from 'react'
import axios from 'axios'
function ApiUseEffect() {
  const [api, setApi] = useState([]);

  const newApi = async(params) => {
    const result=await axios.get('https://api.covid19api.com/summary')
    setApi(result.data.Countries)
  }
  useEffect(()=>{
  newApi(); 
  },[])
  const myStyle={
    background:'green',
    width:'100px',
    height:'auto',
    padding:'20px 30px',
    margin:'10px',
    color:'#fff',
    boxShadow:'1px 5px 10px grey',
    borderRadius:'20px'
  }
  const styleOl={
    display:'flex',
    listStyleType:'none',
    flexWrap: "wrap"
  }
  return (
    <div>
     <ol style={styleOl}>
       {api.map(res=>(<li style={myStyle}
       key={res.ID}>{res.Country.toUpperCase()} Total Deaths: {res.TotalDeaths}</li>))}
     </ol>
    </div>
  )
}

export default ApiUseEffect
