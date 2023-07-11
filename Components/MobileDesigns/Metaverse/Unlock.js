import { useRouter } from 'next/router';
import React from 'react'

function Unlock() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }
  return (
    <div className='col-md-12  pt-5'>
      <div className='col-md-12 text-center'>
        <p className='mb-0 text_size_sol'>Transforming VR Experiences</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Get Endless Possibilities</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Get a shared space built on cutting-edge technologies like AR, VR, blockchain, and AI.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Redefining VR</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          We’re at the forefront of the digital revolution, pioneering Metaverse Services that redefine the boundaries of VR.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Metaverse Marketing Services</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Drive brand awareness in the metaverse through targeted marketing strategies & influencer partnerships.
        </p>
      </div>

      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>Quality & Reliability</p>
            <p className='mb-0 sub_sub_text_size_sol'>
              We uphold the highest quality in our work, ensuring every metaverse solution we deliver is robust & secure.
            </p>
          </div>
          <div className='col-md-7 col-6 px-0 pt-4'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org//selteq/images/Frame1.png' />
          </div>
        </div>
      </div>
      <div className='col-md-12 px-0 pt-3 pb-4'>
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>
        </button>
      </div>
    </div>
  )
}

export default Unlock