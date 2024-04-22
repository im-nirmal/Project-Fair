import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

function Dashboard() {
  
  //state to hold username
  const [displayName,setDisplayName] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const {username} = JSON.parse(sessionStorage.getItem("existingUser"))
      setDisplayName(username)
    }else{
      setDisplayName("")
    }
  },[])

  return (
    <>
    <Header insideDashBoard={true}/>
    <div style={{marginTop:'100px'}} className='container-fluid'>
      
      <div className="row mt-3 ">
        <div className="col-lg-8 ">
        <h1>Welcome <span className='text-warning'>{displayName?.split(" ")[0]}</span>,</h1>
          <View/>
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard