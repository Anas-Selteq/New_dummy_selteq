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
        <p className='mb-0 text_size_sol'>Transformational & Startup Consultancy</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Transformational Consultancy</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Leverage our expertise in transformative technologies & frameworks to drive strategic change & organizational innovation.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Startup Consultancy</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          We offer strategic guidance, market analysis, product development insights, and scalability solutions.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Enterprise Portfolio & Program Management</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Optimize your enterprise's project portfolio and streamline program management with our advanced solutions.
        </p>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>System Integration Solutions</p>
            <p className='mb-0 sub_sub_text_size_sol mt-3'>
              Integrating disparate systems & technologies, enabling seamless data flow, interoperability, & operational efficiency.
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