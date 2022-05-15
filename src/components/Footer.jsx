import React from 'react';
import { Link } from 'react-router-dom';
// import Twitter from '../img/twitter.png';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <>
            <div className='container'>
                <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                    <div className='col-md-4 d-flex align-items-center'>
                        <Link
                            to='/'
                            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
                        ></Link>
                        <span className='text-muted'>
                            © 2022 AYDev., All Rights Reserved
                        </span>
                    </div>
                    <div className='col-md-1 d-flex me-2 justify-content-end list-unstyled '>
                        <SocialIcon url='https://linkedin.com/in/alex-yehorov-01a44716a/' />
                        <SocialIcon url='https://twitter.com/' />
                        <SocialIcon url='https://facebook.com/' />
                        <SocialIcon url='https://instagramm.com/' />
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
