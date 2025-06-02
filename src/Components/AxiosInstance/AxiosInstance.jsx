import axios from 'axios';
import React from 'react';
import useAuth from '../Firebase/useAuth';

const axiosInstance =axios.create({
    baseURL: 'http://localhost:3000/'
})

const AxiosInstance = () => {
    const {user, logOut} =useAuth();

    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })
    // Add a response interceptor
    axiosInstance.interceptors.response.use(response => {

    return response;
  }, error =>{
    if(error.status === 401 || error.status === 403){
        logOut()
        .then(()=>{
            console.log("sign out for 401 status")
        }).catch(error=>{
            console.log(error)
        })
    }
    return Promise.reject(error)

  })

    return axiosInstance;
};

export default AxiosInstance;