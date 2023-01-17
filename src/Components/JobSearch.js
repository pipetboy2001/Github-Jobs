import React, { useState, useEffect } from 'react';
import jobs from '../JSON/Data.json';
import JobSearchBar from './JobSearchBar';
import JobFilters from './JobFilters';

const JobSearch = () => {
    const [results, setResults] = useState(jobs.jobs);
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('all');

    useEffect(() => {
        let filteredJobs = jobs.jobs;
        if (searchTerm) {
            filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (location) {
            filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()) || job.zipCode.toLowerCase().includes(location.toLowerCase()));
        }
        if (jobType !== 'all') {
            filteredJobs = filteredJobs.filter(job => job.type === jobType);
        }
        setResults(filteredJobs);
    }, [searchTerm, location, jobType]);
    
    return (
        <div>
            <JobSearchBar setSearchTerm={setSearchTerm} />
            <JobFilters setJobType={setJobType} setLocation={setLocation} />
            <ul>
                {results.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <p>{job.zipCode}</p>
                        <p>{job.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobSearch;