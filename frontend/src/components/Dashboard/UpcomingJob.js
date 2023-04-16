import React from 'react'

const UpcomingJob = (props) => {
    
  return (
    <div className='mx-3 my-3 rounded' style={{backgroundColor:'white',borderRadius:'7px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',maxWidth:'850px'}}>
        <br/>
    <h5 style={{color:'#6E68E3',fontSize:'17px',fontWeight:'bold'}} className='mx-4 my-3'>{props.customer_name} | <em className='mx-3'>{props.contact_no}</em></h5>
    
    <b style={{color:'#6E68E3'}}  className='mx-4'>Date requested:</b> {props.date_requested } &nbsp; &nbsp; 
    <b style={{color:'#6E68E3'}}  className='mx-3'>Time Requested:</b> {props.time}<br/>
    
    <b style={{color:'#6E68E3'}} className='mx-4 my-1'>Job Description:</b>{props.job_description} <br/>
    <button  className="mx-3 my-3 btn btn-outline-success" type="submit">Accept</button>
    <button className="btn btn-outline-danger mx-3 my-3" type="submit" >Decline</button>

    </div>
  )
}

export default UpcomingJob
