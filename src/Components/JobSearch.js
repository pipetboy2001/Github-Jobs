import React, { useState, useEffect } from 'react';
import jobs from '../JSON/Data.json';
import JobSearchBar from './JobSearchBar';
import JobFilters from './JobFilters';
import { Header } from '../Components/Header'
import { Card, Row, Col, Image , Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../Styles/JobSearch.css'

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
            filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()) 
            || job.zipCode.toLowerCase().includes(location.toLowerCase()));
        }
        if (jobType !== 'all') {
            filteredJobs = filteredJobs.filter(job => job.type === jobType);
        }
        setResults(filteredJobs);
    }, [searchTerm, location, jobType]);
    
    return (
        <div>
            <Header/>
            <JobSearchBar setSearchTerm={setSearchTerm} />
            
            
            
            <div className="d-flex ">
                
                <JobFilters className='job-filters' setJobType={setJobType} setLocation={setLocation} />
                <br/>
                <div>
                    {results.map(job => (
                        <Card className="mb-3 card" style={{ maxWidth: '540px' }} key={job.id}>
                            <Row >
                                <Col md={4}>
                                    <Image src={job.logo} className="card-img" alt={job.title} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted Company ">{job.company}</Card.Subtitle>
                                        <Card.Title className='Title'>{job.title}</Card.Title>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <p className='type'> {job.type} </p>
                                                
                                                <NavLink to={`/job/${job.id}`} className='btn btn-primary btn-sm'>View</NavLink>
                                                
                                            </div>
                                            <br/>
                                            <div>
                                                <small className='text-muted'>{job.location}</small>
                                                <small className='text-muted'>{job.posted}</small>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </div>
            </div>
            

            

            

        </div>
    );
}

export default JobSearch;


