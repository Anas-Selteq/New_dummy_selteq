import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproducta() {
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
         <h6><b>+</b> Money Transfer Solutions</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>Money transfer businesses require a highly customized solution to take care of an increasingly digitalized business requirements. Our Money Transfer Software automates every aspect of your money transfer business so that you can expand your services to a local or global audience and meet the most stringent regulatory requirements.
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
         <h6><b>+</b> Bill Payments</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>The best custom software development company is not the one that just knows how to construct the right system but the one that will work with you, your team and your stakeholders through every step of the development process. The billing software development experts at Selteq play the same role in developing custom applications for clients.
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
         <h6><b>+</b>Mobile Topups</h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>Providing a competitively costed and electronically devised Mobile Recharge Application for prepaid & postpaid mobile businesses. Our customized Mobile Recharge Software is engineered to track the records of your customers and any other related party, giving them easy access to recharge their mobile connections more conveniently.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text3"
          aria-expanded={open3}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>E-Ticketing</h6>
         <Collapse in={open3}>
            <div id="example-collapse-text3">
            <h6 className={styles.sub_head}>We are your ultimate e-ticketing partner. Providing premium technology that lets you sell tickets quickly and easily, manage and sell memberships and set up a platform suitable for all needs. Our core technology means your tickets will accessible anywhere in the time zone.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

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

export default Collapseproducta