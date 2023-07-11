import { useState } from "react"
import styles from "../../styles/Landing.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function Webdevsec() {
    const [one, setOne] = useState(1)
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
        <>
            <div className="col-md-12 p-0 display_h">
                {/* {one == 1 ? ( */}
                <>
                    <div className={styles.background_web}>
                        <div className="container">
                            <div className="row">
                                <div data-aos="fade-right" className="col-md-6">
                                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/lap1.webp" className="img-fluid" />
                                </div>
                                <div className="col-md-6  m-auto">
                                    <div className="col-md-12 text_align_crousal p-0 ">
                                        <h2 data-aos="fade-left" className={styles.land_text}>Web Development</h2>
                                        <p data-aos="fade-left" className={`description_text_mobile`}>We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction. We take pride in our work and understand the value of attention to detail; because your end product must be able to deliver your message, even if it’s the only thing on your website visitors see.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className={styles.background_button}>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button1.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(2)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button2.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(3)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button3.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(4)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button4.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </>
                {/* ) : one == 2 ? ( */}
                <>
                    <div className={styles.background_mobile}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6  m-auto">
                                    <div className="col-md-12 text_align_crousal p-0">
                                        <h2 data-aos="fade-left">Mobile App Development</h2>
                                        <p data-aos="fade-left" className={`description_text_mobile text-dark`}>With a decade of experience in Android and iOS, we have expertise in full life-cycle development services ranging from conception to QA and scaling. Whether you need native applications, cross-platform development or hybrid apps, we offer next-generation strategies and paths that will serve your business’s long-term goals and objectives.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="col-md-6">
                                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/mobile.webp" className="img-fluid mt-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.background_button}>
                            <div className="container py-5">
                                <div className="row">
                                    <div onClick={() => setOne(1)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button1.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button2.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(3)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button3.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(4)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button4.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </>
                {/* ) : one == 3 ? ( */}
                <>
                    <div className={styles.background_light}>
                        <div className="container">
                            <div className="row">
                                <div data-aos="fade-right" className="col-md-6">
                                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/qa.webp" className="img-fluid mt-5" />
                                </div>
                                <div className="col-md-6  m-auto">
                                    <div className="col-md-12 text_align_crousal p-0 ">
                                        <h2 data-aos="fade-left" className={styles.land_text}>QA & Testing</h2>
                                        <p data-aos="fade-left" className={`description_text_mobile text-dark`}>Selteq tests all functions of your product with guaranteed results. Based on decade of experience, we have our core in ‘Interactive Testing’ that can easily meet your needs for development, regression/integration testing, performance testing, auto/manual testing etc. The solutions are loaded with innovative features to suit your various QA needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.background_button}>
                            <div className="container py-5">
                                <div className="row">
                                    <div onClick={() => setOne(1)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button1.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(2)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button2.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button3.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(4)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button4.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </>
                {/* ) : one == 4 ? ( */}
                <>
                    <div className={styles.background_mobile}>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6  m-auto">
                                    <div className="col-md-12 text_align_crousal p-0 ">
                                        <h2 data-aos="fade-left" className={styles.land_text}>IT Consultancy</h2>
                                        <p data-aos="fade-left" className={`description_text_mobile text-dark`}>Our stellar team is expert in automating mission-critical business processes, providing our clients with the ability to lower costs whilst increasing efficiency. We use our years of experience in SAP, CRM and many other IT technologies to design, build and support software projects across all industries.</p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="col-md-6">
                                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/it.webp" className="img-fluid h-75" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.background_button}>
                            <div className="container py-5">
                                <div className="row">
                                    <div onClick={() => setOne(1)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button1.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(2)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button2.png" className="img-fluid" />
                                    </div>
                                    <div onClick={() => setOne(3)} className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button3.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3 text-center cursor_button">
                                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/button4.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </>
                {/* ) :

                    (null)} */}

            </div>


            {/* For mobile */}
            <div className="col-md-12 px-0 display_pc mb-5">
                <div className={`${styles.background_web_mobile}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12  m-auto pt-5">
                                <div className="col-md-12 text-light p-0 ">
                                    <h2 data-aos="fade-left">Web Development</h2>
                                    <p data-aos="fade-left text-start" className={`description_text_mobile`}>We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction. We take pride in our work and understand the value of attention to detail; because your end product must be able to deliver your message, even if it’s the only thing on your website visitors see.</p>
                                </div>
                                <div data-aos="fade-right" className="col-md-12">
                                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/lap1.webp" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobile_block} ${styles.background_mobile}`}>
                    <div className="container py-5">
                        <div className="row pt-5">
                            <div className="col-md-12  m-auto">
                                <div className="col-md-12 p-0">
                                    <h2 data-aos="fade-left">Mobile App Development</h2>
                                    <p data-aos="fade-left">With a decade of experience in Android and iOS, we have expertise in full life-cycle development services ranging from conception to QA and scaling. Whether you need native applications, cross-platform development or hybrid apps, we offer next-generation strategies and paths that will serve your business’s long-term goals and objectives.</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-md-12">
                                <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/mobile.webp" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.mobile_block} ${styles.background_light}`}>
                    <div className="container py-5">
                        <div className="row pt-5">
                            <div className="col-md-12  m-auto">
                                <div className="col-md-12 p-0">
                                    <h2 data-aos="fade-left" className={styles.land_text}>QA & Testing</h2>
                                    <p data-aos="fade-left" className={`description_text_mobile`}>Selteq tests all functions of your product with guaranteed results. Based on decade of experience, we have our core in ‘Interactive Testing’ that can easily meet your needs for development, regression/integration testing, performance testing, auto/manual testing etc. The solutions are loaded with innovative features to suit your various QA needs.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-md-12">
                                <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/qa.webp" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobile_block} ${styles.background_mobile}`}>
                    <div className="container py-5">
                        <div className="row pt-5">
                            <div className="col-md-12  m-auto">
                                <div className="col-md-12 p-0">
                                    <h2 data-aos="fade-left" className={styles.land_text}>IT Consultancy</h2>
                                    <p data-aos="fade-left" className={`description_text_mobile`}>Our stellar team is expert in automating mission-critical business processes, providing our clients with the ability to lower costs whilst increasing efficiency. We use our years of experience in SAP, CRM and many other IT technologies to design, build and support software projects across all industries.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-md-12">
                                <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/it.webp" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Carousel
                    showDots={true}
                    autoPlaySpeed={1000}
                    dotListClass="custom-dot-list-style1"
                    infinite={true}
                    itemClass="carousel-item-padding-40-px"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}>
                    <div className="container">
                        <div className="col-md-12">
                            <p className="custom_text_1">Web Development</p>
                        </div>
                        <div className="col-md-12">
                            <p className="sub_head_2 ">
                                We’re a global provider of web development services specializing in creating data-driven websites to increase conversion, usability and customer satisfaction. We take pride in our work & understand the value of attention to detail.
                            </p>
                        </div>
                        <div className="col-md-12 pb-4 text-center neg_marg_new">
                            <img className="img-fluid" src="https://1864597015.rsc.cdn77.org//selteq/images/lapmob.png" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <p className="custom_text_1">Mobile App Development</p>
                        </div>
                        <div className="col-md-12">
                            <p className="sub_head_2 ">
                                With a decade of experience in Android & iOS, we have expertise in full life-cycle development ranging from conception to QA & scaling. Whether you need native, cross-platform, or hybrid apps, we offer next-gen strategies for your business.
                            </p>
                        </div>
                        <div className="col-md-12 pb-4 text-center pt-4">
                            <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/mob.png" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <p className="custom_text_1">QA & Testing</p>
                        </div>
                        <div className="col-md-12">
                            <p className="sub_head_2 ">
                                We have our core in ‘Interactive Testing’ that can easily meet your needs for development, regression/integration testing, performance testing, auto/manual testing etc. The solutions are loaded with innovative features to suit your various QA needs.
                            </p>
                        </div>
                        <div className="col-md-12 pb-4 text-center pt-1">
                            <img className="img-fluid" src="https://1864597015.rsc.cdn77.org//selteq/images/grl.png" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-12">
                            <p className="custom_text_1">IT Consultancy</p>
                        </div>
                        <div className="col-md-12">
                            <p className="sub_head_2 ">
                                Our stellar team automates mission-critical business processes, allowing businesses to lower costs whilst increasing efficiency. We use our years of experience in SAP, CRM & many other IT technologies to design, build & support software across all industries.
                            </p>
                        </div>
                        <div className="col-md-12 pb-5 text-center  ">
                            <img className="img-fluid img_width_tab" src="https://1864597015.rsc.cdn77.org//selteq/images/tab.png" />
                        </div>
                    </div>
                </Carousel> */}

            </div>


        </>
    )
}

export default Webdevsec