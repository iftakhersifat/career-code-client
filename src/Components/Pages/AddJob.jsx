import React from 'react';

const AddJob = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 mt-10 mb-20">
            <form className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <legend className="fieldset-legend">Basic Info</legend>

  <label className="label">Title</label>
  <input type="text" name='title' placeholder="My awesome page" className="input input-bordered w-full" required />

  <label className="label">Company</label>
  <input type="text" className="input input-bordered w-full" name='company' placeholder="Company Name" />

  <label className="label">Location</label>
  <input type="text" className="input input-bordered w-full" name='location' placeholder="Company Location" />

  <label className="label">Company Logo</label>
  <input type="url" className="input input-bordered w-full" name='logo' placeholder="Company URL" />
</form>

{/* job type */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <legend className="fieldset-legend">Job Type</legend>

  <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio" name="jobType" aria-label="On-Site"/>
  <input className="btn" type="radio" name="jobType" aria-label="Remote"/>
  <input className="btn" type="radio" name="jobType" aria-label="Hybrid"/>
</div>
</fieldset>
{/* job category */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <legend className="fieldset-legend">Job Category</legend>

  <select defaultValue="Pick a Job Category" className="select">
  <option disabled={true}>Select a Job Category</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Finance</option>
</select>
</fieldset>


        </div>
    );
};

export default AddJob;