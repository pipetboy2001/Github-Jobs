import React, { useState } from 'react';

const JobSearchBar = ({ setSearchTerm }) => {
    const [searchTerm, setLocalSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchTerm);
    }

    return (
        <form onSubmit={handleSearch}>
            <label>
                Search Term:
                <input type="text" value={searchTerm} onChange={e => setLocalSearchTerm(e.target.value)} />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default JobSearchBar;
