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
            <b>Market Research and Analysis</b>
          </h3>
          <h6>
            <b>Take Your Marketing to the Next Level</b>
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
                            <h5 className={styles.head}>Consumer Insights</h5>
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
                              Consumer Insights
                            </h5>
                            <p className="font_pa">
                              Gain valuable insights into consumer behavior,
                              preferences, and market trends to inform your
                              marketing strategies.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                
                  {/* Tabs */}
                  {/* <div className="col-md-12 pt-4">
                    <div className="row">
                      {opensix ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-10 col-11 "
                            onClick={() => setOpensix(!opensix)}
                          >
                            <h5 className={styles.head}>Node JS</h5>
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
                            <h5 className={styles.head_active}>Node JS</h5>
                            <p className="font_pa">
                              If you need Node.js web application development,
                              our team of experienced and qualified developers
                              can get your project rolling in no time.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
                  {/* Tabs */}
                  {/* <div className="col-md-12 pt-4">
                    <div className="row">
                      {openseven ? (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-10 col-11 "
                            onClick={() => setOpenseven(!openseven)}
                          >
                            <h5 className={styles.head}>CORE Python</h5>
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
                            <h5 className={styles.head_active}>Python</h5>
                            <p className="font_pa">
                              We develop applications with Python, an
                              interpreted and general-purpose programming
                              language. We deliver an attractive and effective
                              web app with security and stability.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
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
      {/* mobile  */}
     
    </div>
  )
}

export default Digital
