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
  const [opensix, setOpensix] = useState(true)
  const [openseven, setOpenseven] = useState(true)
  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [one1, setOne1] = useState(true)
  const [one2, setOne2] = useState(false)

  return (
    <div className="col-md-12 p-0" style={{ backgroundColor: 'white' }}>
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 text-center py-5 ">
          <h3>
            <b>The Range of Our IT Outsourcing Solutions</b>
          </h3>
          <h6>
            <b>
              Comprehensive Range of On-Demand IT Outsourcing Services Offered
            </b>
          </h6>
        </div>
        <div className={styles.digital_background}>
          <div className="container">
            <div className="row">
              <div className="col-md-8  pt-5 pb-5 mb-5">
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
                              Custom Software Development
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
                              Custom Software Development
                            </h5>
                            <p className="font_pa">
                              Our team of experts will create customized
                              software that caters to your business needs. We
                              use cutting-edge technology and best practices to
                              ensure our solutions are scalable, secure, and
                              reliable.
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
                            &nbsp;&nbsp;Mobile App Development
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
                              Mobile App Development
                            </h5>
                            <p className="font_pa">
                              We develop mobile applications for iOS and Android
                              platforms to meet your business needs. Our team of
                              mobile app developers uses the latest technology
                              to create user-friendly, innovative, and engaging
                              applications that will help you achieve your
                              business goals.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>


                  {/* Tabs */}
                  <div className="col-md-12  pt-4">
                    <div className="row">
                      {openthree ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11  col-11 "
                            onClick={() => setOpenthree(!openthree)}
                          >
                            <h5 className={styles.head}>
                            &nbsp;Web Development &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                              Web Development
                            </h5>
                            <p className="font_pa">
                              Our web development services include building
                              user-friendly, responsive, and SEO-optimized
                              websites. We ensure your website is designed to
                              attract your target audience and increase your
                              online presence.
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
                            className="col-md-11 col-11"
                            onClick={() => setOpenfour(!openfour)}
                          >
                            <h5 className={styles.head}>MVP Development &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
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
                              MVP Development
                            </h5>
                            <p className="font_pa">
                              Our MVP (Minimum Viable Product) development
                              services are designed to help businesses launch
                              their products quickly and efficiently. We build
                              an MVP that includes the core features of your
                              product, allowing you to test the market and get
                              user feedback.
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
                              UI/UX Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                            <h5 className={styles.head_active}>UI/UX Design</h5>
                            <p className="font_pa">
                              Our UI/UX design services are tailored to create a
                              seamless user experience. Our team of experts uses
                              the latest design techniques to ensure that your
                              website or application is visually appealing,
                              user-friendly, and easy to navigate.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {opensix ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11"
                            onClick={() => setOpensix(!opensix)}
                          >
                            <h5 className={styles.head}>IT Support &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpensix(!opensix)}
                          >
                            <h5 className={styles.head_active}>IT Support</h5>
                            <p className="font_pa">
                              Our IT support services are designed to help
                              businesses maintain their IT infrastructure,
                              ensuring it is secure, reliable, and up-to-date.
                              Our team of experts provides 24/7 support,
                              ensuring your business operations run smoothly.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row">
                      {openseven ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11"
                            onClick={() => setOpenseven(!openseven)}
                          >
                            <h5 className={styles.head}>
                              Digital Crisis Management
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
                            onClick={() => setOpenseven(!openseven)}
                          >
                            <h5 className={styles.head_active}>
                              Digital Crisis Management
                            </h5>
                            <p className="font_pa">
                              Our digital crisis management services are
                              designed to help businesses manage crisis
                              situations effectively. We provide a quick
                              response, damage control, and a clear
                              communication strategy to protect your business.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="col-md-12 pt-4">
                    <div className="row"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center ">
                <img
                  src="https://1864597015.rsc.cdn77.org/selteqreact/images/person.png"
                  className="img-fluid ig_sec_width "
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
