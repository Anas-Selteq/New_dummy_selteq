import { useRouter } from 'next/router';
import React from 'react'

function Bloackchain() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }
  return (
    <div className='px-0 background_block_chain'>
      <h3 className='text-light text-center pt-3'>Why Choose Our BPO Services?</h3>
      <div className='col-md-12 pt-3'>
        <p className='text_head_color mb-2'>Commitment to Excellence </p>
        <p className='sub_text_head_color'>
          With our expertise and commitment to excellence, we empower businesses to streamline their operations.               </p>
      </div>
      <div className='col-md-12 pt-2'>
        <p className='text_head_color mb-2'>Quality Management Systems</p>
        <p className='sub_text_head_color'>
          We maintain robust quality management systems, including ISO certifications & continuous improvement processes.
        </p>
      </div>

      <div className='col-md-12 pt-2'>
        <p className='text_head_color mb-1'>Cost Savings</p>
        <p className='sub_text_head_color'>
          By outsourcing tasks to our experienced professionals, you can reduce overhead costs & eliminate the need for additional resources.
        </p>
      </div>

      <div className='col-md-12 pt-2'>
        <p className='text_head_color mb-1'>Scalability & Flexibility</p>
        <p className='sub_text_head_color'>
          You can scale your operations up or down based on demand. We ensure seamless integration of our services.
        </p>
      </div>

      <div className='col-md-12 pt-2 pb-5 mb-5'>
        <p className='text_head_color mb-1'>Access to Expertise</p>
        <p className='sub_text_head_color mb-5 pb-5'>
          You can leverage their expertise to gain valuable insights, innovative strategies, & industry best practices.
        </p>
      </div>

      <div className='col-md-12 cust_pad'>
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>
        </button>
      </div>
    </div>
  )
}

export default Bloackchain