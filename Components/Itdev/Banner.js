import styles from "../../styles/banner.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Softwaredev from "../MobileDesigns/Itdevmob/Softwaredev";

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
      <div className="display_h">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={5000}
          autoPlay={true}
          infinite={true}
        >
          <div className={styles.it_background_image_crousal}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">DEDICATED RESOURCES</h2>
              <h6 className="display_pc font_wi_banner">DEDICATED RESOURCES</h6>
              {/* <h2 className={styles.font_security}>FUNCTIONALITIES</h2> */}
              <p className="size_12 display_h">A team of developers working solely for you and delivering quality services

              </p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
          <div className={styles.it_background_image_crousal2}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">MULTIPLE HIRING MODELS</h2>
              <h6 className="display_pc font_wi_banner">MULTIPLE HIRING MODELS</h6>
              {/* <h2 className={styles.font_security}>AND AGILITY</h2> */}
              <p className="size_12 display_h">Experienced and certified staff available through several Hiring Models

              </p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
          <div className={styles.it_background_image_crousal3}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">100% CONFIDENTIALITY
              </h2>
              <h6 className="display_pc font_wi_banner">100% CONFIDENTIALITY</h6>
              {/* <h2 className={styles.font_security}>AND SECURITY</h2> */}
              <p className="size_12 display_h">The development process, from start to finish, will remain confidential

              </p>
              <Link href="/contact-us" >   <button className="btn btn-light background_color_black mt-3 display_h"> LEARN MORE </button></Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us" >    <button className="btn btn-light background_color_black1 mt-3 "> LEARN MORE </button> </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="dsplay_pc">
        <Softwaredev />
      </div>
    </div>
  )
}

export default Banner