import React, { Suspense } from 'react';
import PostedJobList from './PostedJobList';
import useAuth from '../Firebase/useAuth';
import usePostedJobApi from '../Api/usePostedJobApi';

// const promise=(email, accessToken)=>{
//     return fetch(`http://localhost:3000/jobs?email=${email}`,{
//         headers:{
//             authorization: `Bearer ${accessToken}`
//         }
//     }).then(res=>res.json())
// }

const MyPostedJob = () => {
    const {user} =useAuth()
    const promise =usePostedJobApi()
    return (
        <div className='container mx-auto mt-10 mb-20 space-y-6'>
            <Suspense fallback={"loading..."}>
                <PostedJobList promise={promise(user.email, user.accessToken)}></PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;