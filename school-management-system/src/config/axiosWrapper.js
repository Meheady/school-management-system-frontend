import axios from "axios";

const getInstance =  axios.create();
const postInstance =  axios.create();
const commonInstance =  axios.create();
const url = process.env.PUBLIC_ROOT_URL;


const usePost = async (url,request) => {
    let result;
    return result = await postInstance.post(url,request);
}


const userLogin = async (request) => {
    let result;
    return result = axios.post(`${url}/login`,request)
}

const logout = async () => {
    let result;
    return result = postInstance.post(`${url}/logout`)
}

const token = '';
commonInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
postInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
getInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`



