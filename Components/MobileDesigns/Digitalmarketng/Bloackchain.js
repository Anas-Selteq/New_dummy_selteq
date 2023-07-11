import { useRouter } from 'next/router'
import React from 'react'

function Bloackchain() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div className="px-0 background_block_chain">
      <div className="col-md-12 text-center pt-3">
        <h2 className="color_heading_white"> Why Choose Us?</h2>
      </div>
      <div className="col-md-12 pt-3">
        <p className="text_head_color mb-2">Expert Team</p>
        <p className="sub_text_head_color">
          Our team comprises seasoned marketing professionals with passion for
          delivering exceptional results.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Customized Approach</p>
        <p className="sub_text_head_color">
          Every business is unique, so we tailor our strategies & solutions to
          align with your goals & target audience.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Data-Driven Insights</p>
        <p className="sub_text_head_color">
          We leverage advanced analytics to provide actionable insights &
          optimize your marketing campaigns for maximum ROI.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Results-Oriented</p>
        <p className="sub_text_head_color">
          We focus on driving tangible results & achieving measurable outcomes
          contributing to your business's growth.
        </p>
      </div>
      <div className="col-md-12 pt-2 bg_padd_on_last">
        <p className="text_head_color mb-2">Let’s Get Started</p>
        <p className="sub_text_head_color">
          Contact us today for a free consultation, and let us partner with you
          to create a customized marketing strategy.
        </p>
      </div>

      <div className="col-md-12 cust_pad">
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>        </button>
      </div>
    </div>
  )
}

export default Bloackchain
