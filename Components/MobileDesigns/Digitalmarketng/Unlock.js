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
        <p className='mb-0 text_size_sol'>Bespoke Digital Marketing Services</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Search Engine Optimization (SEO)</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Enhance your online visibility and organic search rankings to attract quality traffic and generate leads.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Pay-Per-Click Advertising (PPC)</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Leverage targeted ads on search engines and social media platforms to drive immediate traffic and conversions.
        </p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Email Marketing</p>
        <p className='mb-0 sub_sub_text_size_sol'>
          Create impactful email campaigns to nurture leads, promote products, and build lasting customer relationships.
        </p>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>Content Marketing</p>
            <p className='mb-0 sub_sub_text_size_sol'>
              Develop and distribute compelling content that resonates with your target audience, establishes thought leadership, and drives conversions.
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
          <span class="animation-layer"></span>        </button>
      </div>
    </div>
  )
}

export default Unlock