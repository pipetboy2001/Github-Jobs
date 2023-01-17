import React, { useState } from 'react';
import '../Styles/JobSearchBar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const JobSearchBar = ({ setSearchTerm }) => {
    const [searchTerm, setLocalSearchTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchTerm);
    }

    return (
        <>
            <h1 className='title'><b>Github</b> Jobs</h1>
            <div className="background-container">
                <img
                    src="https://github.com/pipetboy2001/Github-Jobs/blob/main/src/Assest/backgroundImg.png?raw=true"
                    alt="background"
                    className="background-img"
                />
                <div className='Formulario'>
                    <Form className="Form" onSubmit={handleSearch}>
                        <Form.Group controlId="formSearchTerm">
                            <Form.Control
                                className="input"
                                placeholder='title ,companies,expertise or benefist'
                                type="text"
                                value={searchTerm}
                                onChange={e => setLocalSearchTerm(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Search</Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default JobSearchBar;


