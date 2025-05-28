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
{/* application deadline */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <legend className="fieldset-legend">Application Deadline</legend>

  <input type="date" className="input" />

</fieldset>

{/* salary range */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <legend className="fieldset-legend text-lg font-semibold mb-2">Salary Range</legend>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    {/* Minimum Salary */}
    <div>
      <label className="label font-medium">Minimum Salary</label>
      <input 
        type="text" 
        name='minimum' 
        placeholder="Enter minimum salary" 
        className="input input-bordered w-full" 
        required 
      />
    </div>

    {/* Maximum Salary */}
    <div>
      <label className="label font-medium">Maximum Salary</label>
      <input 
        type="text" 
        name='maximum' 
        placeholder="Enter maximum salary" 
        className="input input-bordered w-full" 
      />
    </div>

    {/* Currency Selection */}
    <div>
      <label className="label font-medium">Currency</label>
      <select 
        defaultValue="" 
        className="select select-bordered w-full" 
        name="currency"
        required
      >
        <option disabled value="">Select a Currency</option>
        <option>BDT</option>
        <option>USD</option>
        <option>EU</option>
      </select>
    </div>
  </div>
</fieldset>



        </div>
    );
};

export default AddJob;