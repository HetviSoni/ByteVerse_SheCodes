import React from 'react'
import Skillbox from './Skillbox'

const Myskills = () => {
   let skills=[{skill_name:"Mahendi",
   skill_description:"I love Mahendi from my childhood always wanted to a painter",
   skill_image:"https://media.weddingz.in/images/20200328003801/Intricate-Mehendi-1.png",
   remuneration:"500"},
   {skill_name:"Mahendi",
   skill_description:"I love Mahendi from my childhood always wanted to a painter",
   skill_image:"https://media.weddingz.in/images/20200328003801/Intricate-Mehendi-1.png",
   remuneration:"500"},
   {skill_name:"Mahendi",
   skill_description:"I love Mahendi from my childhood always wanted to a painter",
   skill_image:"https://media.weddingz.in/images/20200328003801/Intricate-Mehendi-1.png",
   remuneration:"500"}];
  return (
    <div style={{backgroundColor:'#faf9f7'}}>
        <h2 className='mx-3' style={{color:'#6E68E3'}}>My skills</h2>
       <div className="row row-cols-3 my-3  mx-3" >
      
      {skills.length===0&& <div className="container">No skilled added yet.</div>}
    
    {skills.map((skill)=>{
    return <Skillbox skill_name={skill.skill_name} skill_description={skill.skill_description} skill_image={skill.skill_image} remuneration={skill.remuneration} />})}
    </div>
    </div>
  )
}

export default Myskills
