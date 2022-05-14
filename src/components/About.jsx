import React from 'react';
import { Link } from 'react-router-dom';
import About1 from '../img/about.png';

const About = () => {
    return (
        <>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi quo, saepe dolorum fugiat, voluptate hic
                            iusto est eligendi ut eius possimus ratione iure.
                            Tenetur consectetur facere animi? Nobis, neque
                            obcaecati. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Accusamus rem voluptatibus
                            inventore praesentium iste quibusdam ex nisi eius,
                            quasi fugiat maxime, harum ducimus quisquam vitae,
                            consectetur repellat quia minus ea! Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit.
                            Corporis in dolorem praesentium placeat hic
                            perferendis, iusto itaque excepturi, veritatis iste
                            inventore. Deserunt quaerat architecto molestias ex
                            odit, labore quasi non! Accusamus rem voluptatibus
                            inventore praesentium iste quibusdam ex nisi eius,
                            quasi fugiat maxime, harum ducimus quisquam vitae,
                            consectetur repellat quia minus ea! Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit.
                            Corporis in dolorem praesentium placeat hic
                            perferendis, iusto itaque excepturi, veritatis iste
                            inventore. Deserunt quaerat architecto molestias ex
                            odit, labore quasi non!
                        </p>
                        <Link
                            to='/contact'
                            className='btn btn-outline-dark px-3'
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className='col-md-6 d-flex '>
                        <img
                            src={About1}
                            alt='About'
                            // height='400px'
                            width='800px'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
