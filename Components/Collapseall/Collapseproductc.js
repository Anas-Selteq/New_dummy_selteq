import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproductc() {
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
         <h6><b>+</b> Learning Management System</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>   We provide enterprise LMS (Learning Management System) development services to create or improve your corporate learning process. We specialize in developing corporate learning or e-learning systems that include gamification, speech processing, live communication, monetization, webinar support, file Import/Export, Self-registration/enrolment, educational games, drag-and-drop questions and many more.
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
         <h6><b>+</b>Student Management Portal</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>Offering a student management solution designed to help educational institutions manage and streamline administrative processes and improve efficiency with learning modules. Your teachers can record student details, grades and attendance in a centralized database, track student progress on academic reports and communicate with parents via secure messaging and. Schools can choose the level of integration with third-party learning management systems and choose the level of automation of their workflow processes.
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
         <h6><b>+</b>Online classes</h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>With an aim to deliver learning to the next generation, we create educational apps, online classes, and courses, and other education software. We got our passion for technology from the vision of our founders. They had an idea about using technology to make education available to everyone regardless of their locations and conditions.
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
         </div>

         <div className={styles.background_productup}
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

export default Collapseproductc