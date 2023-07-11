import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Image from "next/image";
import Collapseproducta from "../Collapseall/Collapseproducta";
function Productupa() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center py-5 px-0 ">
           
            <h3><b>Secure & Scalable</b></h3>
            <h6 className="font_small_b">Our solutions support a number of core
banking & finance activities:</h6>
        
        </div>
        <div className={styles.background_main_productup}>
        <div className="container padding_bankfinance">
            <div className="row" > 
            <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                    {/* <h3 className={styles.software_head}> <b>Advancing through Digital Mastery</b></h3> */}
                    <div className="col-md-12 p-0 mt-5">
                        <Collapseproducta />
                    </div>
                </div>
               
            </div>
            <div className="col-md-6 text-center">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/sit.png" alt='sit-up' className="img-fluid"  />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Productupa