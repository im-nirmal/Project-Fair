import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashBoard}) {
  return (
    <> 
    <Navbar style={{zIndex:'1'}} className="w-100 bg-dark  shadow top-0 position-fixed">
        <Container>
          <Navbar.Brand>
           <Link style={{textDecoration:'none'}} className='fw-bolder' to={'/'}><i className="fa-brands fa-docker"></i> Project Fair</Link>
          </Navbar.Brand>
          { insideDashBoard &&
            <div className="ms-auto">
            <button className='btn btn-link'>Logout <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header