import styles from '../../styles/banner.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import styless from '../../styles/softwaremob.module.css'

function Banner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
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
              <h2 className="mb-0 font_crousal">Consulting Services</h2>
              <h6 className="display_pc font_wi_banner">
                Fueling Business Success with Specialized Consultancy
              </h6>
              {/* <h2 className={styles.font_security}>FUNCTIONALITIES</h2> */}
              <p className="size_12 display_h">
                Fueling Business Success with Specialized Consultancy
              </p>
              <Link href="/contact-us">
                {' '}
                <button className="btn btn-light background_color_black mt-3 display_h">
                  {' '}
                  LEARN MORE{' '}
                </button>
              </Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us">
                  {' '}
                  <button className="btn btn-light background_color_black1 mt-3 ">
                    {' '}
                    LEARN MORE{' '}
                  </button>{' '}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.it_background_image_crousal2}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">
                Transformational Consultancy
              </h2>
              <h6 className="display_pc font_wi_banner">
                Transformational Consultancy
              </h6>
              {/* <h2 className={styles.font_security}>AND AGILITY</h2> */}
              <p className="size_12 display_h">
                Turn the future into your advantage
              </p>
              <Link href="/contact-us">
                {' '}
                <button className="btn btn-light background_color_black mt-3 display_h">
                  {' '}
                  LEARN MORE{' '}
                </button>
              </Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us">
                  {' '}
                  <button className="btn btn-light background_color_black1 mt-3 ">
                    {' '}
                    LEARN MORE{' '}
                  </button>{' '}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.it_background_image_crousal3}>
            <div className="col-md-12 text_align_crousal text-center">
              <h2 className="mb-0 font_crousal">Startup Consultancy</h2>
              <h6 className="display_pc font_wi_banner">Startup Consultancy</h6>
              {/* <h2 className={styles.font_security}>AND SECURITY</h2> */}
              <p className="size_12 display_h">
                Equip your startup for success today
              </p>
              <Link href="/contact-us">
                {' '}
                <button className="btn btn-light background_color_black mt-3 display_h">
                  {' '}
                  LEARN MORE{' '}
                </button>
              </Link>
              <div className="col-md-12 p-0 display_pc text-center">
                <Link href="/contact-us">
                  {' '}
                  <button className="btn btn-light background_color_black1 mt-3 ">
                    {' '}
                    LEARN MORE{' '}
                  </button>{' '}
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="display_pc">
        <div className="col-md-12 px-0 display_pc">
          <div className={styless.backsoft}>
            <div className="col-md-12 px-0">
              <p className="text_size_baner">
                <b>Consulting Services</b>
              </p>
              <p>Fueling Business Success with Specialized Consultancy</p>
              <div className="text-center ">
                <Link href="/contact-us">
                  {' '}
                  <button className="btn btn-danger background_button_soft1 animated_button_banner py-2 px-5">
                    <span class="button-text">Explore</span>
                    <span class="animation-layer"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
