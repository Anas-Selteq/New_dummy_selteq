import { useRouter } from "next/router";
import styles from "../../styles/Casestudy.module.css"

function Casestudy({compdata}) {
    const router = useRouter();
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.findanexpert&hl=en_GB&gl=US")
    }
    const apple = () => {
        router.push("https://apps.apple.com/gb/app/expert-app/id1468090965")
    }

  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center p-0">
        <div className={styles.background_grad}>
            <h1 className={styles.text_white}>{compdata.section_one_heading}</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h6 className={styles.text_white_only}>{compdata.section_one_para}</h6>
                </div>
                <div className="col-md-3"></div>
            </div>
           
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
            <img className={styles.with_expert_img} src="https://1864597015.rsc.cdn77.org/selteqreact/images/expert.jpg"  />
        </div>



        
        <div className="col-md-12 p-0 mt-5">
            <div className="row">
                <div className="col-md-6 m-auto text-left">
                    <div className="col-md-12 pl-md-5 pb-5">
                    <h2 className="font_mob_head">{compdata.section_two_heading}</h2>
                    <h6 className={styles.all_app} >{compdata.section_two_para}</h6>
                  
                        {compdata.is_listing_problem === true ? 
                            <>
                                            <h2 className="mt-4 font_mob_head">{compdata.section_two_heading1}</h2>
                                        
                                            {compdata?.problem_list?.map((item,index) => {
                                                return(
                                                    <ul>
                                                    <h6><b>{item.head}</b></h6>
                                                    <h6>{item.para}</h6>
                                                    </ul>
                                                )
                                            })}
                                        
                                        
                                            </>
                        : 
                        <>
                                            <h2 className="mt-4 font_mob_head">{compdata.section_two_heading1}</h2>
                                            <h6 className={styles.all_app} >{compdata.section_two_para1}</h6>
                                            </>
                        }
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
                    <h2 className={styles.color_white1}>{compdata.section_three_heading}</h2>
                    {compdata.is_listing_solution === true ? <>
                        {compdata?.solution_list?.map((item,index) => {
                        return(
                            <ul style={{color:"white"}}>
                            <h6><b>{item.head}</b></h6>
                            <h6>{item.para}</h6>
                            </ul>
                        )
                    })}
                    </> :
                    <h6 className={styles.color_white_para}>{compdata.section_three_para}</h6>}
                      {compdata.is_listing_results === true ? <>
                        <h2 className={`pt-3 ${styles.color_white1}`}>{compdata.section_4_heading}</h2>
                        {compdata?.results_list?.map((item,index) => {
                        return(
                            <ul style={{color:"white"}}>
                            <h6><b>{item.head}</b></h6>
                            <h6>{item.para}</h6>
                            </ul>
                        )
                    })}
                      </>: null }

                    <div className="row mt-5">
                        <div className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/xpert.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div style={{cursor:"pointer"}} onClick={()=>google()} className="col-md-4 col-4">
                        <img  src="https://1864597015.rsc.cdn77.org/selteqreact/images/google.png" className="img-fluid img_width_girl"  />
                        </div>
                        <div style={{cursor:"pointer"}} onClick={()=>apple()} className="col-md-4 col-4">
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