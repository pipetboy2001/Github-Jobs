import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import jobs from "../JSON/Data.json";
import {Image ,Button} from 'react-bootstrap';
import '../Styles/JobPage.css'
import { Header } from '../Components/Header'
import { FaMedapps } from "react-icons/fa";
import { ImBackward2 } from "react-icons/im";

export default function JobPage() {

    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const job = jobs.jobs.find((job) => job.id === Number(id));
        setJob(job);

    }, [id]);


    return (
        <>
            <Header/>
            <div className="d-flex"  >
                {/* añadir un boton para regresar */}
                <div className="HowToApply" style={{ width: "20rem" }}>
                    <Button variant="primary" href="/"><ImBackward2/> Back</Button>

                    <h4>How to apply<FaMedapps/></h4>
                    {job ? (
                        // accede a la propiedad email
                        <p>Please email a copy of your resume and online portafolio to {job.email}</p>
                    ) : (
                        <div>Job not found</div>
                    )}
                     </div>
                

                {job ? (
                    <div className="Job" style={{ width: "50rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">{job.title} <p className='type'>{job.type}</p> </h4>
                            <Image src={job.logo} className="card-img" alt={job.title} />
                            <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                            <p className="card-text">{job.location}</p>
                            <p className="card-text">{job.description}</p>
                        </div>
                    </div>
                ) : (
                    <div>Job not found</div>
                )}
            </div>
        </>
    );

}
