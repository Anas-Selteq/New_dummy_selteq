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
                   <h2><b>BUSINESS OPERATIONS MADE EASY!</b></h2>
                   <h5 className={styles.color_red_banner1}><b>Let’s automate your business operations with bespoke ERP solutions</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>Are you running a business without an ERP system? Since data is the lifeblood of every modern company, ERP makes it easier to collect, organize, analyse, and distribute this information to every individual and system that needs it to best achieve their role and responsibility.</h6>
                   <h6 className={styles.p_banner1}>Choosing the best system from such a wide range available on the market isn’t easy. Selteq ERP developers will make it easy for you to develop the most efficient ERP solution that can resolve all your business problems and give you full control over business operations.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol