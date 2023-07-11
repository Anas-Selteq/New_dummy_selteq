import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Process.module.css";

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1);

  return (
    <div className="col-sm-12 p-0 margin_set_for_new pt-4">
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 background_services_sec">
          <div className="container">
            <div className="col-md-12 px-0 py-5">
            <h3 className={`${styles.solution_heading} text-center pb-3`}>Selteq’s IT Outsourcing Models</h3>                
              <div className="row ">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">IT Staff Augmentation</h5>
                  <p className="pt-4 color_teext_services">
                    Our IT staff augmentation service is designed to help businesses find the right IT talent to augment their existing teams. We provide skilled IT professionals who work as an extension of your in-house team to help you scale your operations and deliver projects faster.
                    Our team of experts has diverse skills and experience, making it easy to find the right fit for your organization.

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
                  <h5 className="font_weight_heading">Dedicated IT Team</h5>
                    <p className="pt-4 color_teext_services">
                    Our dedicated IT team service is perfect for businesses that need a dedicated team to work on their IT projects. We provide a team of experienced IT professionals who work exclusively on your project, ensuring high-quality deliverables and timely completion.
                    Our dedicated teams are fully integrated with your in-house team and work closely with you to ensure your project is delivered on time and within budget.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    IT Infrastructure Outsourcing
                  </h5>
                    <p className="pt-4 color_teext_services">
                    Our IT infrastructure outsourcing service is designed to help businesses streamline their IT operations and reduce costs. We provide end-to-end IT infrastructure management, including hardware, software, and network management.
                    Our team of experts works closely with your in-house IT team to ensure your IT infrastructure is secure, reliable, and scalable.
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
                    Full-Process Outsourcing
                  </h5>
                    <p className="pt-4 color_teext_services">
                    Our full-process outsourcing service is designed to help businesses outsource their IT operations. We provide end-to-end IT services, including software development, infrastructure management, and support services.
                    Our team of experts works closely with your business to ensure that your IT operations are efficient, scalable, and secure. With our full process outsourcing service, you can focus on your core business operations while we care for your IT needs.
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
              Selteq’s IT Outsourcing Models
            </h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">IT Staff Augmentation</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our IT staff augmentation service is designed to help you find the
              right IT talent to augment your existing teams.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Dedicated IT Team</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our dedicated teams are integrated with your in-house team and
              work closely with you to deliver project on time.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">IT Infrastructure Outsourcing</p>
            <p className="mb-0 sub_text_promising pt-2">
              We provide end-to-end IT infrastructure management, including
              hardware, software, & network management.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">Full-Process Outsourcing</p>
            <p className="mb-0 sub_text_promising pt-2">
              With our full process outsourcing, you can focus on your core
              business operations while we care for your IT needs.
            </p>
          </div>
          {/* <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Create a Winning Team</p>
          <p className="mb-0 sub_text_promising pt-2">Our dedicated development team, talented technologists & QA teams ensure your project runs smoothly.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">Customer-Tailored Solutions</p>
          <p className="mb-0 sub_text_promising pt-2">We understand the challenges you face and adapt ourselves to your processes and business culture.</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Process;
