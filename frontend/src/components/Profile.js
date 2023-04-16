import React from 'react'


const Profile = () => {
 
  

  return (
    <div className='mx-3  rounded' style={{backgroundColor:'#faf9f7',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
    <p style={{height:'150px',backgroundImage: 'linear-gradient(315deg,  #d4b8f5 0%,#ebe1f7 74%)',borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}} >
     <br />
     <br/>
     <br/>
     
     <img src='https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_FMjpg_UX1000_.jpg' style={{height:'140px',width:'140px'}} className="rounded-circle mx-5" alt="Cinque Terre"/> 
     </p >
     <p style={{borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px', backgroundColor:'white'}}>
     <br/>
        <br/> &nbsp; &nbsp; &nbsp; &nbsp;
         <b style={{color:'#6E68E3'}}> business_name | first_name  last_name</b> <br/>
        &nbsp; &nbsp; &nbsp;   <i class="fa-solid fa-location-dot"></i> location | <i class="fa-solid fa-phone"></i> contact_no<br/> 
        &nbsp; &nbsp; &nbsp; <i class="fa-regular fa-envelope"></i> email
        <br/><br/>
     </p>
    </div>
  )
}

export default Profile
