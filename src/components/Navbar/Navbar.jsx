import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center m-4'>
                <Link to='/Home'><h1 className='text-2xl font-bold'>Get Job</h1>
</Link>
                <div className='flex'>
                    <Link to='/Statistics' className='p-3'>Statistics</Link>
                    <Link to='/AppliedJobs' className='p-3'>Applied Jobs</Link>
                    <Link to='/Blog' className='p-3'>Blog</Link>
                </div>
                <button className='btn-web'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;