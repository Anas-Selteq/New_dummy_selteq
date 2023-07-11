import React from "react";

function Bloackchain() {
  return (
    <div className="px-0 background_block_chain">
      <div className="col-md-12 pt-5">
        <p className="text_head_color mb-2">A Powerful IT Squad</p>
        <p className="sub_text_head_color">
          The stellar team of IT professionals can have you up and running with
          your next big project in no time.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Improving Business Efficiency</p>
        <p className="sub_text_head_color">
          Our managed IT model is designed to help our clients maintain a
          competitive edge through reliable IT systems.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">
          Flexible Development Methodologies
        </p>
        <p className="sub_text_head_color">
          Our resources build your system after carefully studying your business
          and identifying challenges.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">
          Fully-Functional & Scalable Product
        </p>
        <p className="sub_text_head_color">
          Our software solutions are created by our full-stack developers that
          can be upgraded to meet your future business needs.
        </p>
      </div>
      <div className="col-md-12 cust_pad">
        <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
          <span class="button-text">BOOK CONSULTATION</span>
          <span class="animation-layer"></span>
        </button>
      </div>
    </div>
  );
}

export default Bloackchain;
