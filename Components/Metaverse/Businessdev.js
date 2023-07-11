import { useRouter } from "next/router";
import React from "react";
import Bloackchain from "../MobileDesigns/Metaverse/Bloackchain";
import Solutions from "../MobileDesigns/Metaverse/Solutions";

function Businessdev() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us");
  };
  return (
    <div className="col-md-12 p-0">
      <div className="col-md-12 px-0 background_businesss display_h">
        <div className="container px-5">
          <div className="col-md-12 text-center">
            <h2 className="color_heading_white">
              Partner with the Metaverse Experts
            </h2>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-3">
                <p className="color_white mb-1 pt-0">Expertise and Experience</p>
                <p className="custom_paraa_font text-light">
                  With years of experience in software development and a deep
                  understanding of emerging technologies, our team possesses the
                  expertise to deliver exceptional metaverse solutions that meet
                  your unique needs.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-0">Innovative Approach</p>
                <p className="custom_paraa_font text-light">
                  We are passionate about pushing the boundaries of technology
                  and constantly exploring new possibilities within the
                  metaverse. Our innovative mindset ensures we stay ahead of the
                  curve and deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-5">
              <div className="col-md-12">
                <p className="color_white mb-1 pt-3">
                  Customization and Collaboration
                </p>
                <p className="custom_paraa_font text-light">
                  We believe in collaborative partnerships, working closely with
                  our clients to understand their goals and co-create customized
                  metaverse solutions. Our priority is your vision, and we are
                  committed to delivering results exceeding your expectations.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-0">
                  Embark on Your Metaverse Journey
                </p>
                <p className="custom_paraa_font text-light">
                  Unlock the boundless potential of the metaverse with our
                  innovative Metaverse Services & Solutions. Contact us today to
                  schedule a consultation with our experts and embark on a
                  transformative digital experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center pt-5">
            <button
              onClick={() => contact()}
              className="btn btn-danger btn-lg font_color_size py-2 px-5 animated_button_banner"
            >
              <span class="button-text">BOOK CONSULTATION
                <i id="arrow_icon" className="fas fa-arrow-right"></i>
              </span>
              <span class="animation-layer"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 display_pc px-0">{/* <Ascand /> */}</div>
      <div className="col-md-12 display_pc px-0">
        <Bloackchain />
      </div>
      <div className="col-md-12 display_pc px-0">
        <Solutions />
      </div>
    </div>
  );
}

export default Businessdev;
