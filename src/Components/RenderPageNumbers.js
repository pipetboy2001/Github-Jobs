import React from 'react';
import Button from 'react-bootstrap/Button';
import '../Styles/RenderPage.css';

const RenderPageNumbers = ({ setCurrentPage, results, jobsPerPage, currentPage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(results.length / jobsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(number => (
                <Button key={number} className={currentPage === number ? "current-page" : ""} onClick={() => setCurrentPage(number)}>
                    {number}
                </Button>
            ))}
        </div>
    );
}

export default RenderPageNumbers;
