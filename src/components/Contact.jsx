import React from 'react';
import Contacts from '../img/contact.png';

const Contact = () => {
    return (
        <>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 text-center py-4 my-4'>
                        <h1 className='text '>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md 5 d-flex justify-content-center'>
                        <img
                            src={Contacts}
                            alt='Contact Us'
                            weight='500px'
                            height='500px'
                        />
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleForm'
                                    className='form-label'
                                >
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleForm'
                                    placeholder='Enter Your Full Name'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlInput1'
                                    className='form-label'
                                >
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='name@example.com'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlTextarea1'
                                    className='form-label'
                                >
                                    Text
                                </label>
                                <textarea
                                    className='form-control'
                                    id='exampleFormControlTextarea1'
                                    rows='6'
                                    placeholder='Write there...'
                                ></textarea>
                            </div>
                            <button type='submit' class='btn btn-outline-dark'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
