import styles from "../../styles/banking.module.css"
// import Image from "next/image"

function Bannersol({heading}) {
  // console.log("jjjkkj", heading);
  return (
    <div className="col-md-12 px-md-5 pb-5 pt-4 mt-4 background_white">
        <div className="container ">
            <div className="row">
                <div className="col-md-6 m-auto text-center">
                    {/* <img src="https://1864597015.rsc.cdn77.org/selteq/images/doc.png" className="img-fluid img_width_bannersol "  /> */}
                    <img src="/Assets/Solutionimages/calender.png" className="img-fluid "  />
                </div>
                <div className="col-md-6 m-auto px-md-5 padding_added_bannersol">
                   <h2 className={` pb-1 ${styles.capital_text}`}><b>{heading.Heading2}</b></h2>
                   <h5 className={`pb-3 ${styles.color_red_banner1}`}><b>{heading.Paragraph2}</b></h5>
                   <h6 className={styles.p_banner1}>{heading.Sub_para2}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol