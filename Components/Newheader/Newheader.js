import Head from "next/head";
import styles from "../../styles/index.module.css";
import { useState } from "react";
import Link from "next/link";
import Collapse from "react-bootstrap/Collapse";
import { useRouter } from "next/router";
import { SubHeader } from "./SubHeader/SubHeader";
import { SubHeaderCaseStudies } from "./SubHeader/SubHeaderCaseStudies";
import { SubHeaderSolutions } from "./SubHeader/SubHeaderSolutions";
import { SubHeaderIndustries } from "./SubHeader/SubHeaderIndustries";
import {
  expertApp,
  microsoft,
  oracle,
  plexaar,
} from "@/Components/Newheader/SubHeader/assets";
import Image from "next/image";

export default function Newheader() {
  const [newnav, setNewnav] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [openSoftwareMenu, setOpenSoftwareMenu] = useState(false);
  const [caseStudies, setCaseStudies] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [industy, setIndustry] = useState(false);

  const servicesData = [
    {
      name: "Consulting Services",
      url: "/services/consulting",
    },
    {
      name: "Software Development",
      url: "/services/software-development",
    },
    {
      name: "Mobile Apps",
      url: "/services/app-development",
    },
    {
      name: "Web Development",
      url: "/services/web-development",
    },

    {
      name: "Data Analytics",
      url: "/software-development/data-analysis",
    },
    {
      name: "Marketing",
      url: "/services/digital-marketing",
    },
    {
      name: "Devops",
      url: "/software-development/devops-software",
    },
    {
      name: "IT Outsourcing",
      url: "/services/IT-outsourcing",
    },
    {
      name: "Internet of Things",
      url: "/software-development/IOT-software",
    },
    {
      name: "BPO",
      url: "/services/business-process-outsourcing",
    },
    {
      name: "Metaverse",
      url: "/services/metaverse",
    },
  ];
  const productsData = [
    {
      name: "CRM ",
      url: "/Newsolutions/salesplex",
    },
    {
      name: "ERP ",
      url: "/Newsolutions/plexaar",
    },
    {
      name: "Booking System      ",
      url: "/Newsolutions/calendex",
    },
    {
      name: "Accounting Software",
      url: "/Newsolutions/ondelpms",
    },

    {
      name: "Communication Software ",
      url: "/Newsolutions/buzz",
    },
    {
      name: "Digital Forms ",
      url: "/Newsolutions/formbiz",
    },
    {
      name: "Inventory Management  ",
      url: "/Newsolutions/stockpro",
    },
    {
      name: "HRMS ",
      url: "/Newsolutions/ireach",
    },
    {
      name: "Employee Onboarding System ",
      url: "/Newsolutions/forwarde",
    },
    {
      name: "Project Management ",
      url: "/Newsolutions/ondelafs",
    },
    {
      name: "POS ",
      url: "/Newsolutions/expertpay",
    },
    {
      name: "LMS  ",
      url: "/Newsolutions/eblurb",
    },
    {
      name: "Task Management  ",
      url: "/Newsolutions/onlog",
    },
    {
      name: "Data Analytics System  ",
      url: "/Newsolutions/foggle",
    },
    {
      name: "Document Management  ",
      url: "/Newsolutions/doCloud",
    },
  ];
  const industryData = [
    {
      name: "Retail ",
      url: "/under-development",
    },
    {
      name: "MedTech",
      url: "/industries/health-care-and-medical-software",
    },
    {
      name: "EdTech",
      url: "/industries/education-technology",
    },
    {
      name: "FinTech",
      url: "/industries/finance-banking",
    },

    {
      name: "Energy & Utilities ",
      url: "/under-development",
    },
    {
      name: "Government ",
      url: "/under-development",
    },
    {
      name: "Logistic & Supply chain  ",
      url: "/under-development",
    },
    {
      name: "Manufacturing ",
      url: "/under-development",
    },
    {
      name: "Telecom ",
      url: "/under-development",
    },
    {
      name: "AgriTech ",
      url: "/under-development",
    },
    {
      name: "InsurTech ",
      url: "/under-development",
    },
    ,
    {
      name: "Media & Entertainment  ",
      url: "/under-development",
    },
    {
      name: "Hospitality",
      url: "/under-development",
    },
    {
      name: "Aviation  ",
      url: "/under-development",
    },
    {
      name: "ERP  ",
      url: "/industries/enterprise-resource-planning",
    },
    {
      name: "E-commerce  ",
      url: "/industries/e-commerce-solutions",
    },
  ];
  const caseStudyData = [
    {
      name: "Expert ",
      url: "/case-studies/Expert-App",
    },
    {
      name: "Chelsford ",
      url: "/case-studies/Chelsford/",
    },
    {
      name: "London Franchise ",
      url: "/case-studies/London-Franchise/",
    },
    {
      name: "Digicon",
      url: "/case-studies/Digicon/",
    },

    {
      name: "Buzz",
      url: "/case-studies/buzz/",
    },
    {
      name: "iReach",
      url: "/case-studies/iReach/",
    },
    {
      name: "Live Chat System",
      url: "/case-studies/live-chat-system",
    },
    {
      name: "Plexaar",
      url: "/case-studies/Plexarr",
    },
  ];
  const softwareDevData = [
    {
      name: "CRM",
      link: "/software-development/CRM-solutions",
    },
    {
      name: "ERP",
      link: "/software-development/ERP-system",
    },
    {
      name: "AI & Machine Learning",
      link: "/software-development/AI-and-machine-learning",
    },
    {
      name: "BlockChain",
      link: "/software-development/blockchain",
    },
    {
      name: "Internet of Things",
      link: "/software-development/IOT-software",
    },
    {
      name: "HR Software",
      link: "/software-development/HR-software",
    },
    {
      name: "DevOps",
      link: "/software-development/devops-software",
    },
    {
      name: "Communication Software",
      link: "/software-development/communication-software",
    },
    {
      name: "Finance Software",
      link: "/software-development/finance-software",
    },
    {
      name: "Web Application",
      link: "/software-development/web-application",
    },
    {
      name: "Data Analytics",
      link: "/software-development/data-analysis",
    },
    {
      name: "Agile Software",
      link: "/software-development/agile-software",
    },
    {
      name: "Ecommerce",
      link: "/software-development/Ecommerce",
    },
    {
      name: "EdTech",
      link: "/software-development/Edtech",
    },
    {
      name: "MedTech",
      link: "/software-development/Medtech",
    },
  ];

  const router = useRouter();
  const software = () => {
    router.push("/software-development");
  };
  const web = () => {
    router.push("/web-development");
  };
  const app = () => {
    router.push("/app-development");
  };
  const It = () => {
    router.push("/it-outsourcing");
  };
  const expert = () => {
    router.push("/case-study-expert");
  };
  const plexarr = () => {
    router.push("/case-study-plexarr");
  };
  const livechat = () => {
    router.push("/live-chat-system");
  };
  const banking = () => {
    router.push("/banking-and-finance");
  };
  const healthcare = () => {
    router.push("/healthcare-and-medical");
  };
  const education = () => {
    router.push("/education");
  };
  const ecomm = () => {
    router.push("/e-commerce");
  };
  const erp = () => {
    router.push("/erp");
  };
  const aboutus = () => {
    router.push("/about-us");
  };
  const blog = () => {
    router.push("/blog");
  };
  const contactus = () => {
    router.push("/contact-us");
  };

  const test = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(!open2);
    setOpen3(false);
  };

  const test1 = () => {
    setOpen(false);
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  const test2 = () => {
    setOpen(!open);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const test3 = () => {
    setOpen3(!open3);
    // setOpen1(false);
    // setOpen2(false);
    // setOpen(false);
  };
  const test4 = () => {
    setOpen4(!open4);
    setOpen3(false);
    setOpen1(false);
    setOpen2(false);
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setOpenSoftwareMenu(!openSoftwareMenu);
  };
  const handleCloseCaseStudies = () => {
    setCaseStudies(!caseStudies);
  };
  const handleCloseSolutions = () => {
    setSolutions(false);
  };

  const handleCloseIndustries = () => {
    setIndustry(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main_head}>
        <div className="col-md-12  background_header_new  px-0">
          <div className="container-fluid w-100 display_h">
            <div className="row display_h">
              <div className="col-md-3 m-auto">
                <Link href="/">
                  {" "}
                  <img
                    className="img-fluid img_width_logo"
                    src="https://1864597015.rsc.cdn77.org/selteqreact/images/logo.png"
                  />{" "}
                </Link>
              </div>
              <div className="col-md-9 m-auto pr-4">
                <div className="col-md-12 text-right flex_style_new ">
                  <div className="dropdown">
                    <div
                      style={{ height: "100%", position: "relative" }}
                      className="dropbtn "
                      onMouseEnter={() => {
                        setOpenSoftwareMenu(true);
                      }}
                      onMouseLeave={() => {
                        setOpenSoftwareMenu(false);
                      }}
                    >
                      Services{" "}
                      {openSoftwareMenu && (
                        <div className={styles.crowBeak}></div>
                      )}
                    </div>
                  </div>
                  <div className="dropdown pl-4">
                    <div
                      style={{ height: "100%", position: "relative" }}
                      className="dropbtn "
                      onMouseEnter={() => {
                        setSolutions(true);
                      }}
                      onMouseLeave={() => {
                        setSolutions(false);
                      }}
                    >
                      Solutions
                      {solutions && <div className={styles.crowBeak}></div>}
                    </div>
                  </div>
                    {/* Industries are commented  */}
                  {/* <div className="dropdown pl-4">
                    <div
                      style={{ height: "100%", position: "relative" }}
                      className="dropbtn "
                      onMouseEnter={() => {
                        setIndustry(true);
                      }}
                      onMouseLeave={() => {
                        setIndustry(false);
                      }}
                    >
                      Industries{" "}
                      {industy && <div className={styles.crowBeak}></div>}
                    </div>
                  </div> */}
                  <div className="dropdown pl-4">
                    <div
                      style={{ height: "100%", position: "relative" }}
                      className="dropbtn "
                      onMouseEnter={() => {
                        setCaseStudies(true);
                      }}
                      onMouseLeave={() => {
                        setCaseStudies(false);
                      }}
                    >
                      Case Studies{" "}
                      {caseStudies && <div className={styles.crowBeak}></div>}
                    </div>
                  </div>

                  <div className="dropbtn  pl-4 ">
                    <Link className="text_dec_link" href="/about-us">
                      <span className="text-light">About us</span>
                    </Link>
                  </div>

                  <div className="dropbtn  pl-4 ">
                    <Link className="text_dec_link" href="/contact-us">
                      <span className="text-light">Contact us</span>
                    </Link>
                  </div>
                  {/* <div className="dropbtn  pl-4 ">
                    <Link className="text_dec_link" href="/blog">
                      <span className="text-light">Media</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {openSoftwareMenu && (
            <div
              style={{ zIndex: 99999999999 }}
              onMouseEnter={() => {
                setOpenSoftwareMenu(true);
              }}
              onMouseLeave={() => {
                setOpenSoftwareMenu(false);
              }}
            >
              <SubHeader handleClose={handleCloseMenu} />
            </div>
          )}

          {caseStudies && (
            <div
              onMouseEnter={() => {
                setCaseStudies(true);
              }}
              onMouseLeave={() => {
                setCaseStudies(false);
              }}
            >
              <SubHeaderCaseStudies handleClose={handleCloseCaseStudies} />
            </div>
          )}

          {solutions && (
            <div
              onMouseEnter={() => {
                setSolutions(true);
              }}
              onMouseLeave={() => {
                setSolutions(false);
              }}
              style={{ zIndex: 999 }}
            >
              <SubHeaderSolutions handleClose={handleCloseSolutions} />
            </div>
          )}

          {industy && (
            <div
              onMouseEnter={() => {
                setIndustry(true);
              }}
              onMouseLeave={() => {
                setIndustry(false);
              }}
              style={{ zIndex: 999 }}
            >
              <SubHeaderIndustries handleClose={handleCloseIndustries} />
            </div>
          )}
          {/* Mobile navigation -------------------------------------------------------------------------------------------------  */}
          {newnav ? (
            //  {/* content mobile  */}
            <div className="col-md-12 background_color_whitee position_content">
              <div className=" col-md-12 p-0 display_pc position_cc py-2">
                <div className="row ">
                  <div className="col-md-4 col-4">
                    <Link href="/">
                      <img
                        className="img-fluid "
                        src="https://1864597015.rsc.cdn77.org/selteqreact/images/logom.png"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8 col-8 text-right  ">
                    <button
                      className="btn btn-light btn_style_mobile"
                      onClick={() => setNewnav(!newnav)}
                    >
                      <i id="color_button" className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* one  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test2()}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="row">
                  <div className="col-md-6 col-6">
                    {" "}
                    <h6> Services</h6>
                  </div>
                  <div className="col-md-6 col-6 text-right">
                    {" "}
                    <h6>
                      {" "}
                      <i className="fas fa-chevron-down"></i>
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    {/* /////// software development  */}
                    <div
                      className="btn btn-dark w-100 text-left pt-2 mt-2"
                      onClick={() => test3()}
                      aria-controls="example-collapse-text1"
                      aria-expanded={open3}
                    >
                      <div className="row">
                        <div className="col-md-6 col-6">
                          {" "}
                          <h6>Software Development</h6>
                        </div>
                        <div className="col-md-6 col-6 text-right">
                          {" "}
                          <h6>
                            {" "}
                            <i className="fas fa-chevron-down"></i>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <Collapse in={open3}>
                      <div id="example-collapse-text1">
                        {softwareDevData.map((item, index) => (
                          <Link
                            className="text_dec_link"
                            href={item.link}
                            key={index}
                          >
                            <button
                              onClick={() => setNewnav(!newnav)}
                              className="btn btn-secondary mt-1 w-100 text-left"
                            >
                              {item.name}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </Collapse>
                    {servicesData.map((item, index) => (
                      <Link
                        className="text_dec_link"
                        href={item.url}
                        key={index}
                      >
                        <button  onClick={() => setNewnav(!newnav)} className="btn btn-dark mt-1 w-100 text-left">
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </Collapse>
              </div>

              {/* Three  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test()}
                aria-controls="example-collapse-text1"
                aria-expanded={open2}
              >
                <div className="row">
                  <div className="col-md-6 col-6">
                    {" "}
                    <h6> Solutions</h6>
                  </div>
                  <div className="col-md-6 col-6 text-right">
                    {" "}
                    <h6>
                      {" "}
                      <i className="fas fa-chevron-down"></i>
                    </h6>
                  </div>
                </div>
              </div>
              <Collapse in={open2}>
                <div id="example-collapse-text1">
                  {productsData.map((item, index) => (
                    <Link  onClick={() => setNewnav(!newnav)} className="text_dec_link" href={item.url} key={index}>
                      <button className="btn btn-dark mt-1 w-100 text-left">
                        {item.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </Collapse>

              {/* Three  */}
              {/* industries commented  */}
              {/* <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test4()}
                aria-controls="example-collapse-text1"
                aria-expanded={open4}
              >
                <div className="row">
                  <div className="col-md-6 col-6">
                    {" "}
                    <h6> Industries</h6>
                  </div>
                  <div className="col-md-6 col-6 text-right">
                    {" "}
                    <h6>
                      {" "}
                      <i className="fas fa-chevron-down"></i>
                    </h6>
                  </div>
                </div>
              </div>
              <Collapse in={open4}>
                <div id="example-collapse-text1">
                  {industryData.map((item, index) => (
                    <Link className="text_dec_link" href={item.url} key={index}>
                      <button className="btn btn-dark mt-1 w-100 text-left">
                        {item.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </Collapse> */}
              {/* Two  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test1()}
                aria-controls="example-collapse-text1"
                aria-expanded={open1}
              >
                <div className="row">
                  <div className="col-md-6 col-6">
                    {" "}
                    <h6> Case Studies</h6>
                  </div>
                  <div className="col-md-6 col-6 text-right">
                    {" "}
                    <h6>
                      {" "}
                      <i className="fas fa-chevron-down"></i>
                    </h6>
                  </div>
                </div>
              </div>
              <Collapse in={open1}>
                <div id="example-collapse-text1">
                  {caseStudyData.map((item, index) => (
                    <Link className="text_dec_link" href={item.url} key={index}>
                      {" "}
                      <button  onClick={() => setNewnav(!newnav)} className="btn btn-dark mt-1 w-100 text-left">
                        {item.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </Collapse>

              {/* four  */}

              <Link className="text_dec_link" href="/about-us">
                <div className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> About Us</h6>
                </div>
              </Link>

              <Link className="text_dec_link" href="/contact-us">
                <div className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> Contact Us</h6>
                </div>
              </Link>

              {/* <Link className="text_dec_link" href="/blog">
                <div className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> Media</h6>
                </div>
              </Link> */}

              <div className={styles.partnerDiv}>
                <p>OUR PARTNERS</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    src={microsoft}
                    alt="Microsoft"
                    style={{ width: "17vw", height: "4vw" }}
                  />
                  <Image
                    src={oracle}
                    alt="Microsoft"
                    style={{ width: "20vw", height: "4vw" }}
                  />
                  <Image
                    src={plexaar}
                    alt="Microsoft"
                    style={{ width: "17vw", height: "6vw" }}
                  />
                  <Image
                    src={expertApp}
                    alt="Microsoft"
                    style={{ width: "19vw", height: "5vw", marginTop: "1vw" }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // {/* mobile  */}
            <div className=" col-md-12 display_pc position_cc py-2">
              <div className="row ">
                <div className="col-md-4 col-4">
                  <Link href="/">
                    <img
                      className="img-fluid "
                      src="https://1864597015.rsc.cdn77.org/selteqreact/images/logom.png"
                    />
                  </Link>
                </div>
                <div className="col-md-8 col-8 text-right  ">
                  <button
                    className="btn btn-light btn_style_mobile"
                    onClick={() => setNewnav(!newnav)}
                  >
                    <i id="color_button" className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
