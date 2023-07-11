import { useState } from "react";
import styles from "../styles/digital.module.css";
import Collapseproduct from "./Collapseproduct";

function Ascand() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)

  return (
    <div className="col-md-12 p-0">
        <div className={styles.background_main_ascend}>
        <div className="col-md-12 text-center pt-5 pb-5 mb-4 ">
            <h3 ><b>Ascendancy by Digital Prowess</b></h3>
            <h6>   Elevate Your Business to The Forefront of Innovation</h6>
            <h6>    Advancing through Digital Mastery</h6>
        </div>
        <div >
        <div className="container">
            <div className="row" > 
            <div className="col-md-3">
            <div className="col-md-12 ">
                <div className={styles.background_shadow}>
                <h6 className={styles.color_ai_heading}>AI and Machine Learning</h6>
                <h6 className={styles.color_ai_sub_heading}>We can help you harness the power of AI and machine learning to improve decision-making, automate tasks and gain insights from data.</h6>
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="col-md-12 ">
                <div className={styles.background_shadow}>
                <h6 className={styles.color_ai_heading}>AR/VR Development</h6>
                <h6 className={styles.color_ai_sub_heading}>We can help you create immersive experiences for your customers by developing AR/VR applications for various industries such as gaming, education and training, medical, and more.</h6>
                </div>
            </div>
            <div className="col-md-12 mt-3 ">
                <div className={styles.background_shadow}>
                <h6 className={styles.color_ai_heading}>Business Automation</h6>
                <h6 className={styles.color_ai_sub_heading}>Automate repetitive tasks, improve efficiency and reduce errors by developing custom software solutions.</h6>
                </div>
            </div>
            <div className="col-md-12 mt-3 ">
                <div className={styles.background_shadow}>
                <h6 className={styles.color_ai_heading}>Data Management</h6>
                <h6 className={styles.color_ai_sub_heading}>Managing and analysing your data more effectively by developing software solutions that fit your needs.</h6>
                </div>
            </div>
               
            </div>
            <div className="col-md-3">
            <div className="col-md-12 ">
                <div className={styles.background_shadow}>
                <h6 className={styles.color_ai_heading}>Blockchain Development</h6>
                <h6 className={styles.color_ai_sub_heading}>We can help you build decentralised and secure systems using blockchain technology for various use cases such as digital identity, supply chain management, and more.</h6>
                </div>
            </div>
               
            </div>
            
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Ascand