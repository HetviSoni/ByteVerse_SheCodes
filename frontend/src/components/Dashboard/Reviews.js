import React from 'react'
import Feedbcak from './Feedbcak';
const Reviews = () => {
  let reviews=[{
    customer_name:'Hetvi',
    rating:'4',
    comment:'didn\'t quite like it'
},
{
    customer_name:'somya',
    rating:'5',
    comment:'I loved your work so much. will definately reccomend u to a friend :)'
},
{
    customer_name:'Harshi',
    rating:'5',
    comment:'Amazing experience'
}]

  return (
    <div className='mx-3'>
      <br/>
      <br/>
    <div className='float left my-3 mx-3' style={{backgroundColor:'#F0ECF9',borderRadius:'7px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',width:'400px'}}>
      <h3 className="mx-3 my-2" style={{color:'#6E68E3'}}> Customer Reviews    </h3>
      {reviews.length===0&& <div className="container">No upcoming requests.</div>}
    
    {reviews.map((review)=>{
    return <Feedbcak  customer_name={review.customer_name} rating={review.rating} comment={review.comment} /> })}
    <br/>
    <br/>
    
    </div>
    </div>
  )
}

export default Reviews
