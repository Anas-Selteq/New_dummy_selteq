import React from "react";
import Styles from "./Reusable.module.css";
import Image from "next/image";
import {
  mobile,
  web,
  software,
  marketing,
  metavers,
  document,
  iot,
  devops,
} from "../assets";
import Link from "next/link";

export const SubHeaderItem = ({ icon, title, desc, style, link }) => {
  return (
    <Link href={link} style={{ textDecoration: "none" }}>
      <div
        className={
          style === "active"
            ? Styles.subHeaderItemsBox : style === "red"
              ? Styles.hoverRed : style === "green" ? Styles.hoverGreen : style === "blue" ? Styles.hoverBlue : style === "yellow" ? Styles.hoverYellow : style === "meta" ? Styles.hoverYellow : style === "purple" ? Styles.hoverPurple : Styles.subHeaderItemsBox
        }
      >
        <div
          className={
            style === "active"
              ? Styles.subHeaderImageBox
              : style === "green"
                ? Styles.subHeaderGreen
                : style === "yellow"
                  ? Styles.subHeaderYellow
                  : style === "blue"
                    ? Styles.subHeaderBlue
                    : style === "meta"
                      ? Styles.metaCheck
                      : style === "purple"
                        ? Styles.subHeaderPurple
                        : style === "red"
                          ? Styles.subHeaderRed
                          : null
          }
        >
          <Image
            src={
              icon === "mobile"
                ? mobile
                : icon === "web"
                  ? web
                  : icon === "software"
                    ? software
                    : icon === "marketing"
                      ? marketing
                      : icon === "iot"
                        ? iot
                        : icon === "devops"
                          ? devops
                          : icon === "meta"
                            ? metavers
                            : icon === "data"
                              ? document
                              : null
            }
            alt="Icon"
            style={{ width: "1.1vw", height: "1.1vw", margin: 0, padding: 0 }}
          />
        </div>
        <div>
          <p className={Styles.subHeaderHeading}>{title}</p>
          <p className={Styles.subHeaderDescription}>{desc}</p>
        </div>
      </div>
    </Link>
  );
};
