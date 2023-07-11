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
                   <h2><b>CORE BANKING SOFTWARE</b></h2>
                   <h5 className={styles.color_red_banner1}><b>Focusing on Simplifying Corporate Banking
and Financial Operations</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>We help financial institutions, wealth management and banking companies transform their offerings with custom software development services for their customers’ emerging needs, enrich the security of end-products, speed up time to market, find valuable business insights and compete by means of technology.</h6>
                   <h6 className={styles.p_banner1}>We jump into your organization’s structure and look over your internal processes to develop a fully-fledged and scalable solution that addresses both your business and financial needs.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol