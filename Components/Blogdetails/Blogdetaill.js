import React from "react";
import styles from "../../styles/Blogn.module.css";
import BlogList from "../blogList.json";
import Link from "next/link";

import SubmitComment from "../submit_comment/submit_comment";

const Blogdetaill = (props) => {
  console.log(props)
  console.log(BlogList)
  return (
    <div className="col-md-12 p-0">
      <img
        src={BlogList[props.data]?.imageLink}
        className={styles.banner_finance}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <div
              dangerouslySetInnerHTML={{
                __html: BlogList[props.data]?.detailDescription,
              }}
            ></div>
            <SubmitComment />
          </div>
          <div className="col-md-4 margin_tt_f">
            <h5 className="img_text">Recent Posts</h5>
            {BlogList.map((blog, index) => (
              <Link
                href={{
                  pathname: "/Blogdetails",
                  query: {
                    data: index,
                  },
                }}
                className="text_dec"
                key={index}
              >
                <h6 className="img_h6_blogn">{blog.title}</h6>
              </Link>
            ))}
            <h5 className="img_text mt-5">Recent Comments</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetaill;
