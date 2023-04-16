import React from 'react'

const AddSkill = () => {
  return (
    <div style={{backgroundColor:'#faf9f7'}}>
      <h2  className='mx-3 ' style={{color:'#6E68E3'}}>Add a skill</h2>
      <div className="row g-3 align-items-center mx-3 ">
<div className="col-auto">
    <label for="skill_name" className="col-form-label">Skill name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="skill_name"  name="skill_name" placeholder='Skill name' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div></div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label for="skill_description" className="col-form-label">Skill description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  </div>
  <div className="col-auto">
    <input type="text" id="skill_description"  name="skill_description" placeholder='Skill description' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div></div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto">
    <label for="skill_sample" className="col-form-label">Skill sample(image)</label>
  </div>
  <div className="col-auto">
    <input type="file" id="skill_sample"  name="skill_sample"  className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div></div>
  <div className="row g-3 align-items-center mx-3 my-2">
<div className="col-auto my-3">
    <label for="remuneration" className="col-form-label">Salary expectation&nbsp;&nbsp;<br/> (remuneration)</label>
  </div>
  <div className="col-auto">
    <input type="text" id="remuneration"  name="remuneration" placeholder='Salary Expection' className="form-control" aria-labelledby="passwordHelpInline" required/>
  </div></div>
  <div>
  <div className=' mt-3' style={{marginLeft:'5%'}}><input className="btn btn-primary my-3" style={{backgroundColor:'#6E68E3'}} type="submit" value="Submit"/></div>
  </div>
    </div>
  )
}

export default AddSkill
