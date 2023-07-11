import React, { useEffect, useState } from "react";
import Styles from "./SubHeader.module.css";
import Link from "next/link";

export const SubHeaderMenuItem = ({ show, handleClose }) => {
  const [menuList, setMenuList] = useState([
    {
      name: "CRM",
      link: "/software-development/CRM-solutions",
      id: 0,
      active: false,
    },
    {
      name: "ERP",
      link: "/software-development/ERP-system",
      id: 5,
      active: false,
    },
    {
      name: "AI & Machine Learning",
      link: "/software-development/AI-and-machine-learning",
      id: 4,
      active: false,
    },
    {
      name: "BlockChain",
      link: "/software-development/blockchain",
      id: 3,
      active: false,
    },
    {
      name: "Internet of Things",
      link: "/software-development/IOT-software",
      id: 14,
      active: false,
    },
    {
      name: "HR Software",
      link: "/software-development/HR-software",
      id: 8,
      active: false,
    },
    {
      name: "DevOps",
      link: "/software-development/devops-software",
      id: 7,
      active: false,
    },
    {
      name: "Communication Software",
      link: "/software-development/communication-software",
      id: 2,
      active: false,
    },
    {
      name: "Finance Software",
      link: "/software-development/finance-software",
      id: 13,
      active: false,
    },
    {
      name: "Web Application",
      link: "/software-development/web-application",
      id: 1,
      active: false,
    },
    {
      name: "Data Analytics",
      link: "/software-development/data-analysis",
      id: 9,
      active: false,
    },
    {
      name: "Agile Software",
      link: "/software-development/agile-software",
      id: 6,
      active: false,
    },
    {
      name: "Ecommerce",
      link: "/software-development/Ecommerce",
      id: 12,
      active: false,
    },
    {
      name: "EdTech",
      link: "/software-development/Edtech",
      id: 11,
      active: false,
    },
    {
      name: "MedTech",
      link: "/software-development/Medtech",
      id: 10,
      active: false,
    },
  ]);

  const handleActive = () => {
    handleClose();
  };

  return (
    <>
      {show && (
        <div>
          {/* <div className={Styles.subHeaderMenuItemActive}>
            <p>Android App</p>
          </div> */}

          {menuList.map((item, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              href={{
                pathname: item.link,
                // query: {
                //   data: item.id,
                // },
              }}
              onClick={handleActive}
            >
              <div
                className={
                  item.active
                    ? Styles.subHeaderMenuItemActive
                    : Styles.subHeaderMenuItem
                }
              >
                <p>{item.name}</p>
              </div>
            </Link>
          ))}

          {/* <div className={Styles.subHeaderMenuItem}>
            <p>Business Process Outsourcing Service</p>
          </div> */}
        </div>
      )}
    </>
  );
};
