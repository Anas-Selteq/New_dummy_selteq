import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/router';
import { MdNavigateNext } from 'react-icons/md';
import { GrNext } from 'react-icons/gr';

function Videosec() {
    const [ana, setAna] = useState(1)
    const router = useRouter();
    const medical = () => {
        router.push("/industries/health-care-and-medical-software")
    }
    const banking = () => {
        router.push("/industries/finance-banking")
    }
    const education = () => {
        router.push("/industries/education-technology")
    }
    const ecomm = () => {
        router.push("/industries/e-commerce-solutions")
    }
    const erp = () => {
        router.push("/industries/enterprise-resource-planning")
    }
    // const banking = () => {
    //     router.push("/banking-and-finance")
    // }
    // const banking = () => {
    //     router.push("/banking-and-finance")
    // }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='col-md-12 px-0'>
            <div className='display_h'>
                <div className='col-md-12 text-center'>
                    <h1 className='color_red_ind' >Industries</h1>
                </div>

                <Carousel
                    // removeArrowOnDeviceType={["desktop"]}
                    customTransition="all 3s"
                    //   transitionDuration={3500}
                    autoPlaySpeed={6000}
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}>
                    <div className='col-md-12 px-0'>
                        {/* Buttons  */}
                        {/* <div className='col-md-12 text-right pt-5  marg_bottom_btn'>
            <span><button className='btn btn-danger btn-sm  bt_active_video_land rounded-pill' >Healthcare & Medical</button></span>
            <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill' onClick={()=>setAna(2)}>Banking & Finance </button></span>
            <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Education</button></span>
            <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>ERP</button></span>
            <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Ecommerce</button></span>
        </div> */}
                        {/* Video--------------------------------------------------------------------------------------------------------------------------------------------  */}
                        <video loop autoPlay muted className="vedioPlayer1">
                            <source src="https://1864597015.rsc.cdn77.org/selteqreact/video/one.mp4" type='video/mp4' />
                        </video>

                        {/* description  */}
                        <div className='col-md-12 px-5 margin_top_1 pb-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h2 data-aos="fade-right" className='video1'>Healthcare & Medical</h2>
                                    <p data-aos="fade-right" className='paragrap_bring_tog'>Bringing together technologies and expertise that makes a difference at Selteq, we know the future is now. Innovation trumps standard processes when it comes to the healthcare technology arena. </p>
                                    <div className='col-md-12 text-center'>
                                        <span><button onClick={() => medical()} className='btn btn-light bt_video_land1 rounded-pill'>Learn More </button></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 px-0'>
                        {/* Buttons  */}
                        {/* <div className='col-md-12 text-right pt-5  marg_bottom_btn'>
                    <span><button className='btn btn-light btn-sm bt_video_land  rounded-pill' >Healthcare & Medical</button></span>
                    <span><button className='btn btn-danger  btn-sm bt_active_video_land  rounded-pill' onClick={()=>setAna(2)}>Banking & Finance </button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Education</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>ERP</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Ecommerce</button></span>
                </div> */}
                        {/* Video  */}
                        <video loop autoPlay muted className="vedioPlayer1">
                            <source src="https://1864597015.rsc.cdn77.org/selteqreact/video/banking.mp4" type='video/mp4' />
                        </video>

                        {/* description  */}
                        <div className='col-md-12 px-5 margin_top_1 pb-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h2 data-aos="fade-right" className='video1'>Banking & Finance</h2>
                                    <p data-aos="fade-right" className='paragrap_bring_tog'>We help financial institutions, wealth management and banking companies transform their offerings with custom software development services for their customer’s emerging needs.. </p>
                                    <div className='col-md-12 text-center'>
                                        <span ><button onClick={() => banking()} className='btn btn-light bt_video_land1 rounded-pill'>Learn More </button></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 px-0'>
                        {/* Buttons  */}
                        {/* <div className='col-md-12 text-right pt-5  marg_bottom_btn'>
                    <span><button className='btn btn-light btn-sm  bt_video_land rounded-pill' >Healthcare & Medical</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill' onClick={()=>setAna(2)}>Banking & Finance </button></span>
                    <span><button className='btn btn-danger  btn-sm bt_active_video_land  rounded-pill'>Education</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>ERP</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Ecommerce</button></span>
                </div> */}
                        {/* Video  */}
                        <video loop autoPlay muted className="vedioPlayer1">
                            <source src="https://1864597015.rsc.cdn77.org/selteqreact/video/edu.mp4" type='video/mp4' />
                        </video>

                        {/* description  */}
                        <div className='col-md-12 px-5 margin_top_1 pb-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h2 data-aos="fade-right" className='video1'>Education</h2>
                                    <p data-aos="fade-right" className='paragrap_bring_tog'>At Selteq, we are passionate about education and aim to unleash the power of digital learning - empowering educators to manage their classroom from anywhere. </p>
                                    <div className='col-md-12 text-center'>
                                        <span  ><button onClick={() => education()} className='btn btn-light bt_video_land1 rounded-pill'>Learn More </button></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 px-0'>
                        {/* Buttons  */}
                        {/* <div className='col-md-12 text-right pt-5  marg_bottom_btn'>
                    <span><button className='btn btn-light btn-sm  bt_video_land rounded-pill' >Healthcare & Medical</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill' onClick={()=>setAna(2)}>Banking & Finance </button></span>
                    <span><button className='btn btn-danger  btn-sm bt_active_video_land  rounded-pill'>Education</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>ERP</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Ecommerce</button></span>
                </div> */}
                        {/* Video  */}
                        <video loop autoPlay muted className="vedioPlayer1">
                            <source src="https://1864597015.rsc.cdn77.org/selteqreact/video/ecomm.mp4" type='video/mp4' />
                        </video>

                        {/* description  */}
                        <div className='col-md-12 px-5 margin_top_1 pb-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h2 data-aos="fade-right" className='video1'>eCommerce</h2>
                                    <p data-aos="fade-right" className='paragrap_bring_tog'>Selteq’s E-commerce solutions can be for flexibility, scalability, long term adaptability, reliability & security while keeping pace with evolving needs and possibilities for online business.</p>
                                    <div className='col-md-12 text-center'>
                                        <span  ><button onClick={() => ecomm()} className='btn btn-light bt_video_land1 rounded-pill'>Learn More </button></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 px-0'>
                        {/* Buttons  */}
                        {/* <div className='col-md-12 text-right pt-5  marg_bottom_btn'>
                    <span><button className='btn btn-light btn-sm  bt_video_land rounded-pill' >Healthcare & Medical</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill' onClick={()=>setAna(2)}>Banking & Finance </button></span>
                    <span><button className='btn btn-danger  btn-sm bt_active_video_land  rounded-pill'>Education</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>ERP</button></span>
                    <span><button className='btn btn-light  btn-sm bt_video_land rounded-pill'>Ecommerce</button></span>
                </div> */}
                        {/* Video  */}
                        <video loop autoPlay muted className="vedioPlayer1">
                            <source src="https://1864597015.rsc.cdn77.org/selteqreact/video/erp.mp4" type='video/mp4' />
                        </video>

                        {/* description  */}
                        <div className='col-md-12 px-5 margin_top_1 pb-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h2 data-aos="fade-right" className='video1'>ERP</h2>
                                    <p data-aos="fade-right" className='paragrap_bring_tog'>Are you running a business without any ERP system? There is no way so. Well, its time to get one, but, choosing the best system from such a wide range available on the market isnt easy.  </p>
                                    <div className='col-md-12 text-center'>
                                        <span  ><button onClick={() => erp()} className='btn btn-light bt_video_land1 rounded-pill'>Learn More </button></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='col-md-12 px-0 display_pc text-center'>
                <div className='col-md-12'>
                    <p className='col-md-12 tex-center p_tag_ind'>INDUSTRIES</p>
                </div>

                <div className='col-md-12 background_color_cards_ind1'>
                    <div className='row'>
                        <div className='col-md-6 text-left col-8 m-auto pt-2'>
                            <p className='card_heading'>Healthcare & MedTech</p>
                        </div>
                        <div className='col-md-6 col-4 d-flex justify-content-end'>
                            <div className='industries_readmore d-flex justify-content-center align-items-center'
                                onClick={medical}
                            >
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-left px-0'>
                        <p className='sub_text_card'>Streamlining patient care & improving outcomes through our cutting-edge MedTech and mHealth software development services. </p>
                    </div>
                </div>

                <div className='col-md-12 background_color_cards_ind1'>
                    <div className='row'>
                        <div className='col-md-6 text-left col-8 m-auto pt-2'>
                            <p className='card_heading'>FinTech</p>
                        </div>
                        <div className='col-md-6 col-4 d-flex justify-content-end'>
                            <div className='industries_readmore d-flex justify-content-center align-items-center'
                                onClick={banking}
                            >
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-left px-0'>
                        <p className='sub_text_card'>Helping financial institutions, wealth management & banking companies transform their offerings with our custom software development. </p>
                    </div>
                </div>
                <div className='col-md-12 background_color_cards_ind'>
                    <div className='row'>
                        <div className='col-md-6 text-left col-8 m-auto pt-2'>
                            <p className='card_heading'>EdTech</p>
                        </div>
                        <div className='col-md-6 col-4 d-flex justify-content-end'>
                            <div className='industries_readmore d-flex justify-content-center align-items-center'
                                onClick={education}
                            >
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-left px-0'>
                        <p className='sub_text_card'>We’re passionate about education & aim to unleash the power of digital learning through our bespoke, avant-garde LMS development. </p>
                    </div>
                </div>
                <div className='col-md-12 background_color_cards_ind1'>
                    <div className='row'>
                        <div className='col-md-6 text-left col-8 m-auto pt-2'>
                            <p className='card_heading'>Ecommerce</p>
                        </div>

                        <div className='col-md-6 col-4 d-flex justify-content-end'>
                            <div className='industries_readmore d-flex justify-content-center align-items-center'
                                onClick={ecomm}
                            >
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-left px-0'>
                        <p className='sub_text_card'>Enjoy a seamless e-commerce experience that balances flexibility, scalability, & adaptability. Our solutions keep pace with evolving business needs & possibilities. </p>
                    </div>
                </div>
                <div className='col-md-12 background_color_cards_ind'>
                    <div className='row'>
                        <div className='col-md-6 text-left col-8 m-auto pt-2'>
                            <p className='card_heading'>ERP</p>
                        </div>
                        <div className='col-md-6 col-4 d-flex justify-content-end'>
                            <div className='industries_readmore d-flex justify-content-center align-items-center'
                                onClick={erp}
                            >
                                <GrNext />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 text-left px-0'>
                        <p className='sub_text_card'>ERP development services are designed to help you streamline & optimize your business processes by integrating all data and into a centralized system. </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Videosec