import React, { Suspense } from 'react';
import PostedJobList from './PostedJobList';
import useAuth from '../Firebase/useAuth';

const promise=email=>{
    return fetch(`http://localhost:3000/jobs?email=${email}`).then(res=>res.json())
}

const MyPostedJob = () => {
    const {user} =useAuth()
    return (
        <div className='container mx-auto mt-10 mb-20 space-y-6'>
            <Suspense fallback={"loading..."}>
                <PostedJobList promise={promise(user.email)}></PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;