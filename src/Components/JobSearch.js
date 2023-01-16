import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobSearch() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.get(`https://www.themuse.com/api/public/jobs?page=2`);
            // const response = await axios.get(`https://api-v2.themuse.com/jobs?location=Flexible%20%2F%20Remote&page=1`);

            // const response = await axios.get(`https://api-v2.themuse.com/jobs?category=${category}&level=${level}&location=${location}`);
            setJobs(response.data.results);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Job Search</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
                </label>
                <label>
                    Level:
                    <input type="text" value={level} onChange={e => setLevel(e.target.value)} />
                </label>
                <label>
                    Location:
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </label>
                <button type="submit">Search</button>
            </form>

            <ul>

                {jobs.map(job => (
                    <li key={job.id}>
                        <p>name: {job.name}</p>
                        <p>Type: {job.type}</p>
                        <p>Publication Date: {job.publication_date}</p>
                        <p>shortName: {job.short_name}</p>
                        <p>model_type: {job.model_type}</p>
                        <p>id: {job.id}</p>
                        <p>Location:
                            {job.locations.map(location => (
                                <li key={location.name}>
                                    <p>name: {location.name}</p>
                                </li>
                            ))}
                        </p>
                        <p>Category:
                            {job.categories.map(category => (
                                <li key={category.name}>
                                    <p>name: {category.name}</p>
                                </li>
                            ))}
                        </p>
                        <p>Level:
                            {job.levels.map(level => (
                                <li key={level.name}>
                                    <p>name: {level.name}</p>
                                    <p>short_name: {level.short_name}</p>
                                </li>
                            ))}
                        </p>
                        <p>tags:
                            {job.tags.map(tag => (
                                <li key={tag.name}>
                                    <p>name: {tag.name}</p>
                                    <p>short_name: {tag.short_name}</p>
                                </li>
                            ))}
                        </p>
                    </li>
                ))
                }
                

                
                        

            </ul>
        </div>
    );
}

export default JobSearch;
