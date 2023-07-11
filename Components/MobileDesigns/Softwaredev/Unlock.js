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
        <p className='mb-0 text_size_sol'> Unlock Your Business Potential</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'> Progressive & Agile Software</p>
        <p className='mb-0 sub_sub_text_size_sol'> We use industry standards like Xtreme Programming (XP), Agile Software Development and Unified Process.</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Development Process</p>
        <p className='mb-0 sub_sub_text_size_sol'> This is followed by planning & design phases, development and testing, maintenance & support.</p>
      </div>
      <div className='col-md-12 px-0 pt-4'>
        <p className='mb-0 sub_text_size_sol'>Thriving Businesses Digitally</p>
        <p className='mb-0 sub_sub_text_size_sol'>We take a tailor-made approach, which is different from standard off-the-shelf software.</p>
      </div>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-5 col-6 px-0 pt-4'>
            <p className='mb-0 sub_text_size_sol'>Our Specialties</p>
            <p className='mb-0 sub_sub_text_size_sol1'>Our tech stack package combines modern tools, frameworks and technologies.</p>
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