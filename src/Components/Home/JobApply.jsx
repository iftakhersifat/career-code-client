import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Firebase/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id}=useParams()
    const {user}=useAuth()
    console.log(id, user)

    const handelApply =e=>{
        e.preventDefault();
        const form=e.target;
        const linkedIN=form.link.value;
        const github =form.github.value;
        const resume =form.resume.value;
        console.log(linkedIN, github, resume)

        const application ={
            id,
            applicant : user.email,
            linkedIN,
            github,
            resume
        }

        axios.post("http://localhost:3000/applications", application)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                title: "Your Application has been Submitted",
                icon: "success",
                draggable: true
              });
            }
        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className="max-w-2xl mx-auto px-4 mt-10 mb-20">
      <h1 className="text-3xl font-bold text-center mb-6">Apply for Job</h1>

      <form onSubmit={handelApply} className="bg-base-200 border border-base-300 rounded-xl p-6 shadow-md space-y-4">
        <fieldset>
          <legend className="text-lg font-semibold mb-4">Provide Your Details</legend>

          <div className="form-control mb-4">
            <label className="label font-medium" htmlFor="linkedin">
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              name='link'
              type="url"
              placeholder="https://linkedin.com/in/your-profile"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-medium" htmlFor="github">
              GitHub Profile
            </label>
            <input
              id="github"
              type="url"
              name='github'
              placeholder="https://github.com/your-profile"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-medium" htmlFor="resume">
              Resume Link
            </label>
            <input
              id="resume"
              type="url"
              name='resume'
              placeholder="https://drive.google.com/your-resume"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="text-right">
            <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 px-6">
              Apply
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
