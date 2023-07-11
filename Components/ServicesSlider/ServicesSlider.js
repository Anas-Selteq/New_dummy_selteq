import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';

const ServicesSlider = () => {
    return (
        <Carousel controls={false}
            style={{ backgroundImage: "url('https://1864597015.rsc.cdn77.org/selteqreact/Assets/Images/sel5.jpg')", height: '400px' }} className='mb-4 p-4'>
            <Carousel.Item>
                <div className='row text-light'>
                    <div className='col-4 h-100 d-flex align-items-center'>
                        <img
                            className="d-block w-100"
                            src="https://1864597015.rsc.cdn77.org/selteqreact/images/qa.webp"
                            alt="Second slide"
                        />
                    </div>
                    <div className='col-6 h-100'>
                        <h4 className=''>Metaverse</h4>
                        <p className=''>We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction.</p>
                    </div>
                    <div className='col-2 h-100'>
                        <ul style={{ listStyle: "none" }}>
                            <ul style={{ listStyle: "none" }}>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">CRM</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">ERP</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">IOT</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">Metaverse</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">BPO</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">IT Outsourcing</Link></li>
                                <li className='list_itm mb-2'><Link className='text-light' href="#">Data Analysis</Link></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='row text-light'>
                    <div className='col-4 h-100'>
                        <img
                            className="d-block w-100 d-flex align-items-center"
                            src="https://1864597015.rsc.cdn77.org/selteqreact/images/lap1.webp"
                            alt="Second slide"
                        />
                    </div>
                    <div className='col-6 h-100'>
                        <h4 className=''>Metaverse</h4>
                        <p className=''>We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction.</p>
                    </div>
                    <div className='col-2 h-100'>
                        <ul style={{ listStyle: "none" }}>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">CRM</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">ERP</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">IOT</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">Metaverse</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">BPO</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">IT Outsourcing</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">Data Analysis</Link></li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='row text-light'>
                    <div className='col-4 h-100 d-flex align-items-center'>
                        <img
                            className="d-block w-100"
                            src="https://1864597015.rsc.cdn77.org/selteqreact/images/mobile.webp"
                            alt="Second slide"
                        />
                    </div>
                    <div className='col-6 h-100'>
                        <h4 className=''>Metaverse</h4>
                        <p className=''>We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction.</p>
                    </div>
                    <div className='col-2 h-100'>
                        <ul style={{ listStyle: "none" }}>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">CRM</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">ERP</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">IOT</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">Metaverse</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">BPO</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">IT Outsourcing</Link></li>
                            <li className='list_itm mb-2'><Link className='text-light' href="#">Data Analysis</Link></li>
                        </ul>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default ServicesSlider;
