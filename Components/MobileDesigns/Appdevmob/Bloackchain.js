import React from 'react'

function Bloackchain() {
  return (
    <div className='px-0 background_block_chain'>
      <div className='col-md-12 pt-5'>
        <p className='text_head_color mb-2'>Blockchain Development</p>
        <p className='sub_text_head_color'>Building decentralized and secure systems using blockchain technology for various use cases such as digital identity, supply chain management and more.</p>
      </div>
      <div className='col-md-12 pt-2'>
        <p className='text_head_color mb-2'>Data Managment</p>
        <p className='sub_text_head_color'>Managing and analysing your data more effectively by developing software solutions that fit your needs. </p>
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