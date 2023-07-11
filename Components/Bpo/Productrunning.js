import { useRouter } from 'next/router';
import React from 'react'

function Productrunning() {
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }
    return (
        <div class="col-md-12 px-0">
            <div className='container'>
                <div className='col-md-12 py-5 display_h px-md-0 '>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3><b>Benefits of Partnering with Us</b></h3>
                            <h6 className='cutom_font_prod_runn'>Your Trusted Partner for Outsourcing Excellence</h6>
                            {/* <div className='row mt-4 pt-2' >
                        <div className='col-md-1 col-1 display_h'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-11 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>CMS Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our expert team can build custom content management systems that can help you manage your website’s content and functionality easily and efficiently.</p>
                        
                        </div>
                    </div> */}
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Quality Assurance</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>We adhere to strict quality control measures to ensure high accuracy, compliance with industry standards, and timely delivery of services.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Data Security and Confidentiality</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>Your sensitive data is protected through robust security protocols, data encryption, secure file transfer, access controls, and adherence to strict confidentiality agreements.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Customized Solutions</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>We understand that each business is unique. Our BPO services are tailored to your requirements, goals, and industry dynamics to ensure optimal results.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Seamless Integration</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>Our team works closely with your organization to ensure a smooth transition, efficient knowledge transfer, and seamless integration of our services into your existing processes.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Long-term Partnership</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>We strive to build long-term client partnerships based on trust, transparency, and mutual success. Your growth and satisfaction are our top priorities.</p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 display_h'>
                            <div className='col-md-12 text-center pl-5'>
                                <img className='img-fluid with_control' src='https://1864597015.rsc.cdn77.org/selteqreact/images/girl1.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile  */}
            <div className='col-md-12 pt-5 pb-5 display_pc background_img_for_mob'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3><b>Industry Expertise</b></h3>
                        <div className='row mt-4 pt-2' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Technology and Infrastructure</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>
                                    Utilizing cutting-edge technologies, including AI-powered chatbots, robotic process automation (RPA) & cloud-based solutions.
                                </p>

                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Healthcare BPO</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>
                                    We offer medical billing, coding, claims processing, healthcare data management, and telemedicine support.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>E-commerce</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>
                                    We assist with order processing, inventory management, product catalog management and customer support services.
                                </p>

                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1'>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Legal Process Outsourcing</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>
                                    Helping businesses with legal research, document review, contract management, litigation  & intellectual property support.
                                </p>
                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1'>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Regulatory Compliance</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>
                                    We ensure data protection, confidentiality, and legal compliance, providing peace of mind for our clients.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-12 padding_sol_1'>
                            <button onClick={() => contact()} className='btn btn-danger w-100 button_style_red py-2 px-4 animated_button_banner'>
                                <span class="button-text">BOOK CONSULTATION</span>
                                <span class="animation-layer"></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 display_h'>
                        <div className='col-md-12 text-center pl-5'>
                            <img className='img-fluid with_control' src='https://1864597015.rsc.cdn77.org/selteqreact/images/girl1.png' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productrunning