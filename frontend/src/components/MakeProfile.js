import React from 'react'
import img from '../assets/makeProfile.png'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'



const MakeProfile = () => {
  const [profile,setProfile]=useState({first_name:" ",last_name:"",business_name:"",contact_no:"",location:"",instagram:'',facebook:'',youtube:''})
  let history=useNavigate();
  
  const onChange=(e)=>{
    setProfile({...profile,[e.target.name] :e.target.value})
    }
    const handleSubmit= async (e)=>{
      //  let token = localStorage.getItem('accessToken');
      let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNDAwNTU4LCJpYXQiOjE2ODE1MzY1NTgsImp0aSI6ImFhZTI5NDVhNTAwMjRkZjZhMzNjZTUyZTY5NmNkNGIwIiwidXNlcl9pZCI6MTd9.XoAfShgeZzNgr6TuQPHBDKXeu18dhPVbfnkf5iYQ7r4"
    
      e.preventDefault();
      const{first_name,last_name,business_name,contact_no,location,instagram,facebook,youtube}=profile;
      
      const response = await fetch('https://udaan.pythonanywhere.com/api/business/profile/', {
      
      method: "POST", 
        
        headers: {
          "Content-Type": "application/json",
          
         "Authorization": `Bearer ${token}`
        , "Access-Control-Allow-Origin":"*"
        // "Access-Control-Allow-Headers": "Content-Type, Depth,Access-Control-Allow-Credentials ,Access-Control-Allow-Headers,User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"
        
        },
       
        body: JSON.stringify({first_name,last_name,business_name,contact_no,location,instagram,facebook,youtube}), 
      });
      console.log(response)
      history('/business-profile')
    }
  return (
    <div style={{display:'flex',overflowX:'hidden'}}>
    <div className='float-left' style={{width:'63%' ,backgroundColor:'#F0ECF9'}}>
        <form  onSubmit={handleSubmit}>
          <br/>
          
      <h2 className='mx-3' > Set-up your profile</h2>
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
    <input type="text" id="business_name"  name="business_name" placeholder=' select business_name' className="form-control" aria-labelledby="passwordHelpInline" required/>
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
