import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproducte() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
  return (
    <div>
         
         <div className={styles.background_productup}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>Payroll</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>We can also customize our custom payroll software solution to fit an organization’s needs. Whether looking for a simple end-of-year tax report or advanced approval workflow, we have the expertise to build a customized automated payroll software.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text1"
          aria-expanded={open1}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>Attendance System</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>Time attendance software is a great way to save money and increase efficiency. By installing accurate time clock software, you can better manage your payroll, budget, and labor estimations. Using the best time tracking software, you can monitor your employees’ punches with accuracy. This means you can more accurately estimate how much money you’re spending, saving, and making on certain projects.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text2"
          aria-expanded={open2}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>Inventory management System  </h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>Offering order tracking, invoicing and reporting for medium and large-sized companies across multiple locations – including production. Start tracking stock levels, cost, inventory value over time.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         {/* <div className={styles.background_productup}
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text3"
          aria-expanded={open3}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>Maintenance and Support</h6>
         <Collapse in={open3}>
            <div id="example-collapse-text3">
            <h6 className={styles.sub_head}> Our software development services don’t end after deployment. We also provide maintenance and support to ensure that your software stays up-to-date and runs smoothly.
            </h6>
            </div>
        </Collapse>
         </div>
         </div> */}

         {/* <div className={styles.background_productup}
          onClick={() => setOpen4(!open4)}
          aria-controls="example-collapse-text4"
          aria-expanded={open4}
         >
         <div className={styles.show_div}>
         <h6><b>+</b> Chatbot Development</h6>
         <Collapse in={open4}>
            <div id="example-collapse-text4">
            <h6 className={styles.sub_head}>   We can help you automate customer service and support by developing a chatbot to answer common questions and resolve issues.
            </h6>
            </div>
        </Collapse>
         </div>
         </div> */}
    </div>
  )
}

export default Collapseproducte