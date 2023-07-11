import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproduct() {
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
         <h6><b>+</b> Plugin & Module Development</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>Our developers can create customised plugins and modules to enhance your website’s functionality. Get the most out of your web presence with our professional plugin and module development services.
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
         <h6><b>+</b>Theme Development & Integration</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>We offer theme development services tailored to your needs, ensuring your website looks professional and polished. We also provide integration services for existing themes so your site runs smoothly and looks great.
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
         <h6><b>+</b> Responsive Web Design</h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>Responsive Web Design allows for creation of websites that adapt to different screen sizes. This ensures an optimal viewing and navigation experience across various devices, from desktop computers to mobile phones.
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
         <h6><b>+</b>Payment Gateway Integration</h6>
         <Collapse in={open3}>
            <div id="example-collapse-text3">
            <h6 className={styles.sub_head}>Enabling businesses to accept payments online quickly and safely. Our experts help integrate popular payment gateways such as Stripe, PayPal, Amazon Pay, and more. We ensure hassle-free checkout experiences for your customers.
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
         <h6><b>+</b>CMS Development</h6>
         <Collapse in={open4}>
            <div id="example-collapse-text4">
            <h6 className={styles.sub_head}>Our expert team can build custom content management systems that can help you manage your website’s content and functionality easily and efficiently.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>
    </div>
  )
}

export default Collapseproduct