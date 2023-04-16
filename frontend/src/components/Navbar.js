import React from 'react'
import logo from "../assets/images/logo_name.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid" style={{display:'flex',justifyContent:'space-between'}}>

    <div className='div1 mx-4' >
    <img src={logo} style={{height:'50px'}} alt="logo" />
    
    </div>

    
     

      <div className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{float:'right'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
        
      </ul>
        
        
      </div>

    
  </div>
</nav>
    </div>
  )
}

export default Navbar
