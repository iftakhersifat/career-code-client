import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ViewApplications = () => {
    const { id } = useParams();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/applications/${id}`)
            .then(res => res.json())
            .then(data => setApplications(data));
    }, [id]);

    const handleChange = (e, id) => {
    const newStatus = e.target.value;

    axios.put(`http://localhost:3000/applications/${id}`, {
        status: newStatus
    })
    .then(res => {
        if (res.data.modifiedCount > 0) {
            alert("Status updated successfully");
        }
    })
    .catch(error => {
        console.error("Error updating status:", error);
    });
};


    return (
        <div className="p-5 container mx-auto">
            <h1 className="text-xl font-bold mb-4">Total {applications.length} Applications</h1>
                <div>
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            applications.map((app,index)=><tr key={app._id}>
                <th>{index + 1}</th>
        <td>{app.applicant}</td>
        <td>Quality Control Specialist</td>
        <td><select onChange={(e) => handleChange(e, app._id)} defaultValue="Update Status" className="select">
  <option disabled={true}>Status</option>
  <option>Pending</option>
  <option>Call for Interview</option>
  <option>Selected</option>
  <option>Rejected</option>
</select></td>
        </tr>
                
            )

        }
      
      
    </tbody>
  </table>
</div>
                </div>
        </div>
    );
};

export default ViewApplications;
