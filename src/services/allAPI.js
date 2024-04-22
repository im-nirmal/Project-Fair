import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


//register api - called by Auth component
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//login api - called by Auth component
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//add project - called by add component; giving reqHeader argument since img is uploaded from pc
export const addProjectAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}


//get all projects ; since no body pass empty string ; header needed since it needs token authorization
export const getAllProjectsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)
}

//user projects - for login ; no need to apply jwt for token
export const getUserProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVER_URL}/user-projects`,"",reqHeader)
}

//home projects - for login ; no need to apply jwt for token
export const getHomeProjectsAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/home-projects`,"")
}

//edit project
export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT", `${SERVER_URL}/edit-project/${projectId}`,reqBody,reqHeader)
}

//remove project ; make reqBody as empty object
export const removeProjectAPI = async (projectId,reqHeader)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/remove-project/${projectId}`,{},reqHeader)
}

//update user profile
export const updateUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}