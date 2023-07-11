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
                   <h2><b>FEATURE-RICH SOFTWARE</b></h2>
                   <h5 className={styles.color_red_banner1}><b>Developing data-driven and fully responsive ecommerce systems</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>We build ecommerce platform dedicated to your needs or customize an existing solution to help scale your business. Ecommerce solutions powered by Selteq can be optimized for flexibility, scalability, long term adaptability, reliability and security while keeping pace with the evolving needs and possibilities for online businesses.</h6>
                   <h6 className={styles.p_banner1}>Sell more with an industry-leading suite of professional ecommerce apps.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol