import React from 'react'

const Feedbcak = (props) => {
  return (
    <div className='mx-3 my-3' style={{backgroundColor:'white',borderRadius:'5px'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h6 className='mx-3 my-3'> {props.customer_name} </h6>
        <h6 className='mx-3 my-3'> {props.rating} <i class="fa-solid fa-star"></i></h6>
        </div>
      <p className='mx-3 my-3'>{props.comment}</p>
    </div>
  )
}

export default Feedbcak
