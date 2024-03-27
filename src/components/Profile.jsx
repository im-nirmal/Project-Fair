import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import profileUpImg from '../assets/profileUp.png'


function Profile() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h3 className='text-warning'>User Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning fw-bolder'> <i className="fa-solid fa-chevron-down"></i> </button>
      </div>

      <Collapse in={open}>
        <div className='row justify-content-center mt-3 shadow rounded p-3' id="example-collapse-text">
          <label className='text-center'>
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='rounded-circle' src={profileUpImg} alt="" />
          </label>
          <div className="mb-2">
            <input type="text" className='form-control' placeholder='GitHub URL' />
          </div>
          <div className="mb-2">
            <input type="text" className='form-control' placeholder='LinkedIn URL' />
          </div>
          <div className="d-grid">
            <button className="btn btn-warning">Update Profile</button>
          </div>
        </div>
      </Collapse>
      
    </>
  )
}

export default Profile