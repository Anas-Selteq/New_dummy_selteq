import styles from "../../styles/banking.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Ourclients() {
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
    <div className="col-md-12 text-center py-5 px-0 " style={{ backgroundImage: `url("https://selteq.net/wp-content/uploads/2022/07/solution-34.png")` }}>
      <div className="col-md-12">
        <div className="container mt-5 mb-5">
          {/* <h3 data-aos="zoom-in" className={styles.landing_create}><b>Industries</b></h3>
    <h6 data-aos="zoom-in" className={styles.h6_solutions}>Creating Industry-Specific Software Solutions</h6> */}
          <div data-aos="zoom-in" className="col-md-12 p-0  mt-5 display_h">
            <Carousel
              responsive={responsive}
              autoPlaySpeed={5000}
              autoPlay={true}
              infinite={true}
              showDots={true}
            >
              <div className="col-md-12 pt-5 pb-5">
                <img src="/Assets/Images/testimonal1.png" className="img-fluid img_widthh" />
              </div>
              <div className="col-md-12 pt-5 pb-5">
                <img src="/Assets/Images/testimonal2.png" className="img-fluid img_widthh" />
              </div>
              <div className="col-md-12 pt-5 pb-5">
                <img src="/Assets/Images/testimonal3.png" className="img-fluid img_widthh" />
              </div>
              {/* <div className="col-md-12 pt-5 pb-5">
    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/test3.png" className="img-fluid img_widthh" />
   </div> */}
            </Carousel>
          </div>

          <div data-aos="zoom-in" className="col-md-12 p-0 mt-5 display_pc">
            <Carousel
              responsive={responsive}
              autoPlaySpeed={5000}
              autoPlay={true}
              infinite={true}
            >
              <div className="col-md-12 background_land py-5">
                <div className="row">
                  <div className="col-md-6">
                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/medic.webp" className="img-fluid" />
                  </div>
                  <div className="col-md-6 text-center pt-3">
                    <h2 className="colortext_all mt-4">Medical</h2>
                    <p className="text_p"><i>Bringing together technologies and expertise that make a difference at Selteq, we know the future is now. Innovation trumps standard processes when it comes to the healthcare technology arena. </i></p>
                    <button className="btn btn-outline-dark px-5 py-2 mt-2 button_rad"> Read more </button>
                  </div>
                </div>
              </div>

            </Carousel>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Ourclients