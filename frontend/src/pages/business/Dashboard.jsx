import React from 'react'
import Upcoming from '../../components/Dashboard/Upcoming'
import Completed from '../../components/Dashboard/Completed'
import Reviews from '../../components/Dashboard/Reviews'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div style={{display:'flex',backgroundColor:'#faf9f7'}}>
        <div className='float left'><Upcoming/>
      <Completed/></div>
      <Reviews/>
      
    </div>
    </>
  )
}

export default Dashboard
