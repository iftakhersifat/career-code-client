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

    return (
        <div className="p-5 container mx-auto">
            <h1 className="text-xl font-bold mb-4">Total {applications.length} Applications</h1>
            <ul className="space-y-2">
                {
                    applications.map(app => (
                        <li key={app._id} className="border p-3 rounded">
                            <p><strong>Email:</strong> {app.applicant}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ViewApplications;
