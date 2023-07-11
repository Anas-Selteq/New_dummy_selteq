import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Digital() {
    const [openone, setOpenone] = useState(false)
    const [opentwo, setOpentwo] = useState(true)
    const [openthree, setOpenthree] = useState(true)
    const [openfour, setOpenfour] = useState(true)
    const [openfive, setOpenfive] = useState(true)
    const [opensix, setOpensix] = useState(true)
    const [openseven, setOpenseven] = useState(true)
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false);
    const [one1, setOne1] = useState(true);
    const [one2, setOne2] = useState(false);

    return (
        <div className="col-md-12 p-0" style={{ backgroundColor: "white" }}>
            <div className="col-md-12 p-0 display_h">
                <div className="col-md-12 text-center py-5 ">
                    <h3><b>Industry Expertise</b></h3>
                    <h6><b>BPO services that propel your business forward</b></h6>
                </div>
                <div className={styles.digital_background}>
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-8  pt-3 pb-5 mb-5">

                                <div className={styles.border_left_red} >
                                    {/* Tabs */}
                                    <div className="col-md-12">
                                        <div className="row">

                                            {openone ? (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-10 col-11" onClick={() => setOpenone(!openone)} >
                                                        <h5 className={styles.head} >
                                                            Technology and Infrastructure
                                                        </h5>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon1">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-11 col-11 px-2" onClick={() => setOpenone(!openone)}>
                                                        <h5 className={styles.head_active}>
                                                            Technology and Infrastructure
                                                        </h5>
                                                        <p className="font_pa">
                                                            Utilizing cutting-edge technologies, including AI-powered chatbots, robotic process automation (RPA), cloud-based solutions, and data analytics tools, we streamline BPO operations for maximum efficiency and effectiveness
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <div className="col-md-12 pt-4">
                                        <div className="row">

                                            {opentwo ? (
                                                <div className="row">
                                                    <div className="col-md-1 col-1  margin_left_icon">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-10 col-11  " onClick={() => setOpentwo(!opentwo)}>
                                                        <h5 className={styles.head} >
                                                            Healthcare BPO
                                                        </h5>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon1">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-11 col-11 px-2" onClick={() => setOpentwo(!opentwo)}>
                                                        <h5 className={styles.head_active}>
                                                            Healthcare BPO
                                                        </h5>
                                                        <p className="font_pa">Our specialized BPO solutions cater to the unique needs of the healthcare industry. We offer medical billing, coding, claims processing, healthcare data management, and telemedicine support.

                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <div className="col-md-12 pt-4">
                                        <div className="row">

                                            {openthree ? (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-10 col-11" onClick={() => setOpenthree(!openthree)}>
                                                        <h5 className={styles.head} >
                                                            E-commerce
                                                        </h5>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row" >
                                                    <div className="col-md-1 col-1 margin_left_icon1">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-11 col-11 px-2" onClick={() => setOpenthree(!openthree)}>
                                                        <h5 className={styles.head_active}>
                                                            E-commerce
                                                        </h5>
                                                        <p className="font_pa">
                                                            Our BPO services provide comprehensive support for e-commerce businesses. We assist with order processing, inventory management, product catalog management, customer support, and efficient fulfillment services.

                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <div className="col-md-12 pt-4">
                                        <div className="row">

                                            {openfour ? (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-10 col-11 " onClick={() => setOpenfour(!openfour)}>
                                                        <h5 className={styles.head} >
                                                            Legal Process Outsourcing
                                                        </h5>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon1">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-11 col-11 px-2" onClick={() => setOpenfour(!openfour)}>
                                                        <h5 className={styles.head_active}>
                                                            Legal Process Outsourcing
                                                        </h5>
                                                        <p className="font_pa">We have expertise in delivering BPO services to the legal sector. Our services include legal research, document review, contract management, intellectual property support, and litigation support.

                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <div className="col-md-12 pt-4">
                                        <div className="row">

                                            {openfive ? (


                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-10 col-11 " onClick={() => setOpenfive(!openfive)} >
                                                        <h5 className={styles.head} >
                                                            Regulatory Compliance
                                                        </h5>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-md-1 col-1 margin_left_icon1">
                                                        <i class="fas fa-circle"></i>
                                                    </div>
                                                    <div className="col-md-11 col-11 px-2" onClick={() => setOpenfive(!openfive)}>
                                                        <h5 className={styles.head_active}>
                                                            Regulatory Compliance</h5>
                                                        <p className="font_pa">We prioritize adherence to industry regulations, data privacy laws, and compliance standards. Our BPO services ensure data protection, confidentiality, and legal compliance, providing peace of mind for our clients.

                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    {/* <div className="col-md-12 pt-4">
                <div className="row">
                    
                    {opensix ? (
                     

                    <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-10 col-11 " onClick={()=>setOpensix(!opensix)} >
                    <h5 className={styles.head} >
                    Node JS

                    </h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                                 <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpensix(!opensix)}>
                        <h5 className={styles.head_active}>
                        Node JS
</h5>
                        <p className="font_pa">If you need Node.js web application development, our team of experienced and qualified developers can get your project rolling in no time.



</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div> */}
                                    {/* Tabs */}
                                    {/* <div className="col-md-12 pt-4">
                <div className="row">
                    
                    {openseven ? (
                     

                    <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-10 col-11 " onClick={()=>setOpenseven(!openseven)} >
                    <h5 className={styles.head} >
                    CORE Python
                    </h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                                 <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpenseven(!openseven)}>
                        <h5 className={styles.head_active}>
                        Python</h5>
                        <p className="font_pa">We develop applications with Python, an interpreted and general-purpose programming language. We deliver an attractive and effective web app with security and stability.



</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div> */}

                                </div>
                            </div>
                            <div className="col-md-4 text-center" >
                                <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/person.png" className="img-fluid ig_sec_width" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-12 px-4 pt-4 display_pc text-center  pb-5">
                <h6 className="pt-4 font_weight_digital"><b>PROMISING DIGITAL GROWTH</b></h6>
                <div className="row pt-2">
                    <div className="col-md-6 col-6 m-auto  text-left">
                        <h4x>
                            <span className="why_choose">WHY CHOOSE </span><br /> <b className="why_selteq">Selteq</b> <br /><span className="why_choose"> FOR YOUR</span> <br /><span className="why_choose"> SOFTWARE NEEDS?</span>
                            Full Suite of Web Development Services
                        </h4x>
                    </div>
                    <div className="col-md-6 col-6">
                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-12 p-0 text-left">

                    {one1 ? (
                        <div className="col-md-12 p-0">
                            <div
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                className="col-md-12 background_collapse_div1  px-4 pt-3 pb-3"
                            >
                                <h5>Front-end Web Development</h5>
                                <Collapse in={open}>
                                    <p className="coll_font_size_set mb-0">
                                        We’re passionate about making websites intuitive, leveraging the latest HTML5, CSS3, Javascript, etc.
                                    </p>
                                </Collapse>
                            </div>
                            <div
                                aria-controls="example-collapse-text"
                                className="col-md-12 background_collapse_div2  px-4 pt-3 pb-3"
                            >
                                <h5 className="text_other pt-2">PROVEN EXPERTISE IN MULTIPLE TECHNOLOGIES</h5>
                                <h5 className="mt-1">Custom Web Development</h5>
                                <p className="coll_font_size_set mb-0">
                                    Using front-end & back-end technologies, frameworks & platforms. Building from scratch or improve an existing one.
                                </p>
                            </div>


                        </div>
                    ) : (null)}




                </div>
            </div> */}
        </div>
    )
}

export default Digital