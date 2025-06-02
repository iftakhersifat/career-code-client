import React from 'react';
import AxiosInstance from '../AxiosInstance/AxiosInstance';


const usePostedJobApi = () => {
    const instance =AxiosInstance()

    const promise=email=>{
        return instance.get(`jobs?email=${email}`).then(res=>res.data)
    }
    return (
        promise
    );
};

export default usePostedJobApi;