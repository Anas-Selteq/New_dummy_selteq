import { useRouter } from 'next/router';
import React from 'react'

function Bloackchain() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }
  return (
    <div className='px-0 background_block_chain'>
      <div className='col-md-12 pt-5'>
        <p className='text_head_color mb-2'>
          Open-Source Platform Development
        </p>
        <p className='sub_text_head_color'>
          Providing open-source platform development services to build a dynamic website that stands out.
        </p>
      </div>
      <div className='col-md-12 pt-2'>
        <p className='text_head_color mb-2'>
          eCommerce Development
        </p>
        <p className='sub_text_head_color'>
          Considering your operational needs, identify users’ needs, & develop an eCommerce website that will boost sales.
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