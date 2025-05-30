import React, { use } from 'react';

const ApplicationsList = ({promise}) => {
    const list =use(promise)
    return (
        <div>
            <h1 className='text-center font-bold text-xl mb-4'>Total Jobs Apply List : {list.length}</h1>

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
        <th>JobType</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        list.map((lists, index)=>
            <tr key={lists._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={lists.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{lists.company}</div>
              <div className="text-sm opacity-50">{lists.title}</div>
            </div>
          </div>
        </td>
        <td>
          {lists.category}
          <br />
          <span className="badge badge-ghost badge-sm">{lists.location}</span>
        </td>
        <td>{lists.jobType}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
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

export default ApplicationsList;