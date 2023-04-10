import React from 'react';
import './Home.css'

const FeaturedJobs = ({featuredJob}) => {
    const {id, img, jobName, companyName, location, salary} = featuredJob;

    return (
        <div className='m-auto my-10'>
            <div className='job-card p-10'>
                <div>
                    <img src={img} alt="" />
                    <h4 className='text-2xl text-gray-800 font-bold py-1'>{jobName}</h4>
                    <p className='text-lg text-gray-700 font-semibold py-1'>{companyName}</p>
                </div>
                <div className='py-1'>
                    <button className='btn-job'>Remote</button>   <button className='btn-job'>Full Time</button>
                </div>
                <div className='py-1 text-lg text-gray-700 font-semibold'>
                    <p>{location} {salary}</p>
                </div>
                <button className='btn-web mt-2'>View Details</button>

            </div>
           
        </div>
    );
};

export default FeaturedJobs;