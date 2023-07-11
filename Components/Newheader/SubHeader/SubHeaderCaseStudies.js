import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import { expert, plexaar, chelsford, deltrum, dummy, microsoft, oracle, expert2, expertApp } from "./assets";

export const SubHeaderCaseStudies = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div
      style={{ background: "white" }}
      className={Styles.subHeaderMainContainer}
    >
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Expert"
                desc="An on-demand service app iOS & Android case study"
                style="red"
                link="/case-studies/Expert-App"
              />
            </div>
            {/* <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Chelsford"
                desc="Premier Learning Management System & Student Portal"
                style="green"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="London Franchise"
                desc="Expert Medical Franchise System in London "
                style="yellow"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Digicon "
                desc="Construction negotiating prices system"
                style="blue"
                link={"/under-development"}
              />
            </div> */}
             
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Live Chat System"
                desc="A multi-purpose chat system for customers & businesses"
                style="yellow"
                link="/case-studies/live-chat-system"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Plexaar"
                desc="A leading CRM solution to track business operations"
                style="green"
                link="/case-studies/Plexarr"
              />
            </div>
            </div>
            <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
             <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Buzz "
                desc="Enterprise-Grade Communication Platform"
                style="blue"
                link={"/case-studies/buzz"}
              />
            </div> 
             <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Chelsford"
                desc="Premier Learning Management System & Student Portal"
                style="green"
                link="/case-studies/Chelsford"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="London Franchise"
                desc="Expert Medical Franchise System in London "
                style="yellow"
                link="/case-studies/London-Franchise"
              />
            </div>
           
            </div>
            <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Digicon "
                desc="Construction negotiating prices system"
                style="blue"
                link={"/case-studies/Digicon"}
              />
            </div> 
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="iReach"
                desc="Expert Medical Franchise System in London "
                style="yellow"
                link="/case-studies/iReach"
              />
            </div>
            </div>
         

          {/* <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Buzz"
                desc="Optimize Efficiency with Communication Software"
                style="red"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="iReach"
                desc="Onboarding Software for SaaS Companies"
                style="green"
                link="/under-development"
              />
            </div>
         
           
          </div> */}

          {/*<div*/}
          {/*  style={{ marginLeft: "2vw" }}*/}
          {/*  className={Styles.subHeadingSubChild}*/}
          {/*>*/}
          {/*  */}
          {/*</div>*/}

          {/* <div
            style={
              showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "7.81vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <SubHeaderItem
              icon="meta"
              title="Metaversa"
              desc="Enabling Next-Generation Interactions"
              style="meta"
              link={"/metaverse"}
            />
            <SubHeaderItem
              icon="data"
              title="IT Outsourcing"
              desc="Your Trusted Partner for Outsourcing Excellence"
              style="purple"
              link={"/it-outsourcing"}
            />
            <SubHeaderItem
              icon="iot"
              title="BPO"
              desc="Reliable IT Support & Outsourcing"
              style="red"
              link={"/BPO"}
            />
            <SubHeaderItem
              icon="devops"
              title="Consulting"
              desc="Equip Your Startup for Success Today"
              style="green"
              link={"/consulting"}
            />
          </div> */}
        </div>
        <div
          className={Styles.subHeaderChildContainer}
          style={{ marginLeft: "30px" }}
        >
          {/*<Image src={dummy} alt="Dummy image" />*/}
        </div>
      </div>
      <div className={Styles.alignSubHeaderPortfolio}>
        <p>Our partners</p>
        <div className={Styles.subHeaderPortfolio}>
          <Image
            src={microsoft}
            alt="Microsoft"
            style={{ width: "6.5vw", height: "1.5vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={oracle}
            alt="Oracle"
            style={{ width: "7.5vw", height: "1.5vw" }}
            className={Styles.imgHover}
          />

          <Image
            src={expert2}
            alt="Expert"
            style={{ width: "6vw", height: "2vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={plexaar}
            alt="Plexaar"
            style={{ width: "5.5vw", height: "2vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={expertApp}
            alt="Expert"
            style={{ width: "7vw", height: "2vw" }}
            className={Styles.imgHover}
          />
        </div>
      </div>
    </div>
  );
};
