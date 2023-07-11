import styles from "../../styles/banner.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Softwaredev from "../MobileDesigns/Appdevmob/Softwaredev";

function Banner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="col-md-12 p-0">
      <div className="display_h px-0">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={5000}
          autoPlay={true}
          infinite={true}
        >
          <div className={styles.app_background_image_crousal}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">CROSS-PLATFORM APP </h2>
              <h6 className="display_pc font_wi_banner">CROSS-PLATFORM APP</h6>
              {/* <h2 className={styles.font_security}>FUNCTIONALITIES</h2> */}
              <p className="size_12 display_h">Fully functional, smart and stylish apps to leave your customers awestruck</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
          <div className={styles.app_background_image_crousal2}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">ONE APP,
                MULTIPLE PLATFORMS
              </h2>
              <h6 className="display_pc font_wi_banner">ONE APP,
                MULTIPLE PLATFORMS</h6>
              {/* <h2 className={styles.font_security}>AND AGILITY</h2> */}
              <p className="size_12 display_h">Beautifully designed native apps for Android, iOS and windows phone.</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
          <div className={styles.app_background_image_crousal3}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">QUICK TURNAROUND TIME</h2>
              <h6 className="display_pc font_wi_banner">QUICK TURNAROUND TIME</h6>
              {/* <h2 className={styles.font_security}>AND SECURITY</h2> */}
              <p className="size_12 display_h">On time delivery of your business-friendly app within your budget.</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* mobile  */}
      <div className="display_pc">
        <Softwaredev />
      </div>
    </div>
  )
}

export default Banner