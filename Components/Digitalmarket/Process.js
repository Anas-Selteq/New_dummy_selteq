import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Process.module.css'

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)

  return (
    <div className="col-sm-12 p-0 margin_set_for_new pt-4">
      <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 background_services_sec">
          <div className="container">
            <div className="col-md-12 px-0 py-5">
              <div className="row ">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Search Engine Optimization (SEO)
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Enhance your online visibility and organic search rankings
                    to attract quality traffic and generate leads. Drive
                    targeted traffic to your website through strategic
                    optimization, leveraging keywords, ad placements, and
                    audience targeting. Increase brand visibility by displaying
                    targeted ads on relevant websites and social media platforms
                    to reach your target audience.
                  </p>
                  {/* <p className="mb-0 font_weight_text_list pt-3">
                    XP, Agile, Unified Process
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p>
                  <p className="mb-0 font_weight_text_list">
                    XP, Agile, Unified Process
                  </p> */}
                </div>
                <div className="col-md-6 text_align1 ">
                  <img
                    className="img-fluid img_size_services"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/1.png"
                  />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 text_align2 ">
                  <img
                    className="img-fluid img_size_services1"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/2.png"
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Pay-Per-Click Advertising (PPC)
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Leverage targeted ads on search engines and social media
                    platforms to drive immediate traffic and conversions.
                    Maximize the effectiveness of your landing pages by
                    optimizing elements like headlines, calls-to-action, forms,
                    and design. Conduct data-driven experiments to compare
                    different versions of your website or landing page and
                    determine the most effective variation for conversion.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">Email Marketing</h5>
                  <p className="pt-4 color_teext_services">
                    Create impactful email campaigns to nurture leads, promote
                    products, and build lasting customer relationships. Monitor
                    and manage your online reputation across various channels,
                    responding to reviews and feedback to maintain a positive
                    brand image. Prepare strategies and protocols to handle
                    potential reputation crises, ensuring timely and effective
                    communication to protect your brand's integrity.
                  </p>
                </div>
                <div className="col-md-6 text_align1 ">
                  <img
                    className="img-fluid img_size_services2"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/3.png"
                  />
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 text_align2 ">
                  <img
                    className="img-fluid img_size_services3"
                    src="https://1864597015.rsc.cdn77.org/selteq/images/4.png"
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">Content Marketing</h5>
                  <p className="pt-4 color_teext_services">
                    Develop and distribute compelling content that resonates
                    with your target audience, establishes thought leadership,
                    and drives conversions. Our expertise, strategies, and
                    data-driven approach help businesses achieve their marketing
                    goals and stay ahead in today's competitive landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12 mt-4">
          <div className="row pt-2">
            <div className="col-md-6 col-5 cust_padding m-auto  text-left">
              <img
                className="img_width_sel"
                src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/sel.png"
              />
            </div>
            <div className="col-md-6 col-7">
              <img
                src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
        <div className={styles.background_process1}>
          <div className="col-md-12 text-center">
            <h6 className="text_color_heading_white">
              Social Media Advertising
            </h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">
              Facebook Ads
            </p>
            <p className="mb-0 sub_text_promising pt-2">
              Reach your target audience through targeted Facebook ad campaigns, using demographic, & behavioral targeting.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">
              Instagram Advertising
            </p>
            <p className="mb-0 sub_text_promising pt-2">
              Leverage the visual power of Instagram to promote your brand, products or services to a highly engaged user base.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Video Production</p>
            <p className="mb-0 sub_text_promising pt-2">
              Create engaging videos that tell your brand story and connect with your audience on various platforms.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Video Optimization</p>
            <p className="mb-0 sub_text_promising pt-2">
              Optimize video for search engines, incorporate relevant keywords, & enhance discoverability on YouTube.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Brand Strategy</p>
            <p className="mb-0 sub_text_promising pt-2">
              Craft a powerful brand identity, positioning, and messaging that resonates with your target market.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
