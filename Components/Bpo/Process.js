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
                    IT Support & Infrastructure Management
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Our experts provide reliable IT support, network monitoring, server management, cloud solutions, cybersecurity, software updates, system maintenance, and IT infrastructure optimization.
                  </p>
                  {/* <p className="mb-0 font_weight_text_list pt-3">
                  Customer Support Outsourcing
                  </p>
                  <p className="mb-0 font_weight_text_list">
                  Finance and Accounting Outsourcing
                  </p>
                  <p className="mb-0 font_weight_text_list">
                  Data Entry and Processing
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p> */}
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
                  <h5 className="font_weight_heading">
                    Customer Support Outsourcing
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We provide exceptional customer support services, including inbound and outbound call handling, live chat support, email management, complaint resolution, and customer satisfaction surveys.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Finance and Accounting Outsourcing
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Entrust your finance and accounting functions to us, including accounts payable and receivable, financial reporting, bookkeeping, payroll processing, taxation, and financial analysis.
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
                    Data Entry and Processing
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Our efficient data entry and processing services ensure accurate data management, cleansing, verification, form processing, conversion, and database maintenance. We offer comprehensive HR solutions, such as recruitment and staffing, employee onboarding, performance management, payroll administration, benefits management, and HR compliance.
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
                src="https://1864597015.rsc.cdn77.org/selteqreact/images/person.png"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
        <div className={styles.background_process1}>
          <div className="col-md-12 text-center">
            <h6 className="text_color_heading_white">Benefits of Partnering with Us</h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">Quality Assurance</p>
            <p className="mb-0 sub_text_promising pt-2">
              We adhere to strict quality control measures to ensure high accuracy, compliance with industry standards.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">
              Data Security & Confidentiality
            </p>
            <p className="mb-0 sub_text_promising pt-2">
              Your sensitive data is protected through robust security protocols, data encryption, secure file transfer.            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Customized Solutions</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our BPO services are tailored to your requirements, goals, and industry dynamics to ensure optimal results.            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Seamless Integration</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our team works closely with your organization to ensure a smooth transition and efficient knowledge transfer.            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Long-term Partnership</p>
            <p className="mb-0 sub_text_promising pt-2">
              We strive to build long-term client partnerships based on trust, transparency, and mutual success.
            </p>
          </div>
          {/* <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">PHP</p>
            <p className="mb-0 sub_text_promising pt-2">
              We work with clients to build high quality websites. We’re a team
              of qualified PHP web developers.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">Node JS</p>
            <p className="mb-0 sub_text_promising pt-2">
              If you need Node.js web application development, our team can get
              your project rolling in no time.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">Python</p>
            <p className="mb-0 sub_text_promising pt-2">
              An interpreted & general-purpose language. We deliver an
              attractive web app with security & stability.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Process
