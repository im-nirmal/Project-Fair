import React, { useContext, useEffect, useState } from 'react'
import Edit from '../components/Edit'
import Add from '../components/Add'
import { getUserProjectsAPI, removeProjectAPI } from '../services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextApi'

function View() {
  //context 
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const{editResponse,setEditResponse} = useContext(editResponseContext)

  //state to hold user projects
  const [userProjects,setUserProjects] = useState([])
  console.log(userProjects);

  //to see the result when component loads
  useEffect(()=>{
    getUserProjects()
  },[addResponse,editResponse])

  //fn to make api call
  const getUserProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader ={
      "Authorization" : `Bearer ${token}`
    }
    try{
      const result = await getUserProjectsAPI(reqHeader)
      console.log(result);
      if(result.status==200){
        setUserProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  //delete project
  const handleDeleteProject = async (projectId) =>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
      //api call
      const result = await removeProjectAPI(projectId,reqHeader)
      if(result.status==200){
        getUserProjects()
      }else{
        console.log(result);
      }
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between w-100">
        <h2 className='text-warning'>All Projects</h2>
        <div className=''><Add/></div>
      </div>
      <div className="mt-4">
        { 
          userProjects?.length>0?
          userProjects?.map(project=>(
            <div className="d-flex justify-content-between border p-2 rounded mb-3">
              <h3>{project?.title}</h3>
              <div className="icons d-flex ">
                <div className=''><Edit project={project}/></div>
                <div className='btn'><a href="" target='_blank'><i className="fa-brands fa-github"></i></a></div>
                <button onClick={()=>handleDeleteProject(project?._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
            </div>
          ))
          :
          <div className="fw-bolder text-warning text-center">No projects uploaded yet!!!</div>
        }
      </div>
    </div>
  )
}

export default View