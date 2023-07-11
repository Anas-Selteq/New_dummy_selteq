import styles from "../styles/banner.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Softwaredev from "./MobileDesigns/Softwaredev/Softwaredev";

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
          <div className={styles.web_background_image_crousal}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">INGENIOUS BUSINESS AUTOMATION</h2>
              <p className="size_12 display_h">Transform, scale and gain competitive edge</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>

            </div>
          </div>
          <div className={styles.web_background_image_crousal2}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">BESPOKE SOFTWARE SOLUTIONS</h2>
              <p className="size_12 display_h">Ground-breaking software tailored to your needs</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>

            </div>
          </div>
          <div className={styles.web_background_image_crousal3}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">QUALITY AND SECURITY</h2>
              <p className="size_12 display_h">Rigorous QA for an efficient & high-quality software</p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>

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