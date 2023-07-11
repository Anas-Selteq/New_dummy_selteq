import { useState } from 'react'
import styles from '../styles/digital.module.css'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

function Digital() {
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
    <div className="col-md-12 p-0 pb-5" style={{ backgroundColor: 'white' }}>
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 text-center py-5 ">
          <h3>
            <b>PROMISING DIGITAL GROWTH</b>
          </h3>
          <h6>
            <b>WHY CHOOSE SELTEQ FOR SOFTWARE NEEDS?</b>
          </h6>
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
                              processes and culture.
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

export default Digital
