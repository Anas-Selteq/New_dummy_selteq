import { useRouter } from 'next/router'
import React from 'react'
import Bloackchain from '../MobileDesigns/Digitalmarketng/Bloackchain'
import Solutions from '../MobileDesigns/Digitalmarketng/Solutions'

function Businessdev() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div className="col-md-12 p-0">
      <div className="col-md-12 px-0 background_businesss display_h">
        <div className="container px-5">
          <div className="col-md-12 text-center">
            <h2 className="color_heading_white"> Why Choose Us?</h2>
            {/* <h2 className="color_heading_white"> */}
            {' '}
            <p className='text-light'> <b>Building brands with purpose & passion</b></p>
            {/* </h2> */}
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-3">
                <p className="color_white mb-1 mt-0 pt-0">Expert Team</p>
                <p className="custom_paraa_font text-light">
                  Our team comprises seasoned marketing professionals with
                  diverse industry experience and a passion for delivering
                  exceptional results.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-3">Customized Approach</p>
                <p className="custom_paraa_font text-light">
                  Every business is unique, so we tailor our strategies and
                  solutions to align with your goals and target audience.
                </p>
              </div>
              <div className="col-md-12 ">
                <p className="color_white1 mb-1 invisible">
                  Ready to Take Your Marketing to the Next Level?
                </p>
                <p className="color_w_e invisible">
                  Contact us today for a free consultation, and let us partner
                  with you to create a customized marketing strategy to propel
                  your business forward. We will unlock new opportunities,
                  engage your audience, and achieve marketing success.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-5">

              <div className="col-md-12 pt-3">
                <p className="color_white mb-1 pt-0">
                  Data-Driven Insights</p>
                <p className="custom_paraa_font text-light">
                  We leverage advanced analytics and tracking tools to provide
                  actionable insights and optimize your marketing campaigns for
                  maximum ROI.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-3">Results-Oriented</p>
                <p className="custom_paraa_font text-light">
                  We focus on driving tangible results and achieving measurable
                  outcomes contributing to your business's growth and success.
                </p>
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
      <div className="col-md-12 display_pc px-0">{/* <Ascand /> */}</div>
      <div className="col-md-12 display_pc px-0">
        <Bloackchain />
      </div>
      <div className="col-md-12 display_pc px-0">{/* <Solutions /> */}</div>
    </div>
  )
}

export default Businessdev
