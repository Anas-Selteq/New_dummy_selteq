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
                   <h2><b>POINEERING SAFE HEALTHCARE</b></h2>
                   <h5 className={styles.color_red_banner1}><b>Raising the standards of medical software
                    implementations.</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>Bringing together technologies and expertise that make a difference – at Selteq, we know the future is now. Innovation trumps standard processes when it comes to the healthcare technology arena.</h6>
                   <h6 className={styles.p_banner1}>We have been raising the standards of medical software implementations for a long time. Whether you’re a hospital or physician, if you are looking for custom software to manage your day-to-day operations, or need a follow-up solution to manage your patients, we are your choice partner.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol