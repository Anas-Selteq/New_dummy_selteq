import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Process.module.css'

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)

  return (
    <div className="col-sm-12 p-0 margin_set_for_new pt-4">
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 background_services_sec">
          <div className="container">
            <div className="col-md-12 px-0 py-5">
              <div className="row ">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Transformational Consultancy
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Leverage our expertise in transformative technologies and
                    frameworks to drive strategic change and organizational
                    innovation. We provide comprehensive analysis, roadmap
                    formulation, and implementation guidance, utilizing advanced
                    methodologies and industry best practices.
                  </p>
                </div>
                <div className="col-md-6 text_align1 ">
                  <img
                    className="img-fluid img_size_services"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/1.png"
                  />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 text_align2 ">
                  <img
                    className="img-fluid img_size_services1"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/2.png"
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">Startup Consultancy</h5>
                  <p className="pt-4 color_teext_services">
                    Equip your startup for success with our specialized
                    consultancy services. We offer strategic guidance, market
                    analysis, product development insights, and scalability
                    solutions, empowering you to navigate the competitive
                    landscape and achieve rapid growth.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Enterprise Portfolio and Program Management
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Optimize your enterprise's project portfolio and streamline
                    program management with our advanced solutions. We employ
                    industry-standard frameworks, performance metrics, and
                    governance models to ensure effective resource allocation,
                    risk mitigation, and project success.
                  </p>
                </div>
                <div className="col-md-6 text_align1 ">
                  <img
                    className="img-fluid img_size_services2"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/3.png"
                  />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 text_align2 ">
                  <img
                    className="img-fluid img_size_services3"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/4.png"
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    System Integration Solutions
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Leverage our expertise in integrating disparate systems and
                    technologies, enabling seamless data flow, interoperability,
                    and enhanced operational efficiency. Maximize productivity
                    with streamlined workflows and synchronized processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12 mt-4">
          <div className="row pt-2">
            <div className="col-md-6 col-5 cust_padding m-auto  text-left">
              <img
                className="img_width_sel"
                src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/sel.png"
              />
            </div>
            <div className="col-md-6 col-7">
              <img
                src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
        <div className={styles.background_process1}>
          <div className="col-md-12 text-center">
            <h6 className="text_color_heading_white">
              Business Consultancy Process
            </h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">Finding the Best Approach </p>
            <p className="mb-0 sub_text_promising pt-2">
              We use a data-driven approach, leveraging industry expertise to analyze business processes for sustainable growth.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Analysis and Assessment</p>
            <p className="mb-0 sub_text_promising pt-2">
              Evaluating business operations, market dynamics, & performance metrics to identify strengths & opportunities.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">
              Enterprise Portfolio & Program Management
            </p>
            <p className="mb-0 sub_text_promising pt-2">
              Optimize your enterprise's project portfolio and streamline
              program management with our advanced solutions.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Strategic Planning & Recommendations</p>
            <p className="mb-0 sub_text_promising pt-2">
              Formulate data-backed strategies to enhance competitiveness, market positioning, and operational efficiency.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Implementation & Execution</p>
            <p className="mb-0 sub_text_promising pt-2">
              Collaborate with stakeholders to implement recommended strategies and leveraging innovative solutions.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Monitoring & Optimization</p>
            <p className="mb-0 sub_text_promising pt-2">
              Continuously monitor performance, track key metrics, and provide ongoing support to ensure sustainability.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
