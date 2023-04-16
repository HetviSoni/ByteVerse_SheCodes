import React from 'react'
import CompletedJob from './CompletedJob'
const Completed = () => {
  let completed=[{
    customer_name:'somya',
    job_date:'23/2/2023 ',
    contact_no:'6261044348',
    rating:'5',
    comment:'I loved your work so much. will definately reccomend u to a friend :)'
},
{
    customer_name:'hetvi',
    job_date:'15/2/2023 ',
    contact_no:'7392999208',
    rating:'4',
    comment:'Didn\'t quite like it:('
}];
  return (
    <div>
      
      <div style={{backgroundColor:'#faf9f7'}}>
        <h3 className='mx-4' style={{color:'#6E68E3'}}>&nbsp; Jobs Completed</h3>
       <div className=" my-3  mx-3" >
      
      {completed.length===0&& <div className="container">No jobs completed yet.</div>}
    
    {completed.map((job)=>{
    return <CompletedJob contact_no={job.contact_no} customer_name={job.customer_name}  job_date={job.job_date} rating={job.rating} comment={job.comment}/>})}
    </div>
    </div>
    </div>
  )
}

export default Completed
