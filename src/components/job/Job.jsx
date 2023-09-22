import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex mt-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">{job_type}</button>
                </div>
                <div className="flex gap-6 my-4">
                    <div className="flex">
                    <MdLocationOn className="text-2xl mr-2"></MdLocationOn> 
                    <p> {location}</p>
                    </div>
                    <div className="flex">
                    <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar> 
                    <p> {salary}</p>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Job;