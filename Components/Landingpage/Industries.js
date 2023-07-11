import styles from "../../styles/Landing.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Workkflow from "../MobileDesigns/Landingpge/workkflow";
import Getintouch from "../MobileDesigns/Landingpge/Getintouch";
import Getintouchnew from "./Getintouchnew";

function Industries() {
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
    <>
    <div className="col-md-12 display_h text-center margin_main_industries_sec  pb-5 px-0">
        <div  className="col-md-12 px-0">
          <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/work.png" className="img-fluid" />
        </div>
    </div>
    <div className="col-md-12 px-0 mt-4 display_pc">
      <Workkflow />
    </div>
    <div className="col-md-12 px-0 mt-4 display_pc">
      <Getintouchnew />
    </div>
    </>
  )
}

export default Industries