import React from 'react';
import './Home.css'

const JobCatagory = () => {
    return (
        <div>
            {/* Job Catagory section */}
            <section>
                <div className='mt-10'>
                    <h2 className='text-4xl font-bold text-center'>Job Category List</h2>
                    <p className='text-center text-md text-gray-700 font-semibold m-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <br />
                <br />

                <div>
                    <div className='grid grid-cols-4 m-auto '>
                        <div className='card-border'>
                            <div className='img-border'>
                                <img src="../../assets/Icons/accounts 1.png" alt="" />
                            </div>
                            <div className='card-texts p-3'>
                                <h4 className='text-xl font-semibold'>Account & Finance</h4>
                                <p className='text-md text-gray-700 font-semibold'>300 Jobs Available</p>
                            </div>
                        </div>
                        <div className='card-border'>
                            <div className='img-border'>
                                <img src="../../assets/Icons/business 1.png" alt="" />
                            </div>
                            <div className='card-texts p-3'>
                                <h4 className='text-xl font-semibold'>Creative Design</h4>
                                <p className='text-md text-gray-700 font-semibold'>100+ Jobs Available</p>
                            </div>
                        </div>
                        <div className='card-border'>
                            <div className='img-border'>
                                <img src="../../assets/Icons/social-media 1.png" alt="" />
                            </div>
                            <div className='card-texts p-3'>
                                <h4 className='text-xl font-semibold'>Marketing & Sales</h4>
                                <p className='text-md text-gray-700 font-semibold'>150 Jobs Available</p>
                            </div>
                        </div>
                        <div className='card-border'>
                            <div className='img-border'>
                                <img src="../../assets/Icons/chip 1.png" alt="" />
                            </div>
                            <div className='card-texts p-3'>
                                <h4 className='text-xl font-semibold'>Engineering Job</h4>
                                <p className='text-md text-gray-700 font-semibold'>224 Jobs Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default JobCatagory;