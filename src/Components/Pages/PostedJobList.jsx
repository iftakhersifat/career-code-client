import React, { use } from 'react';
import { Link } from 'react-router';

const PostedJobList = ({promise}) => {
    const postedList =use(promise)
    return (
        <div>
            <h1>Total Job Created:{postedList.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          List
        </th>
        <th>Company</th>
        <th>Job Category & Location</th>
        <th>Deadline</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        postedList.map((lists, index)=>
            <tr key={lists._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={lists.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
            <div>
              <div className="font-bold">{lists.company}</div>
              {/* <div className="text-sm opacity-50">{lists.title}</div> */}
            </div>
          </div>
        </td>
        <td>
          {lists.title}
          <br />
          <span className="badge badge-ghost badge-sm">{lists.location}</span>
        </td>
        <td>{lists.deadline}</td>
        <th>
          <Link to={`/applications/${lists._id}`}><button className="btn bg-blue-400 text-white rounded-box px-4 py-3 hover:bg-blue-600 btn-xs">View Application</button></Link>
        </th>
      </tr>
        
        )
       }
      
      
      
    </tbody>

  </table>
</div>
        </div>
    );
};

export default PostedJobList;