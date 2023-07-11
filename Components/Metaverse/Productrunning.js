import { useRouter } from "next/router";
import React from "react";

function Productrunning() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us");
  };
  return (
    <div class="col-md-12 px-0">
      <div className="container">
        <div className="col-md-12 py-5 display_h px-md-0 ">
          <div className="row">
            <div className="col-md-6">
              <h3>
                <b> Our Metaverse Services</b>
              </h3>
              <h6 className="cutom_font_prod_runn">
                Enabling Next-Generation Interactions
              </h6>
              {/* <div className='row mt-4 pt-2' >
                        <div className='col-md-1 col-1 display_h'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-11 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>CMS Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our expert team can build custom content management systems that can help you manage your website’s content and functionality easily and efficiently.</p>
                        
                        </div>
                    </div> */}
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: "#DDDDDD", fontSize: "17px" }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Decentraland Metaverse Building
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Design and develop immersive experiences within the
                    Decentraland metaverse, utilizing cutting-edge tools and
                    technologies to create interactive environments, virtual
                    assets, and social interactions.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: "#DDDDDD", fontSize: "17px" }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">Web 3.0 Services</h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Harness the power of Web 3.0 technologies to build
                    decentralized applications (dApps), smart contracts, and
                    blockchain-based solutions, enabling peer-to-peer
                    interactions and enhanced privacy and security.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: "#DDDDDD", fontSize: "17px" }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    The Sandbox Metaverse Building
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Shape the future of virtual worlds by constructing unique
                    experiences within The Sandbox metaverse, utilizing advanced
                    creation tools and blockchain integration for decentralized
                    ownership and monetization.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: "#DDDDDD", fontSize: "17px" }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Metaverse Land Purchases
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Acquire virtual land in decentralized metaverses, leveraging
                    blockchain technology for secure ownership and investment
                    opportunities in the digital realm.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: "#DDDDDD", fontSize: "17px" }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Corporate Wallet Setup & Security
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Establish secure and compliant wallets for corporate
                    entities, ensuring robust encryption, multi-factor
                    authentication, and comprehensive security measures to
                    safeguard digital assets and facilitate seamless
                    transactions within the metaverse.
                  </p>
                </div>
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
      {/* mobile  */}
      <div className="col-md-12 pt-5 pb-5 display_pc background_img_for_mob">
        <div className="row">
          <div className="col-md-6">
            <h3>
              <b>Interactive Virtual Worlds </b>
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
                  Metaverse Development
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our skilled developers bring your visions to life by creating captivating metaverse experiences tailored to your unique requirements.
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
                <h6 className="cutom_font_prod_runn1">Metaverse Consulting</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our expert consultants provide strategic guidance on incorporating the metaverse into your business.
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
                  Metaverse Integration
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Our integration ensures a smooth transition into the metaverse ecosystem, enabling you to leverage its vast potential.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Metaverse Marketing
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Helping reach & engage your audience within the metaverse, leveraging immersive storytelling, influencer partnerships.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-1 col-1">
                <i
                  style={{ color: "#DDDDDD", fontSize: "17px" }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1 pb-5">
                <h6 className="cutom_font_prod_runn1">
                  User-Centric Development
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Craft intuitive and visually appealing user interfaces (UI) and deliver exceptional user experiences (UX).
                </p>
              </div>
            </div>
            <div className="col-md-12 padding_sol_1">
              <button onClick={() => contact()} className='btn btn-danger w-100 button_style_red py-2 px-4 animated_button_banner'>
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

export default Productrunning;
