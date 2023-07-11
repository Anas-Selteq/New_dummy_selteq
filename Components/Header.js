import { React, useState } from "react"
import HeaderCSS from "../styles/Header.module.css"
import Image from "next/image"
import { FaBars } from "react-icons/fa"
import Head from "next/head"
import Link from "next/link"
const Header = () => {
  const [toggle, setToggle] = useState()
  const [toggle1, setToggle1] = useState()
  const [toggle2, setToggle2] = useState()
  const [toggle3, setToggle3] = useState()
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.main__container}>
        <div className={HeaderCSS.logo__container}>
          <Link href="/">
            <Image
              src="https://1864597015.rsc.cdn77.org/selteqreact/images/logo.png"
              width="102"
              height="44"
              alt="Selteq IT Solutions"
              id="logo"
              data-height-percentage="60"
              data-actual-width="102"
              data-actual-height="44"
            />
          </Link>
        </div>
        <div className={HeaderCSS.nav__Elements}>
          <nav className={HeaderCSS.top__menu__nav}>
            <ul className={HeaderCSS.top__menu}>
              <li className={HeaderCSS.top__menu__li}>
                <Link href="#" onClick={() => setToggle(!toggle)}>
                  Services
                </Link>
                {toggle && (
                  <ul className={HeaderCSS.sub__menu__ul}>
                    <li id="menu-item-4251" className={HeaderCSS.sub__menu_li}>
                      <Link
                        href="/Software"
                        aria-current="page"
                      >
                        Software Development
                      </Link>
                    </li>
                    <li id="menu-item-4252" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Webdev">
                        Web Development
                      </Link>
                    </li>
                    <li id="menu-item-4267" className={HeaderCSS.sub__menu_li}>
                      <Link href="Appdev">
                        App Development
                      </Link>
                    </li>
                    <li id="menu-item-4274" className={HeaderCSS.sub__menu_li}>
                      <Link href="Itdev">IT Services</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <ul className={HeaderCSS.top__menu}>
              <li className={HeaderCSS.top__menu__li}>
                <Link href="#" onClick={() => setToggle1(!toggle1)}>
                  Case Studies
                </Link>
                {toggle1 && (
                  <ul className={HeaderCSS.sub__menu__ul}>
                    <li id="menu-item-4251" className={HeaderCSS.sub__menu_li}>
                      <Link
                        href="/ExpertPage"
                        aria-current="page"
                      >
                        Expert
                      </Link>
                    </li>
                    <li id="menu-item-4252" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Plexarrm">Plexaar</Link>
                    </li>
                    <li id="menu-item-4267" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Livechatm">
                        Live Chat System
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <ul className={HeaderCSS.top__menu}>
              <li className={HeaderCSS.top__menu__li}>
                <Link href='#' onClick={() => setToggle2(!toggle2)}>
                  Solutions
                </Link>
                {toggle2 && (
                  <ul className={HeaderCSS.sub__menu__ul}>
                    <li id="menu-item-4251" className={HeaderCSS.sub__menu_li}>
                      <Link
                        href="/Bankfinance"
                        aria-current="page"
                      >
                        FinTech
                      </Link>
                    </li>
                    <li id="menu-item-4252" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Medtechm">
                        medTech & mHealth
                      </Link>
                    </li>
                    <li id="menu-item-4267" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Edtechm">EdTech</Link>
                    </li>
                    <li id="menu-item-4274" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Ecommerece">E-commerce</Link>
                    </li>
                    <li id="menu-item-4274" className={HeaderCSS.sub__menu_li}>
                      <Link href="/Erp">ERP</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={HeaderCSS.top__menu__li}>
                <Link href="About">About US</Link>
              </li>
              <li className={HeaderCSS.top__menu__li}>
                <Link href="/Blog">Blog</Link>
              </li>
              <li className={HeaderCSS.top__menu__li}>
                <Link href="/ContactPage">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={HeaderCSS.mobile__nav}>
          <div className={HeaderCSS.logo__container1}>
            <Link href="/">
              <Image
                src="https://1864597015.rsc.cdn77.org/selteqreact/images/logo.png"
                width="102"
                height="44"
                alt="Selteq IT Solutions"
                id="logo"
                data-height-percentage="60"
                data-actual-width="102"
                data-actual-height="44"
              />
            </Link>
          </div>
          <div className={HeaderCSS.mobile__tab}>
            <button
              className={HeaderCSS.button__div}
              onClick={() => setToggle3(!toggle3)}
            >
              <FaBars />
            </button>
            {toggle3 && (
              <ul className={HeaderCSS.mobile__tab__ul}>
                <li className={HeaderCSS.mobile__tab__li}>
                  <Link href="#" className={HeaderCSS.mobile__tab__a}>
                    Services
                  </Link>
                  <ul className={HeaderCSS.mobile__tab__sub__menu__ul}>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Software" className={HeaderCSS.mobile__tab__a1}>
                        Software Development
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Webdev" className={HeaderCSS.mobile__tab__a1}>
                        Web Development
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="Appdev" className={HeaderCSS.mobile__tab__a1}>
                        App Development
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="Itdev" className={HeaderCSS.mobile__tab__a1}>
                        It Development
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={HeaderCSS.mobile__tab__li}>
                  <Link href="#" className={HeaderCSS.mobile__tab__a}>
                    Case Studies
                  </Link>
                  <ul className={HeaderCSS.mobile__tab__sub__menu__ul}>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/ExpertPage" className={HeaderCSS.mobile__tab__a1}>
                        Expert
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Plexarrm" className={HeaderCSS.mobile__tab__a1}>
                        Plexaar
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Livechatm" className={HeaderCSS.mobile__tab__a1}>
                        Live Chat System
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={HeaderCSS.mobile__tab__li}>
                  <Link href="#" className={HeaderCSS.mobile__tab__a}>
                    Solutions
                  </Link>
                  <ul className={HeaderCSS.mobile__tab__sub__menu__ul}>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Bankfinance" className={HeaderCSS.mobile__tab__a1}>
                        FinTech
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Medtechm" className={HeaderCSS.mobile__tab__a1}>
                        MedTech & mHealth
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Edtechm" className={HeaderCSS.mobile__tab__a1}>
                        EdTech
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Ecommerece" className={HeaderCSS.mobile__tab__a1}>
                        E-Commerce
                      </Link>
                    </li>
                    <li className={HeaderCSS.mobile__tab__sub__menu__li}>
                      <Link href="/Erp" className={HeaderCSS.mobile__tab__a1}>
                        ERP
                      </Link>
                      <Link href="About" className={HeaderCSS.mobile__tab__a2}>
                        About Us
                      </Link>
                      <Link href="/Blog" className={HeaderCSS.mobile__tab__a2}>
                        Blog
                      </Link>
                      <Link href="/ContactPage" className={HeaderCSS.mobile__tab__a2}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
