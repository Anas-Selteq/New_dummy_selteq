import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproductd() {
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
         <h6><b>+</b>Systems Integration</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>We are specialized in eCommerce systems development and integration. We have extensive experience developing CRM, ERP, PIM, marketing automation, inventory management, accounting packages and third-party systems integration.
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
         <h6><b>+</b>UX & UI Design</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>Your customers will get a better overall experience that will increase the chances of making a purchase. UX and UI designers at Selteq follow best practices based on proven research, which has been gathered from hundreds of eCommerce sites, to make sure your website or app is optimized for conversion.
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
         <h6><b>+</b>Ecommerce Application Development</h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>Selteq is skilled in ecommerce software development. We provide complete lifecycle services, including software testing and architecture design. Our customers can rely on us for top quality solutions that will increase their revenue.
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
         <h6><b>+</b>Intuitive Product Management</h6>
         <Collapse in={open3}>
            <div id="example-collapse-text3">
            <h6 className={styles.sub_head}>Combining a deep understanding of eCommerce industry practices and trends with thoughtful creativity, we design your eCommerce website and application to match enduring business goals.
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
         <h6><b>+</b> Custom Shopping Carts & Checkout</h6>
         <Collapse in={open4}>
            <div id="example-collapse-text4">
            <h6 className={styles.sub_head}>Customers love to shop. To that end, it becomes your pleasure to enhance your customer’s shopping experience by implementing a customized shopping cart and checkout. Contact Selteq today for a system that makes the customer purchasing experience a piece of cake!
            </h6>
            </div>
        </Collapse>
         </div>
         </div>
    </div>
  )
}

export default Collapseproductd