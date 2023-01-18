import React from "react";
import { useParams } from "react-router-dom";
export default function JobPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Job Details</h1>
            <p>Job ID: {id}</p>

        </div>
    );
}
