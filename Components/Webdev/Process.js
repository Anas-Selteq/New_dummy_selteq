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
                    Tech-Driven Website Solutions
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We create a comprehensive, fully robust, user-friendly website that grows your business exponentially. With our focus on scalability, reliability, and security, we leverage the latest web technologies and trends, such as:
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Progressive web apps (PWA)
                    </li>
                    <li>
                      Single-page applications (SPA)
                    </li>
                    <li>
                      XP, Agile, Unified Process
                    </li>
                    <li>
                      Headless CMS
                    </li>
                    <li>
                      Agile software development methodology
                    </li>
                  </ul>
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
                    Securing & Scaling
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Bugs, functionality, performance, framework etc., are the main challenges in creating secure and scalable websites. Implementing regular vulnerability scans can further enhance the security and scalability of websites. To address these challenges, companies must adopt robust testing and deployment methodologies, such as:
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Agile
                    </li>
                    <li>
                      TDD (Test-Driven Development)
                    </li>
                    <li>
                      CI/CD (Continuous Integration/Continuous Deployment)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Best-in-Class Development
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Our development team will focus on functionality, speed, responsiveness, ease of use and create harmony within the systems. Our stellar team of developers focuses on:
                  </p>
                  {/* <p className="pt-4 color_teext_services">
                  </p> */}
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Adheres to efficient project management
                    </li>
                    <li>
                      Incorporates latest web development technologies (HTML5, CSS3, JavaScript)
                    </li>
                    <li>
                      Deployment through cloud hosting services
                    </li>
                    <li>
                      Leverages virtualized computing environments for scalability and reliability
                    </li>
                  </ul>
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
                    Technologies & Results
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Our Full stack developers are experienced coders in C#, C++, Python, ASP.net, PHP, .Net Core, SQL, Angular.JS, React.JS and Java Script. By keeping in view higher ROI and search results, we exclusively focus on:
                  </p>

                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Focus on user interface & experience for higher ROI & search results
                    </li>
                    <li>
                      Web development services based on tailored plans for clients
                    </li>
                    <li>
                      Skilled developers with rich experience in web application development
                    </li>
                    <li>
                      Leading position in global market for high-end solutions
                    </li>
                  </ul>

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
            <h6 className="text_color_heading_white">Technologies</h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">React JS</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our developers are skilled at building web application that merges
              SEO goals with SCAND technology.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Angular JS</p>
            <p className="mb-0 sub_text_promising pt-2">
              When it comes to creating cross-platform compatible web solutions,
              our AngularJS developers excel.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">ASP.NET</p>
            <p className="mb-0 sub_text_promising pt-2">
              We specialize in developing web applications using ASP.NET and
              other open-source technologies.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Ruby on Rails</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our passion for Ruby on Rails has fueled our web applications
              created with the most recent technologies.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
