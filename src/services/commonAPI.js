import axios from "axios";

//creating instance
export const commonAPI = async (httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}


//when we give multiple requests in same application we use common api setup