import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import LandingImg from '../assets/admin1.png'
import { Card } from 'react-bootstrap'



function Home() {
  return (
    <>
    {/* landing part */}
        <div style={{minheight:'100vh'}} className='w-100 d-flex justify-content-center align-items-center rounded  shadow mb-5 '>
            <div className='container mt-5'>
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mt-5">
                        <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker me-2'></i>
                            Project Fair</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id et voluptates suscipit aliquam officia natus quos nesciunt aspernatur, earum minus ipsa sequi nisi vel culpa enim? Vero quidem quasi veritatis.</p>
                        <Link to={'/login'} className='btn btn-warning'>Start to Explore <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                    </div>
                    
                    <div className="col-lg-6">
                        <img className='img-fluid ms-5' src={LandingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <hr />
        {/* project part */}
        <div className='mt-5 text-center shadow'>
            <h1 className='text-center mb-5 fw-bolder'>Explore Our Projects</h1>
            <marquee>
                <div className='d-flex mb-5 '>
                    <div className='me-5'>
                        <ProjectCard/>
                    </div>
                </div>
            </marquee>
            <button className='btn btn-link mt-3'>Click here to view more projects...</button>
        </div>

        {/* testimonials */}
        <div className="d-flex  align-items-center mt-5 mb-5 flex-column">
            <h1>Our Testimonials</h1>
            <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
            <Card style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                   <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="" />
                   <span> Maxwell</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star "></i>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aliquid odit facilis quam eum mollitia et aliquam rem ullam repellat </p>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                   <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" />
                   <span> Cook</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star "></i>
                        <i className="fa-regular fa-star "></i>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aliquid odit facilis quam eum mollitia et aliquam rem ullam repellat </p>
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                   <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" alt="" />
                   <span>Juliet</span>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star "></i>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aliquid odit facilis quam eum mollitia et aliquam rem ullam repellat </p>
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    </>
  )
}

export default Home