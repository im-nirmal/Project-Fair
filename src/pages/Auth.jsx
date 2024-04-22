import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../assets/login.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthContext } from '../contexts/TokenAuth';




function Auth({insideRegister}) {
  //using context from tokenAuth
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const navigate = useNavigate()

  //state to store user creating datas
  const[userInputs,setUserInputs] = useState({
    username:"", email:"", password:""
  })
  console.log(userInputs);

  //register
  const handleRegister = async (e) =>{
    e.preventDefault()
    //text fied empty checking
    if(userInputs.username && userInputs.email && userInputs.password){
      //api call
      try{
        const result = await registerAPI(userInputs)
        console.log(result);
        if(result.status==200){
          toast.success(`Welcome ${result.data.username}... Please Login to explore more!!!`)
          setUserInputs({username:"",email:"",password:""})
          setTimeout(()=>{
            navigate('/login')
          },2000)
        }else{
          toast.error(result.response.data)
          setTimeout(()=>{
            setUserInputs({username:"",email:"",password:""})
          },2000)
        }
      }catch(err){
          console.log(err);
      }

    }else{
      toast.warning("Please fill the form completely...")
    }
  }

  //login
  const handleLogin = async (e) =>{
    e.preventDefault()
    if(userInputs.email && userInputs.password){
      //api call
      try{
        const result = await loginAPI(userInputs)
        if(result.status==200){
          //store existing user and token
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
          //after getting token only set authorisation
          setIsAuthorised(true)
          toast.success(`Welcome ${result.data.existingUser.username}...`)
          setUserInputs({email:"",password:""})
          setTimeout(()=>{
            navigate('/')
          },2000)
        }else{
          toast.error(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("Please fill the form completely!!!")
    }
  }

  return (
    <>
      <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container w-75">
          <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'> <i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
          <div className="card shadow p-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100' src={LoginImg} alt="Auth" />
              </div>
              <div className="col-lg-6">
                <h1 className='fw-bolder mt-2'>
                  <i className="fa-brands fa-docker"></i> Project Fair
                </h1>
                <h5 className="fw-bolder mt-2">
                  Sign {insideRegister? 'up': 'in'} to your Account
                </h5>
                <Form>
                  {/* for new registers we use props  */}
                  {
                    insideRegister && 
                    <FloatingLabel
                  controlId="floatingInputName"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="Username" />
                </FloatingLabel>

                  }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
                </FloatingLabel>

                {
                  insideRegister ? 
                  <div className='mt-3'>
                    <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                    <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className='mt-3'>
                    <button onClick={handleLogin} className='btn btn-primary mb-2'>Login</button>
                    <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                  </div>
                }
                </Form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  )
}

export default Auth