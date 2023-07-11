import { useRouter } from 'next/router'
import React from 'react'
import Bloackchain from '../MobileDesigns/Consulting/Bloackchain'
import Solutions from '../MobileDesigns/Consulting/Solutions'

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
            <h2 className="color_heading_white">
              End-to-End Business Solutions
            </h2>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-3">
                <p className="color_white mb-1 pt-0">Business Process Automation</p>
                <p className="custom_paraa_font text-light">
                  Streamline and automate repetitive business processes to
                  improve efficiency. Develop custom solutions utilizing robotic
                  process automation (RPA) and artificial intelligence (AI).
                  Reduce manual effort, minimize errors, and enhance
                  productivity across your organization.
                </p>
              </div>
              <div className="col-md-12 pt-3">
                <p className="color_white1 mb-1 pt-0">Finance Effectiveness</p>
                <p className="custom_paraa_font text-light">
                  Optimize financial operations with our transformative
                  solutions. Streamline processes, leverage automation,
                  implement robust controls, and enhance reporting capabilities.
                  Achieve financial efficiency, regulatory compliance, and
                  improved decision-making.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-3">
                <p className="color_white mb-1 pt-0">
                  Enterprise Applications: Systems Transformation
                </p>
                <p className="custom_paraa_font text-light">
                  Revamp your enterprise applications with our cutting-edge
                  systems transformation services. Modernize legacy systems,
                  integrate disparate platforms, and optimize workflows. Enhance
                  scalability, agility, and operational efficiency.
                </p>
              </div>
              <div className="col-md-12 pt-3 ">
                <p className="color_white1 mb-1 pt-0">
                  Working Capital Optimization
                </p>
                <p className="custom_paraa_font text-light">
                  Maximize liquidity and minimize financial risk with our
                  working capital optimization strategies. Optimize inventory,
                  streamline receivables, and manage payables effectively.
                  Achieve working capital efficiency, cash flow optimization,
                  and financial stability.
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
