import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationsList from './ApplicationsList';
import useAuth from '../Firebase/useAuth';

const promise=email=>{
    return fetch(`http://localhost:3000/applications?email=${email}`).then(res=>res.json())
}

const MyApplication = () => {
    const {user}=useAuth()
    return (
        <div className='container mx-auto mt-10 mb-20 space-y-6'>
            
            <Suspense fallback={"loading your application"}>
                <ApplicationsList promise={promise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplication;