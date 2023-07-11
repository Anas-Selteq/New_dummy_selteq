import { useRouter } from "next/router";
import React from "react";

function Bloackchain() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us");
  };
  return (
    <div className="px-0 background_block_chain">
      <div className="col-md-12 text-center pt-3 pb-4">
        <h4 className="color_heading_white">
          Partner with the Metaverse Experts
        </h4>
      </div>
      <div className="col-md-12">
        <p className="text_head_color mb-2">Expertise and Experience</p>
        <p className="sub_text_head_color">
          Our team possesses the expertise to deliver exceptional metaverse
          solutions that meet your unique needs.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Innovative Approach</p>
        <p className="sub_text_head_color">
          We’re passionate about pushing the boundaries of technology &
          constantly exploring new possibilities.
        </p>
      </div>
      <div className="col-md-12 pt-2">
        <p className="text_head_color mb-2">Customization & Collaboration</p>
        <p className="sub_text_head_color">
          We believe in collaborative partnerships, working closely with you to
          co-create customized metaverse solutions.{" "}
        </p>
      </div>
      <div className="col-md-12 pt-2 pb-5 mb-5">
        <p className="text_head_color mb-2">
          Embark on Your Metaverse Journey?
        </p>
        <p className="sub_text_head_color pb-5 mb-5">
          Contact us today to schedule a consultation with our experts and
          embark on a transformative digital experience.
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
