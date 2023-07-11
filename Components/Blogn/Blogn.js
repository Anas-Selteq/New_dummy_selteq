import Link from "next/link";
import styles from "../../styles/Blogn.module.css";
import BlogList from "../blogList.json";
import Image from "next/image";

function Blogn() {
  return (
    <div className="col-md-12 p-0">
      <img
        src="https://1864597015.rsc.cdn77.org/selteqreact/images/blog.jpg"
        className={styles.banner_finance}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Blogs</h1>
            {BlogList.map((blog, index) => (
              <Link
                href={{
                  pathname: "/Blogdetails",
                  query: {
                    data: index,
                  },
                }}
                className="pe-auto"
                query={blog}
              >
                <div className="col-md-12 p-0 mb-5" key={index}>
                  <Image
                    className="img-fluid"
                    width="730"
                    height="488"
                    src={blog?.imageLink}
                  />
                  <h4 className="img_text mt-3">{blog.title ?? ""}</h4>
                  <h6 className="img_h6_blogn">{blog.info ?? ""}</h6>
                  <h6 className="img_h6_blogn">{blog.description ?? ""}</h6>
                </div>
              </Link>
            ))}
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
}

export default Blogn;
