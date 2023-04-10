import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center mt-2'>
                <Link to='/Home'><h1 className='text-2xl font-bold'>Get The Job Done</h1>
</Link>
                <div className='flex nav-word'>
                    <Link to='/Home' className='p-3'><p>Home</p></Link>
                    <Link to='/Statistics' className='p-3'><p>Statistics</p></Link>
                    <Link to='/AppliedJobs' className='p-3'><p>Applied Jobs</p></Link>
                    <Link to='/Blog' className='p-3'><p>Blog</p></Link>
                </div>
                <button className='btn-web'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;