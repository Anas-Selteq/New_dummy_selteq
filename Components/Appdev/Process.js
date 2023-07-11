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
                    Integrated with New-Age Technology
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Building world-class mobile applications & supplying remarkable Front-End services to businesses of all sizes. Our expertise stretches across a broad range of technologies. We use:
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Google Material design
                    </li>
                    <li>
                      Firebase Cloud Messaging
                    </li>
                    <li>
                      MVVM architecture
                    </li>
                    <li>
                      Enterprise Mobility Management (EMM) solutions
                    </li>
                    <li>
                      machine learning frameworks
                    </li>
                    <li>
                      Custom-tailored Android SDKs
                    </li>
                  </ul>
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
                    Smart & Stylish Apps
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Designing the visual elements of an app, including its layout, colour scheme, and typography. This involves creating high-fidelity mockups and prototypes of the app’s interface and ensuring that it is visually appealing and easy to use.
                    <br />
                    Designing the overall layout and interface of an app, including how users interact with it, in order to make it as user-friendly as possible. This includes:
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Conducting user research
                    </li>
                    <li>
                      Creating wireframes and mockups
                    </li>
                    <li>
                      Testing the app’s usability
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-6 m-auto">
                  <h5 className="font_weight_heading">
                    Immersive Experiences
                  </h5>
                  <p className="pt-4 color_teext_services">
                    We tailor your app development to encompass the exact needs of your project using Python, Java, Flutter, React Native, Swift, Kotlin, R Programming, C++, HTML5, PHP, PhoneGap, Appcelerator, RhoMobil and more.
                    <br />
                    Our eye-catching & clever apps will leave your customers awestruck.
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      One App, Multiple Platforms: Beautifully designed native apps for Android & iOS.
                    </li>
                    <li>
                      Quick Turnaround Time: On-time delivery of a business-friendly app within your budget.
                    </li>
                  </ul>
                  <p className="mb-0 font_weight_text_list pt-3">
                  </p>
                  <p className="mb-0 font_weight_text_list">
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
                    Powered by Complex Technologies
                  </h5>
                  <p className="pt-4 color_teext_services">
                    Our apps are fast, reliable, beautiful and user-friendly. Whether you need to create a single MVP (Minimum Viable Product) to test with your users or a series of mobile products, we have the expertise, experience and resources to help you along the way.
                  </p>
                  <ul className='pl-3 color_teext_services'>
                    <li>
                      Native: Android App, IOS App
                    </li>
                    <li>
                      Cross-Platform: React Native App, Flutter, Titanium, Xamrain App
                    </li>
                    <li>
                      Hybrid App: Native script, Ionic App, Quasar, React Native
                    </li>
                    <li>
                      AR/VR, Wearables & TV Apps
                    </li>
                  </ul>
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
            <h6 className="text_color_heading_white">EMPOWERING YOUR BRAND</h6>
          </div>
          <div className="col-md-12 px-4">
            <p className="mb-0 text_promising">FinTech Apps</p>
            <p className="mb-0 sub_text_promising pt-2">
              Our expertise includes robo-advisory, mobile banking & payments,
              wealth management, PFM, portfolio tracking apps.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Medical Health</p>
            <p className="mb-0 sub_text_promising pt-2">
              Simplifying the healthcare ecosystem by empowering all users
              through personalization & real-time engagement.{' '}
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">Mobile IoT Apps</p>
            <p className="mb-0 sub_text_promising pt-2">
              Create smart systems for homes or offices using customized
              software. Developing controls for any devices & wearable.
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3">
            <p className="mb-0 text_promising">eLearning</p>
            <p className="mb-0 sub_text_promising pt-2">
              Facilitating the communication between teachers & students with a
              clear interface & seamless interaction.{' '}
            </p>
          </div>
          <div className="col-md-12 px-4 pt-3 pb-4">
            <p className="mb-0 text_promising">ECommerce</p>
            <p className="mb-0 sub_text_promising pt-2">
              Building scalable eCommerce apps using modern technologies. Time
              to leave the development of your digital shops to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
