import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center m-4'>
                <h1 className='text-2xl font-bold ' >Get Job</h1>

                <div className='flex'>
                    <p className='p-3'>Statistics</p>
                    <p className='p-3'>Applied Jobs</p>
                    <p className='p-3'>Blog</p>
                </div>
                <button className='btn-web'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;