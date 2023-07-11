import { useRouter } from 'next/router'
import React from 'react'
import Bloackchain from '../MobileDesigns/Bpo/Bloackchain'
import Solutions from '../MobileDesigns/Bpo/Solutions'

function Businessdev() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div className="col-md-12 p-0">
      <div className="col-md-12 px-0 background_businesss display_h" style={{backgroundSize:'cover'}}>
        <div className="container px-5">
          <div className="col-md-12 text-center">
            <h2 className="color_heading_white">
              {' '}
              Partnering For Progress
            </h2>
            <p className="text-light">Why Choose Our BPO Services?</p>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-0">
                <p className="color_white mb-1 pt-0">Commitment to Excellence</p>
                <p className="custom_paraa_font text-light">
                  Selteq is a trusted comprehensive Business Process Outsourcing (BPO) services and solutions provider. With our expertise, advanced technology, and commitment to excellence, we empower businesses to streamline their operations, enhance productivity, and achieve sustainable growth.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 mt-0 pt-2">Quality Management Systems</p>
                <p className="custom_paraa_font text-light">
                  We maintain robust quality management systems, including ISO certifications and continuous improvement processes. This commitment to quality ensures that our BPO services meet the highest standards and deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-5 pb-5 mb-5">
              <div className="col-md-12">
                <p className="color_white mb-1 pt-0">
                  Cost Savings
                </p>
                <p className="custom_paraa_font text-light">
                  By outsourcing repetitive and time-consuming tasks to our experienced professionals, you can reduce overhead costs, eliminate the need for additional resources, and achieve significant cost savings.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-2">Scalability and Flexibility</p>
                <p className="custom_paraa_font text-light">
                  With our BPO solutions, you can scale your operations up or down based on demand. We adapt to your business needs and ensure seamless integration of our services.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-1">Access to Expertise</p>
                <p className="custom_paraa_font text-light">
                  Our team comprises skilled professionals who specialize in various domains. You can leverage their expertise to gain valuable insights, innovative strategies, and industry best practices.
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
      <div className="col-md-12 display_pc px-0">
        <Solutions />
      </div>
    </div>
  )
}

export default Businessdev
