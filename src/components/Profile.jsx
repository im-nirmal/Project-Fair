import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import profileUpImg from '../assets/profileUp.png'
import { SERVER_URL } from '../services/serverUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserAPI } from '../services/allAPI';


function Profile() {

  //state for user details from session storage
  const [userDetails,setUserDetails] = useState({
    username:"",email:"",password:"",github:"",linkedin:"",profileImage:""
  })
  //to hold existing image from profile
  const [existingImg,setExistingImg] = useState("")

  //to hold the preview image uploading image; its url
  const [preview,setPreview] = useState("")

  const [open, setOpen] = useState(false);

  //to get the value for profile from session storage
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const existingUserDetails = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({
        ...userDetails, username : existingUserDetails.username, email:existingUserDetails.email, password:existingUserDetails.password, github:existingUserDetails.github, linkedin:existingUserDetails.linkedin
      })
      setExistingImg(existingUserDetails.profile)
    }
  },[open])

  //sideeffect applying when profile image changes ; works only when creation of component and profile image changes
  useEffect(()=>{
    if(userDetails.profileImage){
      setPreview(URL.createObjectURL(userDetails.profileImage))
    }else{
      setPreview("")
    }
  },[userDetails.profileImage])

  //handleUserProfile
  const handleUserProfile = async ()=>{
    const {username,email,password,github,linkedin,profileImage} = userDetails
    if(!github || !linkedin){
      toast.warning("Please fill the form completely!!!")
    }else{
      //proceed to api call
      const reqBody = new FormData()
        //("key", value)
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview ? reqBody.append("profileImage",profileImage) : reqBody.append("profileImage",existingImg)
      
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : preview?"multipart/form-data":"application/json",
          "Authorization" : `Bearer ${token}`
        }
        //api call
        try{
          const result = await updateUserAPI(reqBody,reqHeader)
          if(result.status==200){
            //to collapse
            setOpen(!open)
            //to store
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          }else{
            console.log(result);
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <h3 className='text-warning'>User Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning fw-bolder'> <i className="fa-solid fa-chevron-down"></i> </button>
      </div>

      <Collapse in={open}>
        <div className='row justify-content-center mt-3 shadow rounded p-3' id="example-collapse-text">
          <label className='text-center'>
            <input onChange={e=>setUserDetails({...userDetails, profileImage:e.target.files[0]})} type="file" style={{display:'none'}} />
            {
              existingImg =="" ?
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : profileUpImg} alt="" />
              :
              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${SERVER_URL}/uploads/${existingImg}`} alt="" />
            }
          </label>
          <div className="mb-2">
            <input value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} type="text" className='form-control' placeholder='GitHub URL' />
          </div>
          <div className="mb-2">
            <input value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} type="text" className='form-control' placeholder='LinkedIn URL' />
          </div>
          <div className="d-grid">
            <button onClick={handleUserProfile} className="btn btn-warning">Update Profile</button>
          </div>
        </div>
      </Collapse>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Profile