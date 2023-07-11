import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Ourclientsol() {
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
  return (
    <div className='col-md-12 text_up bg-dark background_img_red'>
       <p className='text_white_bold_our'> Our Clients Always<br/> Speak Highly of Our<br/> Services</p>
       
       <Carousel 
       showDots={true}
       infinite={true}
       autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={2000}
       dotListClass="custom-dot-list-style4"
       removeArrowOnDeviceType={["tablet", "mobile"]}
       responsive={responsive}>
       <div className='col-md-12 pt-4'>
        <img src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/solutions.png' className='img-fluid ' />
       </div>
       <div className='col-md-12 pt-4'>
        <img src="https://1864597015.rsc.cdn77.org/selteq/images/t1.png" className='img-fluid ' />
       </div>
       <div className='col-md-12 pt-4'>
        <img src="https://1864597015.rsc.cdn77.org/selteq/images/t2.png" className='img-fluid ' />
       </div>
       {/* <div className='col-md-12 pt-4'>
        <img src='../images/t3.png' className='img-fluid ' />
       </div> */}
        </Carousel>
    </div>
  )
}

export default Ourclientsol