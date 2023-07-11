import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'

function Expert() {
    const router = useRouter();
    const plexarr = () => {
        router.push(" /case-study-expert")
    }

    const livechat = () => {
        router.push("/live-chat-system")
    }
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.selteq.expertcrm&hl=en_GB&gl=US&pli=1")
    }
    const apple = () => {
        router.push("https://apps.apple.com/us/app/plexaar/id1576352135")
    }
    return (
        <>
            <Head>

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
                {/* font roboto  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
                {/* poppins  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='col-md-12 px-0 background_grad'>
                <p className='headexpert_app'>PLEXAAR</p>
                <p className='text_expert_paragraph px-3' >Selteq’s leading CRM solution enables businesses to manage their customer interaction & track business opportunities.</p>
                <div className='container px-5'>
                    <div className='row'>
                        <div className='col-md-4 col-4 text-center'>
                            <h2 className='mb-0 font_color_100'>100+</h2>
                            <p className=' text_below mt-0'>
                                Services
                            </p>
                        </div>
                        <div className='col-md-4 col-4 text-center'>
                            <h2 className='mb-0 font_color_100'>03</h2>
                            <p className=' text_below mt-0'>
                                Countries
                            </p>
                        </div>
                        <div className='col-md-4 col-4 text-center'>
                            <h2 className='mb-0 font_color_100'>100K+</h2>
                            <p className=' text_below mt-0'>
                                Satisfied&nbsp;Customers
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 px-4 text-center'>
                    <div className='col-md-12 video-container p-0'>
                        <video loop autoPlay muted controls className='video_main1'>
                            <source src='../video/new1.mp4' type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='col-md-12 custom_margintop'>
                <p className='padd_text'>Streamlining<br /> Complex Business<br /> Processes</p>
                <p className='para_text'>The Plexaar is a leading-edge CRM app created to revolutionize business processes. It’s a high-quality, fully automated system designed to get real work to businesses quickly and easily. It allows users to create a business profile, manage job schedules, maintain regular communication with clients, and implement customer feedback.</p>
            </div>
            <div className='col-md-12 text-center'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tabb.png' />
            </div>
            <div className='col-md-12 custom_margintop'>
                <p className='padd_text'>THE PROBLEM</p>
                <p className='para_text'>Businesses registered with Plexar had a number of projects coming from the Expert App that needed to be completed daily, but their employees were having trouble keeping track of the amount of time they spent on each task/job and were not transparent about their allotted time. As a result, it has made it difficult for them to prioritize critical projects without being able to see all projects within one system.</p>
            </div>
            <div className='backgrond_gray_exp_new'>
                <div className='col-md-12 background_sol_head pt-4'>
                    <p className='text_headd'>SOLUTION</p>
                    <p className='text_parara'>
                        Our solution was engineered for businesses to manage their workflow of daily tasks by creating a digital job calendar and assigning those tasks to their respective employees. The advantage that every worker can complete their day-to-day tasks, it helps the organizations to track everything in real time and communicate with the employees effectively. This leads to better productivity at all levels.
                    </p>
                    <div className='col-md-12 text-center'>
                        <img className='img-fluid marg_coutch_neg' src='https://1864597015.rsc.cdn77.org/selteqreact/images/coutch.png' />
                    </div>
                </div>
                <div className='col-md-12 mt-5'>
                    <div className='col-md-12 mt-5 text-center'>
                        <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/logoo.png' />
                    </div>
                    <div className='row pb-4'>
                        <div onClick={() => google()} className='col-md-6 col-6 text-center'>
                            <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/and.png' />
                        </div>
                        <div onClick={() => apple()} className='col-md-6 col-6 text-center'>
                            <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/app.png' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 pt-4'>
                <p className='headd_case'>
                    Case Studies
                </p>
                <p className='para_case'>
                    See examples of the bespoke software solutions,<b> CRM</b>, <b>LMS</b> and <b>mobile apps</b> we’ve created for our clients.
                </p>
            </div>
            <div className='col-md-12 text-center pt-4'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/expertt.png' />
                <p className='plexx mb-0'>EXPERT</p>
                <p className='para_text_light'>Expert is an on-demand service app that provides multitude of services bookable through one convenient interface</p>
                <button onClick={() => plexarr()} className='btn btn-danger danger_case mb-3'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
            <div className='col-md-12 text-center pt-4 pb-5'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/chat.png' />
                <p className='plexx mb-0'>Live Chat system</p>
                <p className='para_text_light'>A multi-purpose Chat System for customers & service providers</p>
                <button onClick={() => livechat()} className='btn btn-danger danger_case mb-5'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
        </>
    )
}

export default Expert