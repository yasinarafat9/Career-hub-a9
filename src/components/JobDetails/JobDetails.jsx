import React from 'react';
import './JobDetails.css'

const JobDetails = () => {
    return (
        <div>
            <div className='job-details-header'>
                <h2 className='text-4xl font-bold text-center'>Job Details</h2>
            </div>
            <br />
            <br />
            <section className='flex gap-10 m-auto'>
                <div className='w-2/3'>
                    <p className='text-lg text-gray-700 font-semibold m-2'><span className='text-lg text-gray-800 font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

                    <p className='text-lg text-gray-700 font-semibold m-2'>
                        <span className='text-lg text-gray-800 font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>

                    <p className='text-lg text-gray-700 font-semibold m-2'>
                        <span className='text-lg text-gray-800 font-bold'>Educational Requirements:</span>
                    </p>

                    <p className='text-lg text-gray-700 font-semibold m-2'>Bachelor degree to complete any reputational university.</p>

                    <p className='text-lg text-gray-800 font-bold m-2'>Experiences:</p>

                    <p className='text-lg text-gray-700 font-semibold m-2'>2-3 Years in this field.</p>
                </div>
                <div className='w-1/3 job-details-right-card'>
                    <div className='job-details-right-card-texts'>
                        <h2 className='text-xl  font-bold m-2'>Job Details</h2>
                        <hr />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default JobDetails;