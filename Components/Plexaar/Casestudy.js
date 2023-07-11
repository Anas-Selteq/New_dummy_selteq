import Link from "next/link"
import { useRouter } from "next/router";
import styles from "../../styles/Casestudy.module.css"

function Casestudy() {

    const router = useRouter();
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.selteq.expertcrm&hl=en_GB&gl=US&pli=1")
    }
    const apple = () => {
        router.push("https://apps.apple.com/us/app/plexaar/id1576352135")
    }
  return (
    <div className="col-md-12 p-0">
        <div className="col-md-12 text-center p-0">
        <div className={styles.background_grad}>
            <h1 className={styles.text_white}>PLEXAAR</h1>
            <h6 className={styles.text_white_only}>Selteq’s leading CRM solution enables businesses to manage their customer interaction<br/> & track business opportunities.</h6>
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
            <img className={styles.with_expert_img} src="https://1864597015.rsc.cdn77.org/selteqreact/images/ple.png"  />
        </div>
        <div className="col-md-12 p-0 mt-5">
            <div className="row">
                <div className="col-md-6 text-left">
                    <div className="col-md-12 pl-md-5 pb-5">
                    <h2 className="font_mob_head">Streamlining<br/>Complex Business<br/>Processes</h2>
                    <h6 className={styles.all_app} >The Plexaar is a leading-edge CRM app created to revolutionize business processes. It’s a high-quality, fully automated system designed to get real work to businesses quickly and easily. It allows users to create a business profile, manage job schedules, maintain regular communication with clients, and implement customer feedback.</h6>
                    <h6 className={styles.all_app} >Customers can book service via the app and connect to an expert who will visit their desired location to do the job. The booking process is so seamless that it lets customers book any service they can think of with a few taps of an app.</h6>

                    <h2 className="mt-4 font_mob_head">THE PROBLEM</h2>
                    <h6 className={styles.all_app} >Businesses registered with Plexar had a number of projects coming from the Expert App that needed to be completed daily, but their employees were having trouble keeping track of the amount of time they spent on each task/job and were not transparent about their allotted time. As a result, it has made it difficult for them to prioritize critical projects without being able to see all projects within one system.</h6>
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
                    <h6 className={styles.color_white_para}>Our solution was engineered for businesses to manage their workflow of daily tasks by creating a digital job calendar and assigning those tasks to their respective employees. The advantage that every worker can complete their day-to-day tasks, it helps the organizations to track everything in real time and communicate with the employees effectively. This leads to better productivity at all levels.</h6>
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