import { useRouter } from 'next/router'
import React from 'react'

function Unlock() {
  const router = useRouter()
  const contact = () => {
    router.push('/contact-us')
  }
  return (
    <div className="col-md-12  pt-5">
      <div className="col-md-12 text-center">
        <p className="mb-0 text_size_sol">Powerful Yet Smooth Solutions</p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Intelligent & Bespoke Websites</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Creating a comprehensive, fully robust, & user-friendly website that
          makes your business grow.{' '}
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Problems</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Creating secure & scalable websites. To get yourself out of all these
          vulnerabilities, contact us.{' '}
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Solutions</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Our development team focuses on functionality, speed, responsiveness &
          create harmony within the systems.
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Technologies</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Python, ASP.net, PHP, .Net Core, Angular.JS, React.JS, Java Script &
          more. We choose the best to suit your needs.
        </p>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-5 col-6 px-0 pt-4">
            <p className="mb-0 sub_text_size_sol">Results</p>
            <p className="mb-0 sub_sub_text_size_sol">
              We focus on the user interface & user experience that can only be
              manifested by smooth functionality.
            </p>
          </div>
          <div className="col-md-7 col-6 px-0 pt-4">
            <img className="img-fluid" src="https://1864597015.rsc.cdn77.org//selteq/images/Frame1.png" />
          </div>
        </div>
      </div>
      <div className="col-md-12 px-0 pt-3 pb-4">
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>        </button>
      </div>
    </div>
  )
}

export default Unlock
