import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editResponseContext = createContext()

function ContextApi({children}) {
    const [addResponse,setAddResponse] = useState("")
    //state for edit context
    const [editResponse,setEditResponse] = useState("")
    

  return (
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
        <editResponseContext.Provider value={{editResponse,setEditResponse}}>
          {children}
        </editResponseContext.Provider>
    </addResponseContext.Provider>
  )
}

export default ContextApi