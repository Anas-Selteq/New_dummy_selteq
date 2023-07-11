import React from "react"
import FooterCSS from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={FooterCSS.main_div}>
      <div className={FooterCSS.second_main_div}>
        <div className={FooterCSS.first_div}>
          <div className={FooterCSS.form_div}>
            <h1 className={FooterCSS.heading_h1}>CONTACT US</h1>
            <div className={FooterCSS.main_form_div}>
              <form className={FooterCSS.form_start}>
                <p className={FooterCSS.form_p}>
                  <label className={FooterCSS.form_label}>First Name</label>
                  <input
                    type="text"
                    className={FooterCSS.form_input}
                    placeholder="First Name"
                  />
                </p>
                <p className={FooterCSS.form_p}>
                  <label className={FooterCSS.form_label}>Last Name</label>
                  <input
                    type="text"
                    className={FooterCSS.form_input}
                    placeholder="Last Name"
                  />
                </p>
                <p className={FooterCSS.form_p}>
                  <label className={FooterCSS.form_label}>Email Address</label>
                  <input
                    type="text"
                    className={FooterCSS.form_input}
                    placeholder="Email Address"
                  />
                </p>
                <p className={FooterCSS.form_p}>
                  <label className={FooterCSS.form_label}>Message</label>
                  <textarea className={FooterCSS.form_textarea}></textarea>
                </p>
                <input type="hidden" className={FooterCSS.form_input} />
                <div className={FooterCSS.form_bottom_div}>
                  <div className={FooterCSS.form_span_button_div}>
                    <p className={FooterCSS.form_span_p}>
                      <span className={FooterCSS.form_span_span1}>9 + 2</span> =
                      <input
                        type="text"
                        size="2"
                        className={FooterCSS.form_span_input}
                        autocomplete="off"
                      />
                    </p>
                  </div>
                  <button type="submit" className={FooterCSS.form_button}>
                    SUBSCRIBE
                  </button>
                </div>
                <input type="hidden" />
                <input type="hidden" className={FooterCSS.form_input} />
              </form>
            </div>
          </div>
        </div>
        <div className={FooterCSS.second_div}>
          <div className={FooterCSS.second_maindiv}>
            <div className={FooterCSS.second_start}>
              <h2 className={FooterCSS.heading_h1}>ABOUT US</h2>
              <p>
                <span className={FooterCSS.footer_span}>
                  Selteq, headquartered in London, is an ultimate IT solutions
                  provider aimed at helping organizations embark on innovation
                  to achieve competitiveness. We focus on streamlining business
                  processes via our cutting-edge technological reforms.
                </span>
              </p>
            </div>
            <div className={FooterCSS.Mail__div}>
              <div className={FooterCSS.Mail__div2}>
                <a href="#" className={FooterCSS.footerEmial}>
                  <Image src= "https://1864597015.rsc.cdn77.org/selteq/images/mail.png" className={FooterCSS.footer_images} />
                  contact@selteq.net
                </a>
              </div>
            </div>
            <div className={FooterCSS.Mail__div}>
              <div className={FooterCSS.Mail__div2}>
                <a href="#" className={FooterCSS.footerEmial}>
                  <Image src= "https://1864597015.rsc.cdn77.org/selteq/images/phone.png" className={FooterCSS.footer_images} />
                  UK +44 800 4488 994
                </a>
              </div>
              <div className={FooterCSS.Mail__div2}>
                <a href="#" className={FooterCSS.footerEmial}>
                  <Image src= "https://1864597015.rsc.cdn77.org/selteq/images/phone.png" className={FooterCSS.footer_images} />
                  USA +1 650 999 6951
                </a>
              </div>
            </div>
            <div className={FooterCSS.Mail__div}>
              <div className={FooterCSS.Mail__div2}>
                <h3 className={FooterCSS.Mail__div_headings}>
                  <Image className={FooterCSS.footer_images} src="https://1864597015.rsc.cdn77.org/selteq/images/location.png"/>
                  USA
                </h3>
                <a href="#" className={FooterCSS.footerEmial}>
                  125 University Avenue, Palo Alto, CA 94301. USA
                </a>
              </div>
              <div className={FooterCSS.Mail__div2}>
                <h3 className={FooterCSS.Mail__div_headings}>
                  <Image className={FooterCSS.footer_images} src="https://1864597015.rsc.cdn77.org/selteq/images/location.png"/>
                  UK
                </h3>
                <a href="#" className={FooterCSS.footerEmial}>
                  Portman House, 2 Portman St, London W1H 6DU,United Kingdom
                </a>
              </div>
            </div>
          </div>
          <ul className={FooterCSS.ul_icons}>
            <li className={FooterCSS.icons}>
              <a href="https://www.linkedin.com/company/seltequk">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/linkedin.svg" />
              </a>
            </li>
            <li className={FooterCSS.icons}>
              <a href="https://twitter.com/selteq1">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/twitter.svg" />
              </a>
            </li>
            <li className={FooterCSS.icons}>
              <a href="https://www.facebook.com/seltequk/">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/facebook.svg" />
              </a>
            </li>
            <li className={FooterCSS.icons}>
              <a href="https://www.instagram.com/selteq.solution">
                <Image src="https://1864597015.rsc.cdn77.org/selteq/images/instagram.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
