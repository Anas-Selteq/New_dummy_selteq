import React from 'react';

function Video() {
  return (
    <div className='col-md-12 p-0 px-0'>
      <div className='col-md-12 p-0 px-0 display_h vh-100' style={{ height: '100vh' }}>
        <video loop autoPlay muted className='video_main position-relative h-100' style={{ objectFit: 'fill' }}>
          <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/new1.mp4' type="video/mp4" />
        </video>
        <div className="col-md-12 px-0 display_h py-1 pb-0 banner_footer_main">
          <div className="container d-flex flex-column align-items-center">
            <h5 className={`text-center banner_footer_main_heading`}><b>You Dream. We Create.</b></h5>
            <p className="text-center text-light pb-0 mb-0 desc">With Our Future-Proof Software Solutions</p>
          </div>
        </div>
      </div>

      <div className='col-md-12 video-container1 p-0 display_pc' style={{ height: '70vh' }}>
        <video loop autoPlay muted className='video_main2' style={{ objectFit: 'fill' }}>
          <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/mob.mp4' type="video/mp4" />
        </video>
        <div className="col-md-12 px-0 display_h py-2 banner_footer_main display_pc" >
          <div className="container d-flex flex-column align-items-center">
            <h5 className={`text-center banner_footer_main_heading_mbl`}><b>You Dream. We Create.</b></h5>
            <p className="text-center banner_footer_main_desc" style={{ fontSize: '11px' }}>With Our Future-Proof Software Solutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video