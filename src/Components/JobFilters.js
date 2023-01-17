import React, { useState } from 'react';

const JobFilters = ({ setJobType, setLocation }) => {
    const [jobType, setLocalJobType] = useState('all');
    const [location, setLocalLocation] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'jobType') {
            setJobType(e.target.value);
            setLocalJobType(e.target.value);
        }
        if (e.target.name === 'location') {
            setLocation(e.target.value);
            setLocalLocation(e.target.value);
        }
    }

    return (
        <div>
            <label>
                Job Type:
                <select name="jobType" value={jobType} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="internship">Internship</option>
                </select>
            </label>
            <label>
                Location:
                <input name="location" type="text" value={location} onChange={handleChange} />
            </label>
        </div>
    );
}

export default JobFilters;
