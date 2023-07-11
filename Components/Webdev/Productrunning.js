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
                            <h3><b>   REVOLUTIONISE YOUR WEB PRESENCE</b></h3>
                            <h6 className='cutom_font_prod_runn'>SET YOURSELF APART FROM YOUR COMPETITION</h6>
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
                                    <h6 className='cutom_font_prod_runn1'>Plugin & Module Development</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>Our developers can create customised plugins and modules to enhance your website’s functionality. Get the most out of your web presence with our professional plugin and module development services.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Theme Development & Integration</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>We offer theme development services tailored to your needs, ensuring your website looks professional and polished. We also provide integration services for existing themes so your site runs smoothly and looks great.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Responsive Web Design</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>Responsive Web Design allows for creation of websites that adapt to different screen sizes. This ensures an optimal viewing and navigation experience across various devices, from desktop computers to mobile phones.</p>

                                </div>
                            </div>
                            <div className='row mt-4' >
                                <div className='col-md-1 col-1 display_h'>
                                    <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                                </div>
                                <div className='col-md-11 col-11 pt-md-1 pl-md-1'>
                                    <h6 className='cutom_font_prod_runn1'>Payment Gateway Integration</h6>
                                    <p className='mb-0 pb-0 custom_paraa_font'>Enabling businesses to accept payments online quickly and safely. Our experts help integrate popular payment gateways such as Stripe, PayPal, Amazon Pay, and more. We ensure hassle-free checkout experiences for your customers.</p>

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
                        <h3><b>Revolutionize Your Web Presence</b></h3>
                        <div className='row mt-4 pt-2' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Plugin & Module Development</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Get the most out of your web presence with our professional plugin and module development services.</p>

                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Theme Development & Integration</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Offering theme & integration services tailored to your needs, ensuring your website looks professional. </p>

                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1 '>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Responsive Web Design</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Get optimal viewing & navigation experience across various devices, from desktop to mobile phones.</p>

                            </div>
                        </div>
                        <div className='row mt-4' >
                            <div className='col-md-1 col-1'>
                                <i style={{ color: "#DDDDDD", fontSize: "17px" }} class="far fa-circle"></i>
                            </div>
                            <div className='col-md-11 col-10 pt-md-1 pl-md-1'>
                                <h6 className='cutom_font_prod_runn1'>Payment Gateway Integration</h6>
                                <p className='mb-0 pb-0 custom_paraa_font'>Our experts help integrate popular payment gateways such as Stripe, PayPal, Amazon Pay, and more. </p>

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