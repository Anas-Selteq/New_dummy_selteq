import { useRouter } from 'next/router'
import React from 'react'

function Bloackchain() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div className="px-0 background_block_chain">
      <div className="col-md-12 pt-3 ">
        <h4 className="color_heading_white pb-4">
          End-to-End Business Solutions
        </h4>
        <p className="text_head_color mb-2">Business Process Automation</p>
        <p className="sub_text_head_color">
          Develop custom solutions utilizing robotic process automation (RPA)
          and artificial intelligence (AI).
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Strategic Business Planning</p>
        <p className="sub_text_head_color">
          Align your organizational objectives with innovative strategies,
          driving sustainable growth & competitive advantage.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Finance Effectiveness</p>
        <p className="sub_text_head_color">
          Streamline processes, leverage automation, implement robust controls,
          and enhance reporting capabilities.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Enterprise Applications</p>
        <p className="sub_text_head_color">
          Modernize legacy systems, integrate disparate platforms, & optimize
          workflows with scalability, and agility.
        </p>
      </div>
      <div className="col-md-12 pt-2 bg_padd_on_last">
        <p className="text_head_color mb-2">Working Capital Optimization</p>
        <p className="sub_text_head_color">
          Optimize inventory, streamline receivables, and manage payables
          effectively while achieving working capital efficiency.
        </p>
      </div>

      <div className="col-md-12 cust_pad">
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>        </button>
      </div>
    </div>
  )
}

export default Bloackchain
