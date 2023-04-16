import React from 'react'
import UpcomingJob from './UpcomingJob';

const Upcoming = (props) => {
   let upcoming=[{
   customer_name:"Vranda",
   contact_no:'6261044348',
   time:'3:00 pm',
   date_requested:"23-04-2023",
   job_description:"I have a function today at my house. I have to get wax and facial urgently."
    },
    {
        customer_name:"Vranda",
        contact_no:'6261044348',
        time:'3:00 pm',
        date_requested:"23-04-2023",
        job_description:"I have a function today at my house. I have to get wax and facial urgently."
         },
    {
            customer_name:"Vranda",
            contact_no:'6261044348',
            time:'3:00 pm',
            date_requested:"23-04-2023",
            job_description:"I have a function today at my house. I have to get wax and facial urgently."
         }];
  return (
    <div style={{backgroundColor:'#faf9f7'}}>
      <br/>
      <br/>
      <h2 className='mx-4 my-2' style={{color:'#6E68E3'}}>&nbsp;Dashboard for Painting</h2>
      <div style={{backgroundColor:'#faf9f7'}}>
        <h5 className='mx-4' style={{color:'#6E68E3'}}>&nbsp; Upcoming Job Requests</h5>
       <div className=" my-3  mx-3" >
      
      {upcoming.length===0&& <div className="container">No upcoming requests.</div>}
    
    {upcoming.map((job)=>{
    return <UpcomingJob time={job.time} customer_name={job.customer_name} date_requested={job.date_requested} job_description={job.job_description} contact_no={job.contact_no}/> })}
    </div>
    </div>
    </div>
  )
}

export default Upcoming
