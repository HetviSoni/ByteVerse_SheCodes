import React from 'react'
import Skillbox from './Skillbox'

const Myskills = () => {
   let skills =[{
    skill_name:"Wall Art", skill_description:"Creating amazing nature inspired wall arts", skill_image:"https://assets.ajio.com/medias/sys_master/root/20220618/bDX0/62acf0b5aeb26921af3968c2/-473Wx593H-464510063-multi-MODEL.jpg" ,remuneration:"4500-6000 INR"
  }]

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
