import React, { useEffect, useState } from 'react';

const Job = () => {
    const [jobs, setJobs]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/jobs")
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    console.log(jobs)
    return (
        <div>
            
        </div>
    );
};

export default Job;