import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import styles from "../../styles/digital.module.css";

function Collapseproduct() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div>
      <div
        className={styles.background_productup}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <div className={styles.show_div}>
          <h6>
            <b>+</b> A Powerful IT Squad
          </h6>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <h6 className={styles.sub_head}>
                {" "}
                Our outsourced development specialists have delivered hundreds
                of successful bespoke software projects to small and large
                enterprises & SMEs. Hiring a developer or a team translates to
                100% confidentiality & seamless communication round the clock.
              </h6>
              <h6 className={styles.sub_head}>
                {" "}
                Even though you are completely involved with the team, our
                monitoring systems will keep track of the work progress. The
                stellar team of IT professionals can have you up and running
                with your next big project in no time. We are home to over 50
                agile-trained and talented developers who can build, enhance and
                transform your existing software to best suit your needs and
                niche market.
              </h6>
              <ul className={styles.sub_head}>
                <li>
                  Highly qualified and exceptionally skilled professionals.
                </li>
                <li>Create your dream team with our multiple hiring models.</li>
                <li>Native App Development Developers</li>
                <li>Get complete control of your team with 100% involvement</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>

      <div
        className={styles.background_productup}
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text1"
        aria-expanded={open1}
      >
        <div className={styles.show_div}>
          <h6>
            <b>+</b> Improving Business Efficiency
          </h6>
          <Collapse in={open1}>
            <div id="example-collapse-text1">
              <h6 className={styles.sub_head}>
                Selteq leads your project with a full-time, dedicated team from
                start to finish. Owing to our experience and expertise, our
                dedicated IT experts can help you achieve fully functional,
                intelligent, and robust software to perfectly complement your
                business needs. Augment your in-house IT professionals remotely
                with our Managed IT team – solely led by you.
              </h6>
              <h6 className={styles.sub_head}>
                Our managed IT model is designed to help our clients maintain a
                competitive edge through reliable IT systems. Our professionals
                will manage every aspect of your IT infrastructure to give your
                teams the flexibility and agility to respond quickly and
                strategically to business changes.
              </h6>
              <ul className={styles.sub_head}>
                <li>Flexible timings that will save you time & money.</li>
                <li>You’ll be authorized to access the source code.</li>
                <li>Secured development environment</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={styles.background_productup}
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text1"
        aria-expanded={open2}
      >
        <div className={styles.show_div}>
          <h6>
            <b>+</b> Flexible Development Methodologies
          </h6>
          <Collapse in={open2}>
            <div id="example-collapse-text1">
              <h6 className={styles.sub_head}>
                Our resources start building your system after carefully
                studying your business, determining business requirements, and
                identifying challenges your business faces. Based on the
                industry and the size of your business, Selteq’s dedicated IT
                resources will develop tailored solutions meant to benefit your
                business and its operations.
              </h6>
              <ul className={styles.sub_head}>
                <li>
                  Check the Daily Reports every day to find out how your teams
                  are doing
                </li>
                <li>
                  Stay connected with your offshore team no matter where they
                  are, what time it is, or what device they use.
                </li>
                <li>
                  Monitor your team’s performances, progress, and to-dos with
                  the help of software like Redmine Basecamp, Jira, etc.
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={styles.background_productup}
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text1"
        aria-expanded={open4}
      >
        <div className={styles.show_div}>
          <h6>
            <b>+</b> Fully-Functional & Scalable Product
          </h6>
          <Collapse in={open4}>
            <div id="example-collapse-text1">
              <h6 className={styles.sub_head}>
                All software solutions created by our full-stack developers can
                be upgraded and developed further to meet your future business
                needs. They are designed to be adapted to the processes and
                integrated with other systems.
              </h6>
              <h6 className={styles.sub_head}>
                The creation of business-friendly and effective software is
                possible only because of our latest development processes
                combined with the knowledge of our development maestros. Thanks
                to their experience and skill, they can approach every project
                the right way and hence provide software that improves your core
                business processes.
              </h6>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Collapseproduct;
