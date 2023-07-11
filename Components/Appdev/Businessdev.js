import { useRouter } from "next/router";
import React from "react";
import Ascand from "../MobileDesigns/Webdevmob/Ascand";
import Bloackchain from "../MobileDesigns/Webdevmob/Bloackchain";
import Solutions from "../MobileDesigns/Webdevmob/Solutions";

function Businessdev() {
  const router = useRouter();
  const contact = () => {
      router.push("/contact-us")
  }
  
  return (
    <div className="col-md-12 p-0">
      <div className="col-md-12 px-0 background_businesss display_h ">
        <div className="container px-5">
          <div className="col-md-12 text-center">
            <h2 className="color_heading_white">
              {" "}
              APP SOLUTIONS FOR A CONNECTED WORLD
            </h2>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-md-6 px-5 mb-5 pb-5">
              <div className="col-md-12 pt-4">
                <p className="color_white mb-1 mt-0 pt-0">Cloud Integration</p>
                <p className="custom_paraa_font text-light">
                  Integrating an app with cloud-based services, such as storage,
                  databases, and serverless functions, enables scalability,
                  flexibility, and cost-effectiveness.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-3">
                  Data Analysis & Visualization
                </p>
                <p className="custom_paraa_font text-light">
                  Collecting, analysing and visualising data to provide insights
                  and make data-driven decisions. This includes using tools and
                  technologies such as SQL, Excel, and Tableau to analyse data
                  and create charts, graphs, and dashboards.
                </p>
              </div>
            </div>
            <div className="col-md-6 px-5">
              <div className="col-md-12 pt-4">
                <p className="color_white mb-1 pt-0">Push Notifications</p>
                <p className="custom_paraa_font text-light">
                  Sending push notifications to users through an app to inform
                  them of new content, updates, and other important information.
                </p>
              </div>
              <div className="col-md-12">
                <p className="color_white1 mb-1 pt-3">
                  App Analytics & Optimization
                </p>
                <p className="custom_paraa_font text-light">
                  Tracking and analysing the performance of an app, including
                  user engagement, retention, and revenue, and using this data
                  to optimise the app and improve its performance. Creating the
                  server-side logic and functionality of an app, including
                  database management, server-side scripting, and integration
                  with third-party services.
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
      <div className='col-md-12 display_pc px-0'>
            <Ascand />
        </div>
        <div className='col-md-12 display_pc px-0'>
            <Bloackchain />
        </div>
        <div className='col-md-12 display_pc px-0'>
            <Solutions />
        </div>
    </div>
  );
}

export default Businessdev;
