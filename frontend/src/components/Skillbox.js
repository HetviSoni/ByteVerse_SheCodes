import React from 'react'

const Skillbox = (props) => {
    
  return (
    <div className='my-3'>

      <div className="card " style={{width: '18rem',borderRadius:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
     <img src={props.skill_image} className="card-img-top" alt="..."/>
     <div className="card-body" style={{backgroundColor:'#F0ECF9',borderBottomRightRadius:'5px',borderBottomLeftRadius:'5px'}}>
     <h5 className="card-title">{props.skill_name} <br/> Remuneration: {props.remuneration}</h5>
     
     <p className="card-text">{props.skill_description}</p>
     <a href="/" style={{backgroundColor:'#6E68E3'}} className="btn btn-primary">Go to dashboard</a>
   </div>
</div>
    </div>
  )
}

export default Skillbox
