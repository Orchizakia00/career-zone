import { useEffect, useState } from "react";
import Job from "../job/Job";


const Featured = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength]=useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-center">Featured Jobs: {jobs.length}</h1>
            <p className="text-center my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 ml-12">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>

    );
};

export default Featured;