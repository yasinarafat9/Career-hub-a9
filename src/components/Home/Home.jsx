import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>

            {/* header banner */}
            <div className=' mt-10'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className=''>
                        <h1 className='text-5xl font-bold'>Now Your Hobby Becomes Your <span className='text-purple-500'>Dream Job</span></h1>


                        <p className='py-4 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>


                        <button className='btn-web'>Get Started</button>
                    </div>
                    <div className=''>
                        <img src="../../assets/All Images/person 2.jpg" alt="" />

                    </div>
                </div>
            </div>

            <br />
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-center'>Job Category List</h1>
                <p className='text-center m-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
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
                            <img src="../../assets/Icons/accounts 1.png" alt="" />
                        </div>
                        <div className='card-texts p-3'>
                            <h4 className='text-xl font-semibold'>Account & Finance</h4>
                            <p className='text-md text-gray-700 font-semibold'>300 Jobs Available</p>
                        </div>
                    </div>
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
                            <img src="../../assets/Icons/accounts 1.png" alt="" />
                        </div>
                        <div className='card-texts p-3'>
                            <h4 className='text-xl font-semibold'>Account & Finance</h4>
                            <p className='text-md text-gray-700 font-semibold'>300 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>




    );
};

export default Home;