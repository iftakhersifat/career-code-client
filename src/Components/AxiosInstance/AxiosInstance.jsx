import axios from 'axios';
import React from 'react';
import useAuth from '../Firebase/useAuth';

const axiosInstance =axios.create({
    baseURL: 'http://localhost:3000/'
})

const AxiosInstance = () => {
    const {user} =useAuth();

    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })

    return axiosInstance;
};

export default AxiosInstance;