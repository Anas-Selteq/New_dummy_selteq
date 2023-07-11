import styles from "../../styles/Newcontactus.module.css"
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Newcontactus() {
    useEffect(() => {

        Aos.init({
            offset: 200,
            duration: 1500,
        });
    }, []);
    return (
        <div className="col-md-12 p-0">
            <div className="col-md-12 p-0 text-center">
                <div className={styles.background_grad}>
                    <h1 className={styles.text_white}>GET IN TOUCH</h1>
                    <h6 className={styles.text_white_only1}>YOU DREAM. WE CREATE.</h6>
                    <h6 className={styles.text_white_only}>With Our Future-Proof Software Solutions</h6>

                </div>
                <div className="container neg_c_u_n display_h">
                    <div className="row mb-4">
                        <div className="col-md-6 px-md-5">
                            <div className="col-md-12 p-0">
                                <div className="col-md-12 background_wh_contact py-4 px-5">
                                    <span className="icon_style_contact">  <i class="fas fa-phone-alt"></i></span>
                                    <h5 className="mt-3 talk_text">TALK TO US</h5>
                                    <div className="row mt-4">
                                        <div className="col-4 text-left">
                                            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/us.png" className="img-fluid img_flag" /> <span className="font_us"><b>USA</b></span>
                                        </div>
                                        <div className="col-8 text-right">
                                            <h5 className="contact_text"><a className="hover_phone1" href="tel: +1 650 999 6951">+1 650 999 6951</a></h5>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-4 text-left">
                                            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/uk.png" className="img-fluid img_flag" /> <span><b>UK</b></span>
                                        </div>
                                        <div className="col-8 text-right">
                                            <h5 className="contact_text"><a className="hover_phone1" href="tel: +44 800 4488 994">+44 800 4488 994</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6  px-md-5">
                            <div className="col-md-12 background_wh_contact py-4 px-md-5">
                                <span className="icon_style_contact"> <i class="fab fa-rocketchat"></i></span>
                                <h5 className="mt-3 talk_text">CUSTOMER SUPPORT</h5>
                                <h5 className="px-5 contact_text pt-3"> Get in touch – let us create the digital brain of your organisation</h5>
                                <button className="btn btn-dark FONT_B_T animated_button_banner px-4 py-2 mt-3">
                                    <span class="button-text">CONTACT SUPPORT </span>
                                    <span class="animation-layer"></span>
                                </button>
                            </div>
                            {/* <img className={styles.with_expert_img} src="https://1864597015.rsc.cdn77.org/selteqreact/images/expert.jpg"  /> */}
                        </div>
                    </div>

                </div>

                {/* other section  */}
                <div className="col-md-12 text-left back_gray_co px-md-4 p-0 py-5 mt-5">
                    <div className="col-md-12 px-md-5">
                        <div className="col-md-12 px-md5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col-md-12">
                                        <img data-aos="zoom-in" className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/ukk.png" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-md-12">
                                        <h5 className="mt-3 talk_text">HEADQUARTER (UK)</h5>
                                        <h5 className="mt-3 talk_text">Address</h5>
                                        <h5 className="contact_text">Portman House, 2 Portman St,<br />
                                            London W1H 6DU,<br />
                                            United Kingdom<br />
                                        </h5>
                                        <h5 className="mt-3 talk_text">Phone</h5>
                                        <h5 className="contact_text">+44 800 4488 994</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-5">
                                    <div className="col-md-12">
                                        <h5 className="mt-3 talk_text">US OFFICE</h5>
                                        <h5 className="mt-3 talk_text">Address</h5>
                                        <h5 className="contact_text">125 University Avenue.<br />
                                            Palo Alto,<br />
                                            CA 94301. USA<br /></h5>
                                        <h5 className="mt-3 talk_text">Phone</h5>
                                        <h5 className="contact_text">+1 650 999 6951</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-5">
                                    <div className="col-md-12">
                                        <img data-aos="zoom-in" className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/uss.png" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newcontactus