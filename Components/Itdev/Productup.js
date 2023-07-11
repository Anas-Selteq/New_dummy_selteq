import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Collapseproduct from "./Collapseproduct";
import Image from "next/image";
import { useRouter } from "next/router";
function Productup() {
  // const [tabone, setTabone] = useState(true)
  // const [tabtwo, setTabtwo] = useState(true)
  // const [tabthree, setTabthree] = useState(true)
  // const [tabfour, setTabfour] = useState(true)
  // const [tabfive, setTabfive] = useState(true)
  // const [tabsix, setTabsix] = useState(true)
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us");
  };

  return (
    <div className="col-md-12 p-0">
      <div className="display_h">
        <div className="col-md-12 text-center py-5 ">
          <h3>
            <b>Why Choose Selteq for Your IT Outsourcing Needs?</b>
          </h3>
          <h6 className="pt-2"><b>Hire #1 Scalable Tech Talent</b></h6>
        </div>
        <div className={styles.background_main_productup}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                  <h4>
                    {" "}
                    <b>Benefits of our IT Outsourcing Services</b>
                  </h4>
                  <div className="col-md-12 p-0 mt-5">
                    <Collapseproduct />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://1864597015.rsc.cdn77.org/selteq/images/sit.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="col-md-12 pt-5 pb-5 display_pc background_img_for_mob">
        <div className="row">
          <div className="col-md-6">
            <h3>
              <b>The Range of Our IT Outsourcing Solutions</b>
            </h3>
            <div className="row mt-4 pt-2">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Custom Software Development
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  We use cutting-edge technology and best practices to ensure
                  our solutions are scalable, secure, and reliable.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Mobile App Development
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  We use the latest technology to create user-friendly,
                  innovative, & engaging iOS and Android apps.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">Web Development</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our web development services include building user-friendly,
                  responsive, and SEO-optimized websites.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">MVP Development</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  We build an MVP that includes the core features of your
                  product, allowing you to get user feedback.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">UI/UX Design</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  We use the latest design techniques to ensure that your
                  product is visually appealing, user-friendly, and easy to
                  navigate.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">IT Support</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our team of experts provides 24/7 support, ensuring your
                  business operations run smoothly.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Digital Crisis Management
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our digital crisis management services are designed to help
                  businesses manage crisis situations effectively.
                </p>
              </div>
            </div>
            {/* <div className='row mt-4' >
                        <div className='col-md-1 col-1 '>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>IoT Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Helping you connect your devices and systems to the internet, allowing you to collect and analyse data in real-time</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Maintenance and  Support</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our software development services don’t end after deployment. We also provide maintenance and support to ensure that your software stays up-to-date and runs smoothly.</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Chatbot Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Automating customer service and support by developing a chatbot to answer common questions and resolve issues.</p>
                        
                        </div>
                    </div> */}
            <div className="col-md-12 padding_sol_1">
              <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
                <span class="button-text">BOOK CONSULTATION</span>
                <span class="animation-layer"></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 display_h">
            <div className="col-md-12 text-center pl-5">
              <img
                className="img-fluid with_control"
                src="https://1864597015.rsc.cdn77.org/selteqreact/images/girl1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productup;
