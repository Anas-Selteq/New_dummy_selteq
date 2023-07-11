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
          <h6><b>+</b> Cloud Integration</h6>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <h6 className={styles.sub_head}>   Integrating an app with cloud-based services, such as storage, databases, and serverless functions, enables scalability, flexibility, and cost-effectiveness.
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
          <h6><b>+</b> Data Analysis & Visualization</h6>
          <Collapse in={open1}>
            <div id="example-collapse-text1">
              <h6 className={styles.sub_head}>Collecting, analysing and visualising data to provide insights and make data-driven decisions. This includes using tools and technologies such as SQL, Excel, and Tableau to analyse data and create charts, graphs, and dashboards.
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
          <h6><b>+</b> Push Notifications</h6>
          <Collapse in={open2}>
            <div id="example-collapse-text2">
              <h6 className={styles.sub_head}>Sending push notifications to users through an app to inform them of new content, updates, and other important information.
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
          <h6><b>+</b>App Analytics & Optimization</h6>
          <Collapse in={open3}>
            <div id="example-collapse-text3">
              <h6 className={styles.sub_head}>Tracking and analysing the performance of an app, including user engagement, retention, and revenue, and using this data to optimise the app and improve its performance. Creating the server-side logic and functionality of an app, including database management, server-side scripting, and integration with third-party services.
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
          <h6><b>+</b>Project Management</h6>
          <Collapse in={open4}>
            <div id="example-collapse-text4">
              <h6 className={styles.sub_head}> The process of overseeing the development of an app, including setting milestones, tracking progress, and managing resources, to ensure that the project is completed on time and within budget.

              </h6>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default Collapseproduct