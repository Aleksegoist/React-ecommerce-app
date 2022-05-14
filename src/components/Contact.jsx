import React from 'react';
import Contacts from '../img/contact.png';

const Contact = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text '>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md 5'>
                        <img
                            src={Contacts}
                            alt='Contact Us'
                            weight='400px'
                            height='400px'
                        />
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        </>
    );
};

export default Contact;
