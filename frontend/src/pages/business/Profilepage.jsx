import React from 'react'
import Profile from '../../components/Profile'
import Myskills from '../../components/Myskills'
import AddSkill from '../../components/AddSkill'
import Navbar from '../../components/Navbar'

const Profilepage = () => {
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'#faf9f7'}} >
        <br/>

        <Profile/>
        <Myskills/>
        <AddSkill/>
      
    </div>
    </>
  )
}

export default Profilepage
