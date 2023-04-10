import React from 'react';
import './Home.css'
import HeaderBanner from './HeaderBanner';
import JobCatagory from './JobCatagory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <br />
            <JobCatagory></JobCatagory>
            <br />
            <br />
            <FeaturedJobs></FeaturedJobs>


        </div>




    );
};

export default Home;