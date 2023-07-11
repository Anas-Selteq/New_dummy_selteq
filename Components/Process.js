import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Process.module.css'

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)
  const Tabon = () => {
    setTabone
  }
  // useEffect(() => {
  //   localStorage.Tabon('tabone', JSON.stringify(tabone));
  // }, [tabone]);
  // const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('tabone', JSON.stringify(tabone))
  }, [tabone])

  return (
    <div className="col-sm-12 p-0  margin_set_for_new pt-md-4">
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 background_services_sec">
          <div className="container">
            <div className="col-md-12 px-0 py-5">
              <div className="row ">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Agile Methodologies & Smart Software Solutions
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We don’t waste time coding. We make progress. Whether you need custom development or integration between various systems and line-of-business software, we know just how to make your business shine. We use industry standards like:
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      XP, Agile, Unified Process
                    </li>
                    <li>
                      Pair Programming, Refactoring, Continuous Integration
                    </li>
                    <li>
                      PHP, JavaScript, Python, Angular, React, NodeJS                    </li>
                    <li>
                      Native App Development, Big Data Computation
                    </li>
                    <li>
                      Progressive Web Apps, Cross-platform and Hybrid Deployment
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
                    Collaborative Development
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We believe in continuous communication with all parties involved, from the client to the management. Our development process starts with detailed discussions on the client’s vision and goals. This is followed by planning and design phases, where we work closely with our clients to define all the aspects of the project. The delivery phase consists of development and testing, where we continuously interact with our clients for feedback and input. Once the product is delivered, we provide maintenance support and guidance on future development.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Agile & Iterative Process
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We take a tailor-made approach, which is different from standard off-the-shelf software. We adopt an Agile methodology, emphasising collaboration, flexibility, and continuous improvement. We work iteratively to deliver the best possible outcome and projects on time. Our process means you’ll always be involved along the journey.
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Evolving needs met
                    </li>
                    <li>
                      Continuous integration & delivery
                    </li>
                    <li>
                      Seamless deployment & delivery of final product
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
                    High-Performance Solutions
                  </h5>
                  <p className="pt-4 color_teext_services">
                    A pool of 50+ highly talented software engineers working on your project to deliver high-performance software solutions. We lead the UK market thanks to our dextrous developers, who’ve been integrating cutting-edge methodologies & futuristic technologies into your project for over a decade.
                    <br />
                    Our software engineers are proficient in various programming languages and development frameworks such as Java, Python, Node.js, and React. We use a DevOps approach that integrates software development and operations to deliver software faster and with higher quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12 pt-5">
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
              Promising Digital Growth
            </h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">Multiple Technologies</p>
            <p className="mb-0 sub_text_promising pt-2">
              We’re experts in our core technologies and thrive from learning
              new ones in modern development projects.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Development Methodologies</p>
            <p className="mb-0 sub_text_promising pt-2">
              We offer various development processes that you can select based
              on your own needs.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">
              Software Architects & Consultants
            </p>
            <p className="mb-0 sub_text_promising pt-2">
              Comprehensive consulting services technical design, and a
              high-level architecture to meet your needs.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Create a Winning Team</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our dedicated development team, talented technologists & QA teams
              ensure your project runs smoothly.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">Customer-Tailored Solutions</p>
            <p className="mb-0 sub_text_promising pt-2">
              We understand the challenges you face and adapt ourselves to your
              processes and business culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
