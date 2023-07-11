import React from 'react'
import aboutcss from '../../styles/about.module.css'
 import styles1 from '../../styles/Casestudy.module.css'

import { useState } from 'react'
import styles from '../../styles/digital.module.css'
const Aboutmain = () => {
  const [openone, setOpenone] = useState(false)
  const [opentwo, setOpentwo] = useState(true)
  const [openthree, setOpenthree] = useState(true)
  const [openfour, setOpenfour] = useState(true)
  const [openfive, setOpenfive] = useState(true)
  return (
    <div>
      <video loop autoPlay muted className={aboutcss.vedioPlayer}>
        <source
          src="https://1864597015.rsc.cdn77.org/selteqreact/video/About.mp4"
          type="video/mp4"
        />
      </video>
      <div className="col-md-12 pl-md-5 pr-md-0 py-5">
        <div className="col-md-12 pr-md-0">
          <div className="row">
            <div className="col-md-5">
              <h1 className="text_t">
                <b>ABOUT SELTEQ</b>
              </h1>
              <h6 className="pt-4 text_j">
              Selteq, a next-generation software development and consultancy firm, operates in 4 countries with a global team. We're specialize in large-scale IT projects, pushing the boundaries of innovative software technologies to drive growth, productivity, and profitability. With a focus on digital transformation, Selteq brings together data and business insights, leveraging collective human wisdom to advance artificial intelligence. As we move towards the greatest change in history, Selteq partners with clients to reinvent creation, offering digital solutions, consultancy, and outsourcing services that catapult businesses into the future.
              </h6>
              <h6 className="text_j">
                Our fascinating and pixel-perfect design combined with a
                functional website, App, or internal software using the
                revolutionary tools, insights, and analysis help businesses
                achieve a customer-friendly online presence made to impress.
              </h6>
              <h6 className="text_j">
                Be it in Banking & Finance, Health, and Medical, E-commerce,
                Education, or ERP, we develop bespoke and scalable software
                solutions that deliver a competitive advantage to our clients.
                We help businesses increase their revenue manifold. We do this
                by designing attractive marketing strategies that make
                businesses climb the rankings on search engines. Moreover, our
                digital evolution specialists − focused on expanding businesses−
                help driving loads of credible traffic and convert that traffic
                into business, making them highly lucrative.
              </h6>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="col-md-12 backg_rochet py-5">
                <img
                  className="img-fluid pic_placement"
                  src="https://1864597015.rsc.cdn77.org/selteqreact/images/abo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 p-0 mt-5">
        <div className={styles1.background_grad_sec2}>
          <div className="container pb-5">
            <div className="row">
              <div className="col-md-6 text-left">
                <div className="col-md-12 ">
                  <img
                    src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape.png"
                    className="img-fluid img_animate"
                  />
                  <img
                    src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape1.png"
                    className="img-fluid img_animate1"
                  />
                </div>
                <img src="https://1864597015.rsc.cdn77.org/selteq/images/about2.png" className="img-fluid img_width_girl" />
              </div>
              <div className="col-md-6 px-md-5 mt-5 text-left m-md-auto">
                <h2 className={styles1.color_white}>OUR VALUES TO LIVE BY</h2>
                <h6 className={styles1.color_white_para}>
                  Since its inception, Selteq is on a mission of creating a
                  digitally connected world where apart from creating better
                  businesses, we also create experiences that are equally
                  rejoiced by the consumers.
                </h6>
                <h6 className={styles1.color_white_para}>
                  Our focus is on transforming the culture and how business
                  should be done to benefit both sides. Our dependency on
                  nurturing fruitful relations, innovation, and cutting edge
                  methodologies have helped many businesses thrive
                  exponentially.
                </h6>
                <h6 className={styles1.color_white_para}>
                  {' '}
                  <b>
                    Irrespective of the size of the company, we are always ready
                    to give a digital makeover that helps us proceed further in
                    making this world a better place.
                  </b>{' '}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 p-0">
        <div className="col-md-12 text-center py-5 ">
          <h3>
            <b>PROMISING DIGITAL GROWTH</b>
          </h3>
          <h6>WHY CHOOSE SELTEQ FOR SOFTWARE NEEDS?</h6>
        </div>
        <div className={styles.digital_background}>
          <div className="container">
            <div className="row">
              <div className="col-md-8  pt-3 pb-5 mb-5">
                <div className={styles.border_left_red}>
                  {/* Tabs */}
                  <div className="col-md-12">
                    <div className="row">
                      {openone ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-10 col-11"
                            onClick={() => setOpenone(!openone)}
                          >
                            <h5 className={styles.head}>
                              Flexible Development Methodologies
                            </h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpenone(!openone)}
                          >
                            <h5 className={styles.head_active}>
                              Flexible Development Methodologies
                            </h5>
                            <p className="font_pa">
                              We offer various development processes (Waterfall,
                              Agile or Hybrid methodologies) that you can select
                              based on your own needs.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {opentwo ? (
                        <div className="row">
                          <div className="col-md-1 col-1  margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11  pl-2"
                            onClick={() => setOpentwo(!opentwo)}
                          >
                            <h5 className={styles.head}>
                              Proven Expertise In Multiple Technologies
                            </h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpentwo(!opentwo)}
                          >
                            <h5 className={styles.head_active}>
                              Proven Expertise In Multiple Technologies
                            </h5>
                            <p className="font_pa">
                              We’re experts in our core technologies and thrive
                              from learning
                              <br /> new ones that are becoming increasingly
                              relevant in modern software development projects.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {openthree ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11"
                            onClick={() => setOpenthree(!openthree)}
                          >
                            <h5 className={styles.head}>
                              Software Architects & Consultants
                            </h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpenthree(!openthree)}
                          >
                            <h5 className={styles.head_active}>
                              Software Architects & Consultants
                            </h5>
                            <p className="font_pa">
                              Whether you need a preliminary technical design, a
                              feasibility study, high-level architecture, or a
                              technology selection process, the Selteq team
                              provides comprehensive consulting services to meet
                              your requirements.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {openfour ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 "
                            onClick={() => setOpenfour(!openfour)}
                          >
                            <h5 className={styles.head}>
                              Create A Winning Team
                            </h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpenfour(!openfour)}
                          >
                            <h5 className={styles.head_active}>
                              Create A Winning Team
                            </h5>
                            <p className="font_pa">
                              From a dedicated, solution-oriented development
                              team to talented technologists and QA teams that
                              ensure your project runs smoothly, we bring
                              together the best people to provide solutions that
                              keep you ahead of your competition.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {openfive ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11"
                            onClick={() => setOpenfive(!openfive)}
                          >
                            <h5 className={styles.head}>
                              Customer-Tailored Solutions
                            </h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpenfive(!openfive)}
                          >
                            <h5 className={styles.head_active}>
                              Customer-Tailored Solutions
                            </h5>
                            <p className="font_pa">
                              Our software solutions are customer-specific. We
                              listen to your needs, we understand the challenges
                              you face, and we’ll adapt ourselves to your
                              processes and culture9
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src="https://1864597015.rsc.cdn77.org/selteqreact/images/person.png"
                  className="img-fluid ig_sec_width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutmain
