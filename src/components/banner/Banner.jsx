
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img src="./user.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-violet-400">Dream Job</span></h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage <br /> all your job application from start to finish.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;