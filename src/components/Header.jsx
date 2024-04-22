import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'


function Header({insideDashBoard}) {
  //tokenAuth context
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const navigate = useNavigate()

  //logout
  const handleLogout = ()=>{
    sessionStorage.clear()
    //after clearing session set authorisation
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <> 
    <Navbar style={{zIndex:'1'}} className="w-100 bg-dark  shadow top-0 position-fixed">
        <Container>
          <Navbar.Brand>
           <Link style={{textDecoration:'none'}} className='fw-bolder' to={'/'}><i className="fa-brands fa-docker"></i> Project Fair</Link>
          </Navbar.Brand>
          { insideDashBoard &&
            <div className="ms-auto">
            <button onClick={handleLogout} className='btn btn-link'>Logout <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header