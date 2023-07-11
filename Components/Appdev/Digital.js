import { useState } from 'react'
import styles from '../../styles/digital.module.css'
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
    <div className="col-md-12 p-0" style={{ backgroundColor: 'white' }}>
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 text-center py-5 ">
          <h3>
            <b>EMPOWERING YOUR BRAND</b>
          </h3>
          <h6>
            <b>BESPOKE APP SOLUTIONS FOR ALL BUSINESS VERTICALS</b>
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
                            <h5 className={styles.head}>FinTech Apps</h5>
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
                            <h5 className={styles.head_active}>FinTech Apps</h5>
                            <p className="font_pa">
                              Combining Fintech apps for digital lending and
                              credits, mobile banking and payments,
                              cryptocurrency & blockchain, compliance, risk
                              management, and anti-fraud, we deliver end-to-end
                              products to our customers, saving time and money.
                              Our expertise includes robo-advisory, wealth
                              management, personal financial management, PFM
                              portfolio tracking & investment apps.
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
                            className="col-md-10 col-11 "
                            onClick={() => setOpentwo(!opentwo)}
                          >
                            <h5 className={styles.head}>Medical Health</h5>
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
                              Medical Health
                            </h5>
                            <p className="font_pa">
                              Manage your patients more effectively with our
                              customised patient-friendly mobile app and let
                              them book, reschedule or cancel appointments on
                              their own. We simplify the healthcare ecosystem by
                              empowering all users through personalisation,
                              real-time engagement and better communication. It
                              enables doctors, nurses, caretakers, communities,
                              pharmacists and partners to interact better while
                              staying informed of what matters the most – how
                              the individual patients are doing.
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
                            className="col-md-10 col-11"
                            onClick={() => setOpenthree(!openthree)}
                          >
                            <h5 className={styles.head}>Mobile IoT Apps</h5>
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
                              Mobile IoT Apps
                            </h5>
                            <p className="font_pa">
                              With the help of the latest IoT technologies and
                              specialised mobile developers, we create a smart
                              and convenient system for your home or office.
                              Using customised software, we can design and
                              develop controls for any mobile device or
                              wearable. .
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
                            className="col-md-10 col-11 "
                            onClick={() => setOpenfour(!openfour)}
                          >
                            <h5 className={styles.head}>ELearning</h5>
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
                            <h5 className={styles.head_active}>ELearning</h5>
                            <p className="font_pa">
                              Our platform is designed to facilitate the
                              communication between teachers and students with a
                              clear interface and seamless interaction. With an
                              exclusive content management system that allows
                              complete control of your digital campus, and the
                              ability to connect directly with other schools,
                              our platform is primed for an engaging teaching
                              experience that benefits both instructors and
                              learners
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
                            className="col-md-10 col-11"
                            onClick={() => setOpenfive(!openfive)}
                          >
                            <h5 className={styles.head}>ECommerce</h5>
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
                            <h5 className={styles.head_active}>ECommerce</h5>
                            <p className="font_pa">
                              Our main focus is to build scalable eCommerce apps
                              using modern technologies and state-of-the-art
                              infrastructure. We give special attention to the
                              cybersecurity of your app and integration with
                              third party services. Through comprehensive
                              services, we also support all companies that wish
                              to optimise their sales channels to focus on their
                              core business and leave the development of their
                              digital shops to us.
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
