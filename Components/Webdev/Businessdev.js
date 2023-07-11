import { useRouter } from 'next/router';
import React from 'react'
import Ascand from '../MobileDesigns/Webdevmob/Ascand'
import Bloackchain from '../MobileDesigns/Webdevmob/Bloackchain'
import Solutions from '../MobileDesigns/Webdevmob/Solutions'

function Businessdev() {
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }
    return (
        <div className='col-md-12 p-0'>
            <div className='col-md-12 px-0 background_businesss display_h'>
                <div className='container px-5'>
                    <div className='col-md-12 text-center'>
                        <h2 className='color_heading_white'> FULL SUITE OF WEB DEVELOPMENT SERVICES</h2>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className="col-md-6 px-5 mb-5 pb-5">
                            <div className="col-md-12 pt-3">
                                <p className='color_white mb-1 pt-0'>Front-end web development</p>
                                <p className="custom_paraa_font text-light">Front-end web development is our speciality. From big e-commerce websites to medium businesses and small startups, we love helping companies grow online. We are passionate about making the websites we work on intuitive and easy to use, leveraging the latest HTML5, CSS3 and Javascript.  </p>
                            </div>
                            <div className='col-md-12'>
                                <p className='color_white1 mb-1'>Custom Web Development</p>
                                <p className="custom_paraa_font text-light">Our team of experienced senior developers delivers custom web development services using a variety of front-end and back-end technologies, frameworks and platforms. We can build from scratch or improve an existing website that you have.</p>
                            </div>
                        </div>
                        <div className='col-md-6 px-5'>
                            <div className='col-md-12'>
                                <p className='color_white mb-1 pt-3'>Open-Source Platform Development</p>
                                <p className="custom_paraa_font text-light">Responsive design, rich features and custom functions are now a ‘must’ in digital presence. Selteq provides professional open-source platform development services to build a dynamic website that stands out.</p>
                            </div>
                            <div className='col-md-12'>
                                <p className='color_white1 mb-1 pt-3'>eCommerce Development</p>
                                <p className="custom_paraa_font text-light">We proudly present our services and are ready to start the most challenging eCommerce project. We will work with you to consider your operational needs, identify your users’ needs, and develop an eCommerce website that will boost sales and be a pleasure to customers of all ages.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 text-center pt-5">
                        <button
                            onClick={() => contact()}
                            className="btn btn-danger btn-lg font_color_size py-2 px-5 animated_button_banner"
                        >
                            <span class="button-text">BOOK CONSULTATION
                                <i id="arrow_icon" className="fas fa-arrow-right"></i>
                            </span>
                            <span class="animation-layer"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-md-12 display_pc px-0'>
                {/* <Ascand /> */}
            </div>
            <div className='col-md-12 display_pc px-0'>
                <Bloackchain />
            </div>
            <div className='col-md-12 display_pc px-0'>
                <Solutions />
            </div>
        </div>
    )
}

export default Businessdev