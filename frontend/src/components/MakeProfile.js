import React from 'react'
import img from '../assets/makeProfile.png'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'



  return (
    <div style={{display:'flex',overflowX:'hidden'}}>
    <div className='float-left' style={{width:'63%' ,backgroundColor:'#F0ECF9'}}>
        <form  onSubmit={handleSubmit}>
          <br/>
          
      <h2 className='mx-3' > Set-up your aa profile</h2>
      <br/>
      <h3 className='mx-4' style={{color:'#6E68E3'}}>Personal info:</h3>
      <div className="row g-3 align-items-center mx-3 my-2">
  <div className="col-auto">
    <label htmlFor="first_name" className="col-form-label">First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="first_name" name="first_name" onChange={onChange}  placeholder='First name' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div>
  

    <div className="col-auto">
    <label htmlFor="last_name" className="col-form-label">&nbsp;Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="last_name" name="last_name" onChange={onChange}  placeholder='Last name' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div>
  
</div>


  
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="business_name" className="col-form-label">Business name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="business_name" accept="image/png, image/gif, image/jpeg" name="business_name" placeholder=' select business_name' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div>
  
  </div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="contact_no" className="col-form-label">Phone no<i className="fa-solid fa-phone fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="tel" id="contact_no"  name="contact_no" placeholder='Contact number' className="form-control" aria-labelledby="passwordHelpInline" onChange={onChange}  required/>
  </div>
  
  </div>
  

 <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="location" className="col-form-label">Location<i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="location"  name="location" placeholder='Enter location' className="form-control" aria-labelledby="passwordHelpInline" onChange={onChange}  required/>
  </div></div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="prof_img" className="col-form-label">Proflie image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="file" id="fileInput" accept="image/png, image/gif, image/jpeg"  name="prof_img" placeholder=' select Profile image' className="form-control" aria-labelledby="passwordHelpInline" />
  </div>
  
  </div>
  <h3 className='mx-3 mt-4 my-2' style={{color:'#6E68E3'}}>Socail media links:</h3>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="instagram" className="col-form-label"><i className="fa-brands fa-instagram fa-2x"></i></label>
  </div>
  <div className="col-auto">
    <input type="url" id="instagram"  name="instagram" placeholder='Instagram link' className="form-control" aria-labelledby="passwordHelpInline" onChange={onChange} />
  </div>
 
  
  </div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="facebook" className="col-form-label"><i className="fa-brands fa-facebook fa-2x"></i></label>
  </div>
  <div className="col-auto">
    <input type="url" id="facebook"  name="facebook" placeholder='Facebook link' className="form-control" aria-labelledby="passwordHelpInline" onChange={onChange} />
  </div></div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label htmlFor="youtube" className="col-form-label"><i className="fa-brands fa-youtube fa-2x"></i></label>
  </div>
  <div className="col-auto">
    <input type="url" id="youtube"  name="youtube" placeholder='Youtube link' className="form-control" aria-labelledby="passwordHelpInline"  onChange={onChange} />
  </div></div>
  <div className=' mt-3' style={{marginLeft:'20%'}}><input className="btn btn-primary my-3" style={{backgroundColor:'#6E68E3'}} type="submit" value="Submit"/></div>
  

  
  </form>
  </div>
  <div className='float-left  text-center' style={{width:'37%' ,backgroundColor:'#F0ECF9'}}>
  <img alt="Working women"  style={{height:'600px',width:'550px'}} src={img}/>
  </div>
  </div>
  )
}

export default MakeProfile
