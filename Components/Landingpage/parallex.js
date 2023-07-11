import Link from "next/link"
import styles from "../../styles/Landing.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";

function Parallex() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const router = useRouter();
  const link1 = () => {
    router.push("https://expert.one/")
  }
  const link2 = () => {
    router.push("https://chelsford.com/")
  }
  const link3 = () => {
    router.push("https://expert.one/")
  }



  return (
    <div className="col-md-12 p-0">

      <div className="col-md-12 text-center background_color_white display_h">

        <h3 data-aos="zoom-in" className={styles.landing_create}><b>Portfolio</b></h3>
        <p data-aos="zoom-in" className="">
          Our Portfolio Lives Up to Our Claims of Professional Quality While Still Being User-Friendly
        </p>

        <div className="col-md-12  display_non_parallex pt-5 ">
          <div className="display_img padding_top_sec1 ">

            <div className="display_img padding_top_sec1" data-aos="zoom-in">
              <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/22.png" className="img-fluid cards_new_parall" />
              <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/33.png" className="img-fluid cards_new_parall1" />
            </div>

          </div>
          <div className="display_img padding_top_sec2" data-aos="zoom-in">
            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/33.png" className="img-fluid cards_new_parall" />
            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/44.png" className="img-fluid cards_new_parall1" />
          </div>
          <div className="display_img padding_top_sec3" data-aos="zoom-in">
            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/55.png" className="img-fluid cards_new_parall" />
            <Link href="https://expertcentre.co.uk/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/66.png" className="img-fluid cards_new_parall1" /></Link>
          </div>
          <div className="text-center" data-aos="zoom-in">
            <Link href="https://www.expert.one/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/expertmob.png" className="img-fluid p-0  " /></Link>
          </div>
          <div className="display_img padding_top_sec3" data-aos="zoom-in">
            <Link href="https://www.thelaserhairremoval.co.uk/" ><img src="https://1864597015.rsc.cdn77.org/selteqreact/images/77.png" className="img-fluid cards_new_parall" /></Link>
            <Link href="https://www.londonlaser.co.uk/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/88.png" className="img-fluid cards_new_parall1" /></Link>
          </div>
          <div className="display_img padding_top_sec2" data-aos="zoom-in">
            <Link href="https://plexaar.com/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/44.png" className="img-fluid cards_new_parall" /> </Link>
            <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/11.png" className="img-fluid cards_new_parall1" />
          </div>
          <div className="display_img padding_top_sec1" data-aos="zoom-in">
            <Link href="https://chelsford.com/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/22.png" className="img-fluid cards_new_parall" /> </Link>
            <Link href="http://rovel.com/"> <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/33.png" className="img-fluid cards_new_parall1" /></Link>
          </div>

        </div>
      </div>
      <div className="col-md-12 display_pc">
        <div className="col-md-12">
          <p className="head_text_mob_port text-center pt-4">PORTFOLIO</p>
        </div>
        <div className="col-md-12">
          <p className="description_text_web">
            Our Portfolio Lives Up to Our Claims of Professional Quality While Still Being User-Friendly
          </p>
        </div>

        <Carousel
          autoPlaySpeed={1000}
          //  customTransition="all .5"
          showDots={true}
          infinite={true}
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["mobile"]}
          responsive={responsive}>
          <div className="col-md-12">
            <img onClick={() => link1()} className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/c1.png" />
          </div>
          <div className="col-md-12">
            <img onClick={() => link2()} className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/c2.png" />
          </div>
          <div className="col-md-12">
            <img onClick={() => link3()} className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/c3.png" />
          </div>
        </Carousel>
      </div>



    </div>
  )
}

export default Parallex