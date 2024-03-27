import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/uploadImg.png'


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'><i className="fa-solid fa-plus me-1"></i>Add New Project</button>

    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img height={'200px'} className='img-fluid' src={uploadImg} alt="" />
              </label>
            </div>
            <div className="col-lg-8 ">
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Languages used in the project' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project GitHub Link' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project Website link' />
              </div>
              
            </div>
            <div className=' mt-2 mb-2'>
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add