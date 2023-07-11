import { useEffect, useState } from 'react'
import styles from '../../styles/steps.module.css'
import Collapse from 'react-bootstrap/Collapse'

function Steps({heading}) {
  const [opentwo, setOpentwo] = useState(true)
  const [open, setOpen] = useState(true)
  const [one1, setOne1] = useState(true)

  console.log("<><>><><",heading)

  const [tabs, setTabs] = useState([]);

  // useEffect(() => {
  //   setTabs(heading?.second_section)
  //   console.log(heading?.second_section)
  // }, [])

  useEffect(() => {
    if (heading?.second_section) {
      setTabs(heading.second_section);
      console.log(heading.second_section);
    }
  }, [heading]);

  if (!tabs || tabs.length === 0) {
    return <div>Loading...</div>; // Display a loading state
  }
  
  
  const handleTabClick = (id) => {
    setTabs(prevTabs => {
      return prevTabs.map(tab => {
        if (tab.id === id) {
          return { ...tab, open: true };
        } else {
          return { ...tab, open: false };
        }
      });
    });
  };
  // console.log("::::::::::::::",tabs)
  


  return (
    <div className="col-md-12 p-0" style={{ backgroundColor: 'white' }}>
      <div className="col-md-12 p-0 display_h">
        <div className={styles.digital_background}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 m-auto px-5 ">
                <div className="col-md-12 text-center pt-5 pb-5">
                  <h6 className={styles.text_gray}>
                    {heading?.second_section_heading}
                  </h6>
                  <h5>
                  {heading?.second_section_paragraph}
                  </h5>
                </div>
                <div className={styles.border_left_red} >
                 
                  {/* <div className="col-md-12 pt-4">
                    <div className="row">
                      {opentwo ? (
                        <div className="row">
                          <div className="col-md-1 col-1  margin_left_icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-10 col-11 "
                            onClick={() => setOpentwo(!opentwo)}
                          >
                            <h5 className={styles.head}>UX & UI Design</h5>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-1 col-1 margin_left_icon1">
                            <i class="fas fa-circle"></i>
                          </div>
                          <div
                            className="col-md-11 col-11 px-2"
                            onClick={() => setOpentwo(!opentwo)}
                          >
                            <h5 className={styles.head_active}>
                              UX & UI Design
                            </h5>
                            <p className="font_pa">
                              Your customers will get a better overall
                              experience that will increase the chances of
                              making a purchase. UX and UI designers at Selteq
                              follow best practices based on proven research,
                              which has been gathered from hundreds of eCommerce
                              sites, to make sure your website or app is
                              optimized for conversion.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>    */}
                  {tabs ? 
                  <>
                  {tabs?.map(tab => (
                          <div className="row pt-4" key={tab.id}>
                            <div className={`col-md-1 col-1 ${tab.open ? 'margin_left_icon1' : ' margin_left_icon'}`}>
                              <i className="fas fa-circle"></i>
                            </div>
                            <div className={`col-md-10 col-11 ${tab.open ? '' : 'px-2'}`} onClick={() => handleTabClick(tab.id)}>
                              <h5 className={tab.open ? styles.head_active : styles.head}>
                                {tab.heading}
                              </h5>
                              {tab.open && (
                                <p className="font_pa">
                                  {tab.paragraph}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}</>
                        : <>loading</> }
              
                </div>
              
              </div>
              <div className="col-md-6 background_person text-center">
                <img
                  src="https://1864597015.rsc.cdn77.org/selteqreact/images/person.png"
                  className="img-fluid img_steps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 px-4 pt-4 display_pc text-center  pb-5">
        {/* <h6 className="pt-4 font_weight_digital"><b>PROMISING DIGITAL GROWTH</b></h6> */}
        <div className="row pt-2">
          <div className="col-md-6 col-6 m-auto  text-left">
            <h5>
              {' '}
              <span className="why_choose">WHY CHOOSE </span>
              <br /> <b className="why_selteq">Selteq</b> <br />
              <span className="why_choose"> FOR YOUR</span> <br />
              <span className="why_choose"> SOFTWARE NEEDS?</span>
            </h5>
          </div>
          <div className="col-md-6 col-6">
            <img
              src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-12 p-0 text-left">
          {/* Tab one  */}
          {one1 ? (
            <div className="col-md-12 p-0">
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="col-md-12 background_collapse_div1  px-4 pt-3 pb-3"
              >
                <h5>FLEXIBLE DEVELOPMENT METHODOLOGIES</h5>
                <Collapse in={open}>
                  <p className="coll_font_size_set mb-0">
                    We offer various development processes (Waterfall, Agile or
                    Hybrid methodologies) that you can select based on your own
                    needs.
                  </p>
                </Collapse>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div2  px-4 pt-3 pb-3"
              >
                {/* <h5 className="text_other pt-2">PROVEN EXPERTISE IN MULTIPLE TECHNOLOGIES</h5> */}
                <h5 className="mt-1">
                  PROVEN EXPERTISE IN MULTIPLE TECHNOLOGIES
                </h5>
                <p className="coll_font_size_set mb-0">
                  We offer various development processes (Waterfall, Agile or
                  Hybrid methodologies) that you can select based on your own
                  needs.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div3  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">SOFTWARE ARCHITECTS & CONSULTANTS</h5>
                {/* <h5 className="text_other pt-2"></h5> */}
                <p className="coll_font_size_set mb-0">
                  Whether you need a preliminary technical design, a feasibility
                  study, high-level architecture, or a technology selection
                  process, the Selteq team provides comprehensive consulting
                  services to meet your requirements.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div4  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">CREATE A WINNING TEAM</h5>
                {/* <h5 className="text_other pt-2">CREATE A WINNING TEAM</h5> */}
                <p className="coll_font_size_set mb-0">
                  From a dedicated, solution-oriented development team to
                  talented technologists and QA teams that ensure your project
                  runs smoothly, we bring together the best people to provide
                  solutions that keep you ahead of your competition.
                </p>
              </div>
              <div
                aria-controls="example-collapse-text"
                className="col-md-12 background_collapse_div5  px-4 pt-3 pb-3"
              >
                <h5 className="mt-1">Customer-Tailored Solutions</h5>
                {/* <h5 className="text_other pt-2">CUSTOMER-TAILORED SOLUTIONS</h5> */}
                <p className="coll_font_size_set mb-0">
                  Our software solutions are customer-specific. We listen to
                  your needs, we understand the challenges you face, and we’ll
                  adapt ourselves to your processes and culture9
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Steps
