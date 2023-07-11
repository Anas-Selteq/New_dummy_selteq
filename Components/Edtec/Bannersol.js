import styles from "../../styles/banking.module.css"
// import Image from "next/image"

function Bannersol() {
  return (
    <div className="col-md-12 px-5 pb-5 pt-4 background_white">
        <div className="container ">
            <div className="row">
                <div className="col-md-7 m-auto text-center">
                    <img src="https://1864597015.rsc.cdn77.org/selteq/images/doc.png" className="img-fluid img_width_bannersol "  />
                </div>
                <div className="col-md-5 m-auto px-5">
                   <h2><b>FUN-FILLED DIGITAL LEARNING</b></h2>
                   <h5 className={styles.color_red_banner1}><b>We build high-end software to ease the learning process</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>At Selteq, we are passionate about education and aim to unleash the power of digital learning – empowering educators to manage their classrooms from anywhere. We have the right skills, expertise, and experience to help educators better engage students using leading-edge technology.</h6>
                   <h6 className={styles.p_banner1}>Selteq’s e-learning mobile apps, cloud-based educational platforms, learning management solutions, knowledge portals & web content development services are all infused with best-in-class pedagogy and industry best practices.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol