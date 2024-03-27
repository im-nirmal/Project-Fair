import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'


function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow} className='shadow btn' style={{ width: '28rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://criparisprodprodassets.blob.core.windows.net/assets/public/social/meta_background_twt.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6><span>Languages Used:</span> HTML, CSS, JS</h6>
              <p style={{textAlign:'justify'}}><span>Description:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aliquid corporis commodi temporibus necessitatibus. Asperiores velit quam enim odio numquam recusandae, eius minus, quasi molestiae quos, unde veritatis esse vitae?</p>
            </div>
          </div>
          <hr />
          <div className="float-start mt-2">
            <a href={'https://github.com/'} target='_blank' className='btn btn-secondary' onClick={handleClose}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={'https://github.com/'} target='_blank' className='btn btn-secondary ms-2' onClick={handleClose}>
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard