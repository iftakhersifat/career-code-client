import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationsList from './ApplicationsList';
import useAuth from '../Firebase/useAuth';
import MyApplicationAPi from '../Api/MyApplicationAPi';

// const promise=(email, accessToken)=>{
//     return fetch(`http://localhost:3000/applications?email=${email}`,{
//         // credentials:'include'
//         headers:{
//             authorization: `Bearer ${accessToken}`,
//         }
//     }).then(res=>res.json())
// }


const MyApplication = () => {
    const {user}=useAuth()
    const promise=MyApplicationAPi()
    console.log("token", user.accessToken)
    return (
        <div className='container mx-auto mt-10 mb-20 space-y-6'>
            
            <Suspense fallback={"loading your application"}>
                <ApplicationsList promise={promise(user.email, user.accessToken)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplication;