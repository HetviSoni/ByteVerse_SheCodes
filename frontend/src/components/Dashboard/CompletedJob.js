import React from 'react'

const CompletedJob = (props) => {
  return (
    <div className='mx-3 my-3 rounded' style={{backgroundColor:'white',borderRadius:'7px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',maxWidth:'850px'}}>
        <br/>
    <h5 style={{color:'#6E68E3',fontSize:'17px',fontWeight:'bold'}} className='mx-3 my-3'>{props.customer_name} | <em className='mx-3'>{props.contact_no}</em></h5>
    
    <b style={{color:'#6E68E3'}}  className='mx-3'>Date completed:</b> {props.job_date } &nbsp; &nbsp; 
    <b style={{color:'#6E68E3'}}  className='mx-3'>Rating:</b> {props.rating } <i className="fa-regular fa-star"></i><br/>
    
    <b style={{color:'#6E68E3'}} className='mx-3 my-1'>Review:</b>{props.comment} <br/>
    <div></div>
    <button className="btn btn-outline-primary mx-3 my-3"  type="submit" >Message <i class="fa-regular fa-paper-plane"></i></button>

    </div>
  )
}

export default CompletedJob
