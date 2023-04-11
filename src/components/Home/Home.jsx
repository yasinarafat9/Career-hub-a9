import React, { useState } from 'react';
import './Home.css'
import HeaderBanner from './HeaderBanner';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredJobs = useLoaderData();
    // console.log(featuredJobs)

    const [jobs, setJobs] = useState([]);

    const handleAddToJobs = featuredJobs => {
        const newJobs = [...jobs, featuredJobs];
        setJobs(newJobs)
        // console.log(featuredJobs);

    }


    return (
        <div>
            {/* <h1>jobs : {featuredJobs.length}</h1> */}
            <HeaderBanner></HeaderBanner>
            <br />
            <JobCategory></JobCategory>
            <br />
            <br />
            <section>
                <div>
                    <div>
                        <h2 className='text-4xl font-bold text-center'>Featured Jobs</h2>
                        <p className='text-center text-md text-gray-700 font-semibold m-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                    </div>
                </div>
            </section>
            <div className='grid grid-cols-2 m-auto'>
            {
                featuredJobs.map(featuredJob =><FeaturedJobs
                key={featuredJob.id}
                featuredJob = {featuredJob}
                handleAddToJobs = {handleAddToJobs}
                ></FeaturedJobs> )
            }
            </div>


        </div>




    );
};

export default Home;