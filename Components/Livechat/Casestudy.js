import styles from "../../styles/Casestudy.module.css"

function Casestudy() {
  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center p-0">
        <div className={styles.background_grad}>
            <h1 className={styles.text_white}>LIVE CHAT SYSTEM</h1>
            <h6 className={styles.text_white_only}>A multi-purpose Chat System to assist customers & service providers with real-time <br/> communication and deliver quick, personalized experiences.</h6>
            <div className="container container_padding mt-4"> 
            <div className="row" >
            <div className="col-md-4 col-4 text-center py-3">
                <h2 className={styles.font_white}>100+</h2>
                <h6 className={styles.font_white}>Services</h6>
            </div>
            <div className="col-md-4 col-4 text-center py-3 border_case_study">
                <h2 className={styles.font_white}> 03 </h2>
                <h6 className={styles.font_white}>Countries</h6>
            </div>
            <div className="col-md-4 col-4 text-center py-3">
                <h2 className={styles.font_white}>100K+</h2>
                <h6 className={styles.font_white}>Satisfied Customers</h6>
            </div>
         </div>
        </div>
        </div>
        <div className="container">
            <img className={styles.with_expert_img} src="https://1864597015.rsc.cdn77.org/selteqreact/images/li.jpg"  />
        </div>
        <div className="col-md-12 p-0 mt-5">
            <div className="row">
                <div className="col-md-6 text-left">
                    <div className="col-md-12 pl-md-5 pb-5">
                    <h2 className="font_mob_head">24/7 Support to Spruce Up Satisfaction</h2>
                    <h6 className={styles.all_app} >The primary purpose of the Live Chat Tool is to manage multiple requests, at a time, with no backlog and wait time. It helps to engage, qualify, convert and resolve matters for all stakeholders in real-time. Apart from seamless interaction, this high-quality support system records customers’ inquiries, solutions provided, the number of queries entertained in a certain timeframe, and the feedback received from the other end.</h6>

                    <h2 className="mt-4 font_mob_head">THE PROBLEM</h2>
                    <h6 className={styles.all_app_one} >Before the integration of this 24/7, Live Communication Portal, many of our customers were facing difficulty getting in touch with our team. In case of any problem, delay, or lack of quality provided, most of them were clueless about where to contact/complain and how to resolve their problems. The same goes for our service providers who couldn’t contact us in case of any query or confusion. The end result was dissatisfied clients and infuriated professionals.</h6>
                    </div>
                </div>
                <div className="col-md-6 background_case_study">
                <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/laptop.png"  />
                </div>
            </div>
        </div>
        <div className="col-md-12 p-0 mt-5">
            <div className={styles.background_grad_sec2}>
                <div className="container pb-5">
                    <div className="row">
                    <div className="col-md-6 text-left padding_t_casestudy" >
                        <div className="col-md-12 ">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape.png" className="img-fluid img_animate"  />
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/shape1.png" className="img-fluid img_animate1"  />
                        </div>
                    <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/sit.png" className="img-fluid img_width_girl"  />
                    
                    </div>
                    <div className="col-md-6 text_for_mob_expert text-left m-auto" >
                    <h2 className={styles.color_white1}>SOLUTION</h2>
                    <h6 className={styles.color_white_para}>The main aim of this Live Chat System was to create harmony in our system and provide personalized communication to everyone – be it the customers or service providers working for us. Now that we have this system up and working, our customer care executives are managing 100s of customer requests simultaneously, interacting with them, answering their questions, guiding them properly, boosting sales, enhancing marketing, and empowering the brand.</h6>
                    <div className="row mt-5">
                        <div className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/xpert.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/google.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/apple.png" className="img-fluid img_width_girl"  />
                        </div>
                    </div>
                     </div>
                     </div>
                </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Casestudy