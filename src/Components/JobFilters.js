import React, { useState } from 'react';
import '../Styles/JobFilters.css'
import { BiLocationPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { VscUngroupByRefType } from "react-icons/vsc";

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
        <div className="Filters ">
            <h4><FiFilter/>Filters:</h4>
            <div className="form-group">
                <label><VscUngroupByRefType/>Job Type:</label>
                <select className="form-control" name="jobType" value={jobType} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="internship">Internship</option>
                </select>
            </div>
            <div className="form-group">
                <label><BiLocationPlus/>Location:</label>
                <input className="form-control" name="location" type="text" value={location} onChange={handleChange} />
            </div>
        </div>



    );
}

export default JobFilters;
