import React from 'react';
import AxiosInstance from '../AxiosInstance/AxiosInstance';

const MyApplicationAPi = () => {
    const instance =AxiosInstance();

    const promise =email=>{
        return instance.get(`applications?email=${email}`)
        .then(res=>res.data)
    }
    return (
        promise
    );
};

export default MyApplicationAPi;