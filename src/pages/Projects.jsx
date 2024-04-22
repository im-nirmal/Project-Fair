import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { getAllProjectsAPI } from '../services/allAPI'

function Projects() {
  //state to hold search key
  const [searchKey,setSeachKey] = useState("")

  //state to hold all projects
  const [allProjects,setAllProjects] = useState([])

  console.log(allProjects);
  //to load when the componet loads ; calling getAllProjects
  useEffect(()=>{
    getAllProjects()
  },[searchKey])


  //api call for getAllProjectsapi
  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader ={
      "Authorization" : `Bearer ${token}`
    }
    try{
      const result = await getAllProjectsAPI(searchKey,reqHeader)
      console.log(result);
      if(result.status==200){
        setAllProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className='container-fluid'>
      <div className="d-flex justify-content-between">
        <h1>All Projects</h1>
        <input onChange={e=>setSeachKey(e.target.value)} className='form-control w-25' type="text" placeholder='Search project by language used' />
      </div>
      <Row className=" mt-3">
        { allProjects?.length >0 ?
          allProjects?.map(project=>(
            <Col key={project} className='mb-3' sm={12} md={6} lg={4}>
          <ProjectCard displayData={project}/>
        </Col> 
          ))
        :
        <div className="fw-bolder text-danger m-5 text-center">Project not found!!!</div>
        }
      </Row>
    </div>
    </>
  )
}

export default Projects