import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer-bg'>
                    <div className='footer-inside flex justify-between px-5'>
                        <div className='footer-description w-1/5'>
                            <h2 className='text-2xl font-bold'>Get The Job Done</h2>
                            <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.

                            </p>
                            <img className='pt-5' src="../../assets/Icons/Group 9969.png" alt="" />
                        </div>

                        <ul className='text-bold'>
                            <h4 className='text-xl'>Company</h4>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>

                        <ul className='text-bold'>
                            <h4 className='text-xl'>Product</h4>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>

                        <ul className='text-bold'>
                            <h4 className='text-xl'>Support</h4>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>

                        <ul className='text-bold'>
                            <h4 className='text-xl'>Contact</h4>
                            <li>524 Broadway , NYC</li>
                            <li>+1 777 - 978 - 5570</li>
                            
                        </ul>
                    </div>
                    <hr />
                </div>
            </footer>
        </div>
    );
};

export default Footer;