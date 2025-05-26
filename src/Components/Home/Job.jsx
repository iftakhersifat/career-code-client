import React, { useEffect, useState } from 'react';

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-8">Jobs of the Day</h1>
      <p className="text-center mb-8 text-gray-500">
        Search and connect with the right candidates faster.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4 md:px-0">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border border-blue-300 bg-blue-100 p-4 rounded-xl h-[400px] flex flex-col justify-between"
          >
            {/* Header: Company Info */}
            <div className="flex gap-4 items-center mb-4">
              <img src={job.company_logo} className="w-16 h-16 object-contain" alt="Company Logo" />
              <div>
                <h2 className="font-semibold">{job.jobType}</h2>
                <p className="text-sm text-gray-600">{job.location}</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="space-y-3 flex-1">
              <h2 className="font-bold text-xl">{job.title}</h2>
              <p className="text-sm font-medium">Salary: {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
              <p className="text-gray-700 text-sm line-clamp-3">{job.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {job.requirements.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-blue-300 bg-gray-100 text-xs rounded-full hover:text-blue-500 transition duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer: Apply Button */}
            <div className="text-right">
              <button className="btn bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
