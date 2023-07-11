import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Collapseproduct from "./Collapseproduct";
import Image from "next/image";
function Productup() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center py-5 ">
            <h3><b>Revolutionise Your Web Presence</b></h3>
            <h6>  Set Yourself Apart from Your Competition</h6>
        </div>
        <div className={styles.background_main_productup}>
        <div className="container">
            <div className="row" > 
            <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                    <h3 className={styles.software_head}> <b>Building webpages using state-of-the-art technologies</b></h3>
                    <div className="col-md-12 p-0 mt-5">
                        <Collapseproduct />
                    </div>
                </div>
               
            </div>
            <div className="col-md-6 text-center">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/sit.png" className="img-fluid"  />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Productup