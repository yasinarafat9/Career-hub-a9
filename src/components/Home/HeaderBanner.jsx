import React from 'react';
import './Home.css'

const HeaderBanner = () => {
    return (
        <div>

            {/* header banner section */}
            <section>
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
            </section>
        </div>
    );
};

export default HeaderBanner;