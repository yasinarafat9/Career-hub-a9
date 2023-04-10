import React from 'react';

const Home = () => {
    return (
        <div className=' mt-10'>
            <header className='grid grid-cols-2 gap-2'>
                <div className=''>
                    <h1 className='text-6xl font-bold'>One Step Closer To Your Dream Job</h1>
                    <br />
                    
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <br />
                    
                    <button className='btn-web'>Get Started</button>
                </div>
                <div className=''>
                    <img src="../../assets/All Images/person 2.jpg" alt="" />

                </div>
            </header>
           
        </div>
    );
};

export default Home;