import { useRouter } from 'next/router'
import React from 'react'

function Productrunning() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div class="col-md-12 px-0">
      <div className="container">
        <div className="col-md-12 py-5 display_h px-md-0 ">
          <div className="row">
            <div className="col-md-6">
              <h3>
                <b>Business Consultancy Process</b>
              </h3>
              <h6 className="cutom_font_prod_runn">
                How our business consultancy service work?
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
                    style={{ color: '#DDDDDD', fontSize: '17px' }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Finding the Best Approach
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Our business consultancy service utilizes a data-driven
                    approach, leveraging industry expertise to analyze,
                    strategize, implement, and optimize business processes for
                    sustainable growth.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: '#DDDDDD', fontSize: '17px' }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Analysis and Assessment
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Thoroughly evaluate business operations, market dynamics,
                    and performance metrics to identify strengths, weaknesses,
                    and opportunities.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: '#DDDDDD', fontSize: '17px' }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Strategic Planning and Recommendations
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Formulate data-backed strategies and actionable
                    recommendations to enhance competitiveness, market
                    positioning, and operational efficiency.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: '#DDDDDD', fontSize: '17px' }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Implementation and Execution
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Collaborate with stakeholders to implement recommended
                    strategies, leveraging best practices and innovative
                    solutions for seamless execution.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-1 col-1 display_h">
                  <i
                    style={{ color: '#DDDDDD', fontSize: '17px' }}
                    class="far fa-circle"
                  ></i>
                </div>
                <div className="col-md-11 col-11 pt-md-1 pl-md-1">
                  <h6 className="cutom_font_prod_runn1">
                    Monitoring and Optimization
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Continuously monitor performance, track key metrics, and
                    provide ongoing support to optimize processes, ensure
                    sustainability, and drive long-term growth.
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
              <b>Digital Transformation </b>
            </h3>
            <div className="row mt-4 pt-2">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Comprehensive Suite of Services
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Optimize cloud migration, fortify cybersecurity, leverage data analytics, & embrace agile software development.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Cloud Migration & Optimization
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Unlock the full potential of cloud computing through our advanced migration and optimization solutions.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Cybersecurity & Risk Assessment
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Conduct comprehensive risk assessments & safeguard your critical assets from vulnerabilities & data breaches.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Data Analytics and Business Intelligence
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Uncover valuable insights, make informed decisions, and drive growth through predictive modeling.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-1 col-1">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">
                  Agile Software Development
                </h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Embrace agility in software development with our expertise in iterative, collaborative, & adaptive methodologies.
                </p>
              </div>
            </div>
            <div className="col-md-12 padding_sol_1">
              <button
                onClick={() => contact()}
                className="btn btn-danger w-100 button_style_red  py-2 px-4 animated_button_banner"
              >
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
  )
}

export default Productrunning
