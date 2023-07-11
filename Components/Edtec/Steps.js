import { useState } from 'react'
import styles from '../../styles/steps.module.css'
import Collapse from 'react-bootstrap/Collapse'

function Steps() {
  const [openone, setOpenone] = useState(false)
  const [opentwo, setOpentwo] = useState(true)
  const [openthree, setOpenthree] = useState(true)
  const [openfour, setOpenfour] = useState(true)
  const [openfive, setOpenfive] = useState(true)
  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [one1, setOne1] = useState(true)
  const [one2, setOne2] = useState(false)

  return (
    <div className="col-md-12 p-0" style={{ backgroundColor: 'white' }}>
      <div className="col-md-12 p-0 display_h">
        <div className={styles.digital_background}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6  pt-3 pb-5 px-5 mb-5">
                <div className="col-md-12 text-center pt-5 pb-5">
                  <h6 className={styles.text_gray}>BETTER WAY TO EDUCATE</h6>
                  <h5>
                    IT’S NOT JUST SOFTWARE
                    <br /> IT’S MODERN LEARNING ENVIRNOMENT
                  </h5>
                </div>
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
                              Learning Management System
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
                              Learning Management System
                            </h5>
                            <p className="font_pa">
                              We provide enterprise LMS (Learning Management
                              System) development services to create or improve
                              your corporate learning process. We specialize in
                              developing corporate learning or e-learning
                              systems that include gamification, speech
                              processing, live communication, monetization,
                              webinar support, file Import/Export,
                              Self-registration/enrolment, educational games,
                              drag-and-drop questions and many more.
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
                              Student Management Portal
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
                              Student Management Portal
                            </h5>
                            <p className="font_pa">
                              Offering a student management solution designed to
                              help educational institutions manage and
                              streamline administrative processes and improve
                              efficiency with learning modules. Your teachers
                              can record student details, grades and attendance
                              in a centralized database, track student progress
                              on academic reports and communicate with parents
                              via secure messaging and. Schools can choose the
                              level of integration with third-party learning
                              management systems and choose the level of
                              automation of their workflow processes.
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
                            className="col-md-10 col-11 pl-1"
                            onClick={() => setOpenthree(!openthree)}
                          >
                            <h5 className={styles.head}>Online classes</h5>
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
                              Online classes
                            </h5>
                            <p className="font_pa">
                              With an aim to deliver learning to the next
                              generation, we create educational apps, online
                              classes, and courses, and other education
                              software. We got our passion for technology from
                              the vision of our founders. They had an idea about
                              using technology to make education available to
                              everyone regardless of their locations and
                              conditions.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 background_person text-center">
                <img
                  src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png"
                  className="img-fluid img_steps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 px-4 pt-4 display_pc text-center  pb-5">
        {/* <h6 className="pt-4 font_weight_digital"><b>PROMISING DIGITAL GROWTH</b></h6> */}
        <div className="row pt-2">
          <div className="col-md-6 col-6 m-auto  text-left">
            <h5>
              {' '}
              <span className="why_choose">WHY CHOOSE </span>
              <br /> <b className="why_selteq">Selteq</b> <br />
              <span className="why_choose"> FOR YOUR</span> <br />
              <span className="why_choose"> SOFTWARE NEEDS?</span>
            </h5>
          </div>
          <div className="col-md-6 col-6">
            <img
              src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-12 p-0 text-left">
          {/* Tab one  */}
          {one1 ? (
            <div className="col-md-12 p-0">
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="col-md-12 background_collapse_div1  px-4 pt-3 pb-3"
              >
                <h5>FLEXIBLE DEVELOPMENT METHODOLOGIES</h5>
                <Collapse in={open}>
                  <p className="coll_font_size_set mb-0">
                    We offer various development processes (Waterfall, Agile or
                    Hybrid methodologies) that you can select based on your own
                    needs.
                  </p>
                </Collapse>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div2  px-4 pt-3 pb-3"
              >
                {/* <h5 className="text_other pt-2">PROVEN EXPERTISE IN MULTIPLE TECHNOLOGIES</h5> */}
                <h5 className="mt-1">
                  PROVEN EXPERTISE IN MULTIPLE TECHNOLOGIES
                </h5>
                <p className="coll_font_size_set mb-0">
                  We offer various development processes (Waterfall, Agile or
                  Hybrid methodologies) that you can select based on your own
                  needs.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div3  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">SOFTWARE ARCHITECTS & CONSULTANTS</h5>
                {/* <h5 className="text_other pt-2"></h5> */}
                <p className="coll_font_size_set mb-0">
                  Whether you need a preliminary technical design, a feasibility
                  study, high-level architecture, or a technology selection
                  process, the Selteq team provides comprehensive consulting
                  services to meet your requirements.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div4  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">CREATE A WINNING TEAM</h5>
                {/* <h5 className="text_other pt-2">CREATE A WINNING TEAM</h5> */}
                <p className="coll_font_size_set mb-0">
                  From a dedicated, solution-oriented development team to
                  talented technologists and QA teams that ensure your project
                  runs smoothly, we bring together the best people to provide
                  solutions that keep you ahead of your competition.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div5  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">Customer-Tailored Solutions</h5>
                {/* <h5 className="text_other pt-2">CUSTOMER-TAILORED SOLUTIONS</h5> */}
                <p className="coll_font_size_set mb-0">
                  Our software solutions are customer-specific. We listen to
                  your needs, we understand the challenges you face, and we’ll
                  adapt ourselves to your processes and culture9
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Steps
