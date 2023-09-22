import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt)
    console.log(id, jobs);

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('Congratulations! You have applied successfully.');
    }


    return (
        <div>
            <div className="hero my-8" style={{ backgroundImage: 'url(./bg1.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
                    </div>
                </div>
            </div>


            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-4">
                    <p className="mb-5">
                        <span className="font-bold">Job Description:</span> {job.job_description}
                    </p>
                    <p className="mb-5">
                        <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}
                    </p>
                    <p className="mb-5">
                        <span className="font-bold">Educational Requirements:</span> {job.educational_requirements}
                    </p>
                    <p className="mb-5">
                        <span className="font-bold">Experiences:</span> {job.experiences}
                    </p>
                </div>
                <div >
                    <div className="border p-4">
                        <p className="font-bold mb-4">Job Details</p>
                        <hr />
                        <p className="my-4"><span className="font-bold">Salary:</span> {job.salary}</p>
                        <p className="mb-4"><span className="font-bold">Job Title:</span> {job.job_title}</p>
                        <hr />
                        <p className="my-4"><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                        <p className="mb-4"><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                        <p className="mb-4"><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn mt-4 btn-success w-full">Apply now</button>
                </div>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default JobDetails;