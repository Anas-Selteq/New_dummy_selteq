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
        <p className='mb-0 text_size_sol'> Futuristic Applications</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'> Integrated with New-Age Technology</p>
        <p className='mb-0 sub_sub_text_size_sol'>Building world-class apps & supplying remarkable Front-End services to businesses of all sizes.
          Smart & Stylish Apps
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>UI/UX Design</p>
        <p className='mb-0 sub_sub_text_size_sol'> Designing the overall layout & interface of an app, including how users interact with it, to make it as user-friendly as possible. </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Immersive Experiences</p>
        <p className='mb-0 sub_sub_text_size_sol'>Beautifully designed apps for Android & iOS. On-time delivery of a business-friendly app within your budget.</p>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>Powered by Complex Technologies</p>
            <p className='mb-0 sub_sub_text_size_sol1'>Our apps are fast, reliable, & user-friendly. We have the expertise & resources to help you along the way.</p>
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