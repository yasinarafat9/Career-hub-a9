import React from 'react';
import './AppliedJobs.css'
const AppliedJobs = () => {
    return (
        <div>
            <div className='job-details-header'>
                <h2 className='text-4xl font-bold text-center'>Applied Jobs</h2>
            </div>
            <br />
            <div className='netflix-full-card flex justify-between'>
                <div className='flex gap-10'>
                    <div className='netflix-img-card'>
                        <img src="../../assets/All Images/netflix-4 1.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <h4 className='text-xl text-gray-900 font-bold py-2'>Senior Product Designer</h4>
                            <p className='text-lg text-gray-700 font-semibold py-1'>Netflix</p>
                        </div>
                        <div>
                            <button className='btn-job'>Remote</button>   <button className='btn-job'>Full Time</button>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700 font-semibold py-1'><span className='text-lg text-gray-800 font-bold'>Address:</span>  Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh</p>
                            <p className='text-lg text-gray-700 font-semibold py-1'><span className='text-lg text-gray-800 font-bold'>Salary :</span> 100K - 150K (Per Month)</p>
                        </div>
                    </div>
                </div>
                {/* <a href="../JobDetails"><button className='btn-web'>View Details</button></a> */}
                <p className='button-p'><button className='btn-web'>View Details</button></p>
                
            </div>
        </div>
    );
};

export default AppliedJobs;