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
                  <h5 className="font_weight_heading">Redefining VR</h5>
                  <p className="pt-4 color_teext_services">
                    We are at the forefront of the digital revolution,
                    pioneering Metaverse Services & Solutions that redefine the
                    boundaries of virtual reality. Step into a world where
                    imagination meets technology, where you can create, explore,
                    and connect like never before. Our expert team is here to
                    guide you on this incredible journey into the metaverse.
                  </p>
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
                    Get Endless Possibilities
                  </h5>
                  <p className="pt-4 color_teext_services">
                    The metaverse is a digital realm where virtual and physical
                    realities converge, allowing users to engage in immersive
                    experiences, interact with others, and explore new
                    dimensions. It is a shared space built on cutting-edge
                    technologies like augmented reality (AR), virtual reality
                    (VR), blockchain, and artificial intelligence (AI). Our
                    Metaverse Services & Solutions empower businesses and
                    individuals to harness the full potential of this
                    transformative concept.
                  </p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Metaverse Marketing Services
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Drive brand awareness and engagement in the metaverse
                    through targeted marketing strategies, leveraging social
                    media, influencer partnerships, community building, and
                    immersive experiences to reach and captivate the digital
                    audience.
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
                  <h5 className="font_weight_heading">
                    Quality and Reliability
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We uphold the highest quality standards in our work,
                    ensuring that every metaverse solution we deliver is robust,
                    secure, and optimized for performance. You can trust us to
                    provide reliable and scalable services that drive your
                    metaverse success.
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
              Our Metaverse Services
            </h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">Decentraland Metaverse Building</p>
            <p className="mb-0 sub_text_promising pt-2">
              Design & develop immersive experiences within the Decentraland metaverse, using the best tools & technologies.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Redefining VR</p>
            <p className="mb-0 sub_text_promising pt-2">
              We’re at the forefront of the digital revolution, pioneering
              Metaverse Services that redefine the boundaries of VR.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Web 3.0 Services</p>
            <p className="mb-0 sub_text_promising pt-2">
              Harness the power of Web 3.0 technologies to build decentralized applications (dApps) and smart contracts.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">The Sandbox Metaverse Building</p>
            <p className="mb-0 sub_text_promising pt-2">
              Shape the future of virtual worlds by constructing unique experiences within The Sandbox, using advanced creation tools.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Metaverse Land Purchases</p>
            <p className="mb-0 sub_text_promising pt-2">
              Acquire virtual land in decentralized metaverses, leveraging blockchain technology for secure ownership.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Corporate Wallet Setup & Security</p>
            <p className="mb-0 sub_text_promising pt-2">
              Establish compliant wallets for corporate entities, ensuring robust encryption and multi-factor authentication.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
