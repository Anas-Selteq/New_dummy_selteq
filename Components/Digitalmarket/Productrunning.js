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
                <b> Social Media Advertising</b>
              </h3>
              <h6 className="cutom_font_prod_runn">
                Developing a tailored marketing strategy for your business
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
                  <h6 className="cutom_font_prod_runn1">Video Production</h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Create engaging and professional videos that tell your brand
                    story, promote products or services, and connect with your
                    audience on various platforms.
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
                  <h6 className="cutom_font_prod_runn1">Video Optimization</h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Optimize video content for search engines, incorporate
                    relevant keywords, and enhance discoverability on platforms
                    like YouTube.
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
                  <h6 className="cutom_font_prod_runn1">Facebook Ads</h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Reach your target audience effectively through targeted
                    Facebook ad campaigns, utilizing demographic,
                    interest-based, and behavioral targeting.
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
                    Instagram Advertising
                  </h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Leverage the visual power of Instagram to promote your
                    brand, products, or services to a highly engaged user base.
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
                  <h6 className="cutom_font_prod_runn1">Brand Strategy</h6>
                  <p className="mb-0 pb-0 custom_paraa_font">
                    Craft a powerful brand identity, positioning, and messaging
                    that differentiates your business and resonates with your
                    target market.
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
              <b>Market Research and Analysis</b>
            </h3>
            <div className="row mt-4 pt-2">
              <div className="col-md-1 col-1 ">
                <i
                  style={{ color: '#DDDDDD', fontSize: '17px' }}
                  class="far fa-circle"
                ></i>
              </div>
              <div className="col-md-11 col-10 pt-md-1 pl-md-1">
                <h6 className="cutom_font_prod_runn1">Consumer Insights</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Gain valuable insights into consumer behavior & market trends to inform your marketing strategies.
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
                <h6 className="cutom_font_prod_runn1">Competitive Analysis</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Analyze your competitors' strengths & weaknesses to identify opportunities and develop strategies.
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
                <h6 className="cutom_font_prod_runn1">Logo & Visual Identity</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Create visually stunning logos and brand collateral that captures the essence of your brand.
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
                <h6 className="cutom_font_prod_runn1">Graphic Design</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  From website design to print materials, our designers bring creativity to every visual aspect of your brand.
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
                <h6 className="cutom_font_prod_runn1">Marketing Technology Stack</h6>
                <p className="mb-0 pb-0 custom_paraa_font">
                  Implement & optimize marketing automation tools to streamline processes, improve efficiency, & drive results.
                </p>
              </div>
            </div>
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
  )
}

export default Productrunning
