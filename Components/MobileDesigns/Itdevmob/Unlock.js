import { useRouter } from "next/router";
import React from "react";

function Unlock() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us");
  };
  return (
    <div className="col-md-12  pt-5">
      <div className="col-md-12 text-center">
        <p className="mb-0 text_size_sol"> How to Outsource with Us?</p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Share Your Outsourcing Needs</p>
        <p className="mb-0 sub_sub_text_size_sol">
          We'll work with you to define your business scope & project
          expectations & help you decide the best way to proceed.
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Meet Your Project Team</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Meet your dedicated team of skilled developers & engineers ready to
          work on your project with.
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">Start Development</p>
        <p className="mb-0 sub_sub_text_size_sol">
          Our team of experts will take the reins and deliver secure software
          with quality, reliability, & efficiency on time.
        </p>
      </div>
      <div className="col-md-12 px-0 pt-4">
        <p className="mb-0 sub_text_size_sol">QA & Testing</p>
        <p className="mb-0 sub_sub_text_size_sol">
          We test & check your project for any bugs, errors, or issues to ensure
          the best quality and performance.
        </p>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-5 col-6 px-0 pt-4">
            <p className="mb-0 sub_text_size_sol">On-Time Delivery</p>
            <p className="mb-0 sub_sub_text_size_sol1">
              We strive to exceed your expectations and deliver a quality
              product that meets your needs.
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
          <span class="animation-layer"></span>
        </button>
      </div>
    </div>
  );
}

export default Unlock;
