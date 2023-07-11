import { useState } from "react";
import styles from "../../styles/digital.module.css";
// import Collapseproduct from "./Collapseproduct";
// import sit from "../public/images/sit.png"
import Image from "next/image";
// import pic from "../../public/images/itin.JPG"
function Productup() {
    const[openone, setOpenone] = useState(true)
    const[opentwo, setOpentwo] = useState(true)
    const[openthree, setOpenthree] = useState(true)
    const[openfour, setOpenfour] = useState(true)
    const[openfive, setOpenfive] = useState(true)

  return (
    <div className="col-md-12 p-0" style={{backgroundColor:"white"}}>
        
        <div className={styles.digital_background}>
        <div className="container">
        <h5 className="mt-5 pt-5 pl-5 ml-5 text-muted">IT INTEGERATED HEALTHCARE</h5>
        <h3 className="col-md-6 text-center ">ENJOY THE BENIFITS OF CENTRALIZED HEALTHCARE MANGEMENT SYSTEM</h3>
            
            <div className="row" > 
            
            <div className="col-md-8  pt-5 pb-5 mb-5">
           
                <div className={styles.border_left_red} >
                {/* Tabs */}
                <div className="col-md-12">
                <div className="row">
                
                    {openone ? (
                        <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-10 col-11" onClick={()=>setOpenone(!openone)} >
                    <h5 className={styles.head} >
                    Flexible Development
                    Methodologies</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpenone(!openone)}>
                        <h5 className={styles.head_active}>
                        Flexible Development
                        Methodologies</h5>
                        <p className="font_pa">
                        We offer various development processes (Waterfall, Agile or Hybrid methodologies) that you can select based on your own needs.
                        </p>
                        </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                   
                    {opentwo ? (
                        <div className="row">
                             <div className="col-md-1 col-1  margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-11 col-11  pl-2" onClick={()=>setOpentwo(!opentwo)}>
                    <h5 className={styles.head} >
                    Proven Expertise In
                    Multiple Technologies</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                              <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpentwo(!opentwo)}>
                        <h5 className={styles.head_active}>
                        Proven Expertise In
                    Multiple Technologies</h5>
                        <p className="font_pa">We’re experts in our core technologies and thrive from learning<br/> new ones that are becoming increasingly relevant in modern software development projects.</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                   
                    {openthree ? (
                        <div className="row">
                         <div className="col-md-1 col-1 margin_left_icon">
                         <i class="fas fa-circle"></i>
                         </div>
                    <div className="col-md-11 col-11" onClick={()=>setOpenthree(!openthree)}>
                    <h5 className={styles.head} >
                    Software Architects
                    & Consultants</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row" >
                             <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpenthree(!openthree)}>
                        <h5 className={styles.head_active}>
                        Software Architects
                        & Consultants</h5>
                        <p className="font_pa">
Whether you need a preliminary technical design, a feasibility study, high-level architecture, or a technology selection process, the Selteq team provides comprehensive consulting services to meet your requirements.</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 
            
                </div>
            </div>
            <div className="col-md-4 " >
                <img src="/images/itin.JPG" className="img-fluid "  />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Productup