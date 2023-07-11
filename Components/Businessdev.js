import { useRouter } from 'next/router';
import React from 'react'
import Ascand from './MobileDesigns/Softwaredev/Ascand'
import Bloackchain from './MobileDesigns/Softwaredev/Bloackchain'
import Solutions from './MobileDesigns/Softwaredev/Solutions'

function Businessdev() {
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }
    return (
        <div className='col-md-12 p-0'>
            <div className='col-md-12 px-0 background_business display_h '>
                <div className='container px-5'>
                    <div className='col-md-12 text-center'>
                        <h2 className='color_heading_white'> Ascendancy by Digital Prowess</h2>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className="col-md-6 px-5 mb-5 pb-5">
                            <div className="col-md-12 pt-3">
                                <p className="color_white mb-1 pt-0">Business Automation</p>
                                <p className='custom_paraa_font text-light'>Automate repetitive task, improve efficiency and reduce errors by developing  </p>
                            </div>
                            <div className='col-md-12'>
                                <p className="color_white1 mb-1 pt-0">Data Management</p>
                                <p className='custom_paraa_font text-light'>Managing and analysing your data more effectively by developing software solutions that fit your needs.</p>
                            </div>
                        </div>
                        <div className="col-md-6 px-5">
                            <div className="col-md-12">
                                <p className="color_white mb-1 pt-3">
                                    AR/VR Developmen
                                    t</p>
                                <p className='custom_paraa_font text-light'>Developing AR/VR applications for various industries such as gaming, education and training, medical, and more.  </p>
                            </div>
                            <div className='col-md-12'>
                                <p className="color_white1 mb-1 pt-0">AI and Machine Learning</p>
                                <p className='custom_paraa_font text-light'>Helping you harness the power of AI & machine learning to improve automate tasks and gain insights from data.  </p>
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



            {/* mobile  */}
            <div className='col-md-12 display_pc px-0'>
                <Ascand />
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