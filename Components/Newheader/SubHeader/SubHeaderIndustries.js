import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import {
  expert,
  plexaar,
  chelsford,
  deltrum,
  dummy,
  microsoft,
  oracle,
  expert2,
  expertApp,
} from "./assets";

export const SubHeaderIndustries = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Retail"
                desc="Customer-Centric CRM Retail Management Software"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="MedTech "
                desc="Empowering Patient Care Through MedTech Advancements"
                style="green"
                link="/industries/health-care-and-medical-software"
              />
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="EdTech"
                desc="Fostering Collaborative Learning with EdTech"
                style="yellow"
                link="/industries/education-technology"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="FinTech"
                desc="Stay Ahead in The Digital Economy with Fintech Solutions"
                style="blue"
                link="/industries/finance-banking"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Energy and Utilities"
                desc="Demand Response, Billing & Customer Care Solutions"
                style="purple"
                link="/under-development"
              />{" "}
            </div>
          </div>

          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Government  "
                desc="GovTech, eGov & Public Sector Solutions"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Logistic and Supply chain"
                desc="Warehouse, Transportation, Inventory Management Systems"
                style="green"
                link="/under-development"
              />{" "}
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Manufacturing"
                desc="Monitor & Control Manufacturing Systems in Real-Time"
                style="yellow"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Telecom "
                desc="Operational/Business Support, NMS & IMS"
                style="blue"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="AgriTech"
                desc="Farm Management & Operations Solutions for Efficient Agribusiness"
                style="purple"
                link="/under-development"
              />{" "}
            </div>
          </div>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="InsurTech"
                desc="Automate Policy Administration with InsurTech Solutions"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Media and Entertainment"
                desc="Custom Media & Entertainment Software Solutions"
                style="green"
                link="/under-development"
              />{" "}
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Hospitality"
                desc="Housekeeping, Reservation management, POS Solutions"
                style="yellow"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Aviation"
                desc="Airport Operation and Service Management Systems"
                style="blue"
                link="/under-development"
              />{" "}
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                  icon="data"
                  title="ERP"
                  desc="Automating businesses with bespoke ERP system"
                  style="purple"
                  link={"/industries/enterprise-resource-planning"}
              />
            </div>
          </div>
          <div
              className={Styles.subHeadingSubChild}
              style={
                showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "2vw" }
              }
          >

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                  icon="marketing"
                  title="E-Commerce"
                  desc="Ecom app development, Supply & resupply system"
                  style="blue"
                  link="/industries/e-commerce-solutions"
              />
            </div>

          </div>
        </div>
        <div
          className={Styles.subHeaderChildContainer2}
          style={{ marginLeft: "30px" }}
        >
          {/*<Image src={dummy} alt="Dummy image" style={{width:"150px", height:"150px"}} />*/}
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
