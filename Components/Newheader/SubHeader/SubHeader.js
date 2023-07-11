import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import {
  expert2,
  plexaar,
  expertApp,
  deltrum,
  microsoft,
  oracle,
} from "./assets";

export const SubHeader = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={
              showSoftwares
                ? { display: "flex", position: "relative", width: "46.8vw" }
                : null
            }
          >
            <div
              style={{ marginLeft: "2vw" }}
              className={Styles.subHeadingSubChild}
            >
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="devops"
                  title="Consulting Services "
                  desc="Transformation Consultancy & Start-up Consultancy"
                  style="green"
                  link={"/services/consulting"}
                />
              </div>
              <div
                className={Styles.subMenuHoverContainer}
                onMouseEnter={() => {
                  setShowSoftwares(true);
                }}
                onMouseLeave={() => {
                  setShowSoftwares(!showSoftwares);
                }}
                onClick={() => handleClose()}
              >
                <SubHeaderItem
                  icon="software"
                  title="Software Development"
                  desc="Building Highly Intuitive, Next Generation Software Solutions"
                  style="yellow"
                  link="/services/software-development"
                />
              </div>
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="mobile"
                  title="Mobile Apps"
                  desc="Robust, Scalable, Secure and 100% Customised"
                  style="red"
                  link="/services/app-development"
                />
              </div>
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="web"
                  title="Web Development"
                  desc="Solid Web Solutions within any Industry"
                  style="green"
                  link="/services/web-development"
                />
              </div>
              {/*<SubHeaderItem*/}
              {/*  icon="marketing"*/}
              {/*  title="Digital Marketing"*/}
              {/*  desc="Driving Marketing Success with Innovative Strategies"*/}
              {/*  style="blue"*/}
              {/*  link={"/digital-marketing"}*/}
              {/*/>*/}
            </div>
            <div
              onMouseEnter={() => {
                setShowSoftwares(true);
              }}
              onMouseLeave={() => {
                setShowSoftwares(false);
              }}
              className={showSoftwares ? Styles.subMenuHoverItem : null}
            >
              <SubHeaderMenuItem
                show={showSoftwares}
                handleClose={handleClose}
              />
            </div>
          </div>

          <div
            style={
              showSoftwares ? { marginLeft: "-6vw" } : { marginLeft: "2vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="iot"
                title="Data Analytics "
                desc="Powerful Analytics Insights through AI & Data Services"
                style="red"
                link={"/software-development/data-analysis"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Marketing"
                desc="Keeping you at Forefront of the Ever-changing Digitised World"
                style="blue"
                link={"/services/digital-marketing"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="meta"
                title="Devops"
                desc="Transform your Organisation with Security Best Practices "
                style="meta"
                link={"/software-development/devops-software"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="IT Outsourcing"
                desc="Your Trusted Partner for Outsourcing Excellence "
                style="purple"
                link={"/services/IT-outsourcing"}
              />
            </div>

            {/*<SubHeaderItem*/}
            {/*  icon="devops"*/}
            {/*  title="Consulting"*/}
            {/*  desc="Equip Your Startup for Success Today"*/}
            {/*  style="green"*/}
            {/*  link={"/consulting"}*/}
            {/*/>*/}
          </div>

          <div
            style={
              showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "2vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Internet of Things  "
                desc="Innovative Solutions to Automate Work & Reduce Labou"
                style="purple"
                link={"/software-development/IOT-software"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="iot"
                title="BPO"
                desc="Fastest way to Outsource Business Processes Globally"
                style="red"
                link={"/services/business-process-outsourcing"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="meta"
                title="Metaverse"
                desc="Enabling Next-Generation Interactions"
                style="meta"
                link={"/services/metaverse"}
              />
            </div>
          </div>
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
