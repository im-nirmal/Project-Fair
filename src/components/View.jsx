import React from 'react'
import Edit from '../components/Edit'
import Add from '../components/Add'

function View() {
  return (
    <div>
      <div className="d-flex justify-content-between w-100">
        <h2 className='text-warning'>All Projects</h2>
        <div className=''><Add/></div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-between border p-2 rounded ">
          <h3>Project Title</h3>
          <div className="icons d-flex">
            <div className=''><Edit/></div>
            <div className='btn'><a href="" target='_blank'><i className="fa-brands fa-github"></i></a></div>
            <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View