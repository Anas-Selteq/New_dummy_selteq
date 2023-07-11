import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'

function Expert({compdata}) {
    const router = useRouter();
    const plexarr = () => {
        router.push(" /case-study-plexarr")
    }

    const livechat = () => {
        router.push("/live-chat-system")
    }
    const google = () => {
        router.push("https://play.google.com/store/apps/details?id=com.findanexpert&hl=en_GB&gl=US")
    }
    const apple = () => {
        router.push("https://apps.apple.com/gb/app/expert-app/id1468090965")
    }
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
                {/* font roboto  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
                {/* poppins  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='col-md-12 px-0 background_grad_about'>
                <p className='headexpert_app'>{compdata.section_one_heading}</p>
                <p className='text_expert_paragraph px-3' ><b>{compdata.section_one_para}</b></p>
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
                                Services
                            </p>
                        </div>
                        <div className='col-md-4 col-4 text-center'>
                            <h2 className='mb-0 font_color_100'>100K+</h2>
                            <p className=' text_below mt-0'>
                                Services
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 px-4 text-center'>
                    <div className='col-md-12 video-container1 p-0 '>
                        <video loop autoPlay muted controls className='video_main1 negative_vide'>
                            <source src='../video/new1.mp4' type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='col-md-12 custom_margintop'>
                <p className='padd_text'>{compdata.section_two_heading}</p>
                <p className='para_text'>{compdata.section_two_para}</p>
            </div>
            <div className='col-md-12 text-center'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tabb.png' />
            </div>
            <div className='col-md-12 custom_margintop'>
                <p className='padd_text'>{compdata.section_two_heading1}</p>
                {compdata.is_listing_problem === true ?
                <>
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
                <p className='para_text'>{compdata.section_two_para1}</p>
                }
            </div>
            <div className='backgrond_gray_exp_new'>
                <div className='col-md-12 background_sol_head pt-4'>
                    <p className='text_headd'>{compdata.section_three_heading}</p>
                    {compdata.is_listing_solution === true ? <>
                        {compdata?.solution_list?.map((item,index) => {
                        return(
                            <ul style={{color:"white"}}>
                            <h6><b>{item.head}</b></h6>
                            <h6>{item.para}</h6>
                            </ul>
                        )
                    })}
                     </>:
                    <p className='text_parara'>
                    {compdata.section_three_para}
                    </p>
                    }
                     {compdata.is_listing_results === true ? <>
                    <p className='text_headd'>{compdata.section_4_heading}</p>
                    {compdata?.results_list?.map((item,index) => {
                        return(
                            <ul style={{color:"white"}}>
                            <h6><b>{item.head}</b></h6>
                            <h6>{item.para}</h6>
                            </ul>
                        )
                    })}
                    </> : null }
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
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/lappp.png' />
                <p className='plexx mb-0'>PLEXAAR</p>
                <p className='para_text_light'>A high-end CRM system for businesses of all sizes.</p>
                <button onClick={() => plexarr()} className='btn btn-danger danger_case mb-3 animated_button_banner'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
            <div className='col-md-12 text-center pt-4 pb-5'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/chat.png' />
                <p className='plexx mb-0'>Live Chat system</p>
                <p className='para_text_light'>A multi-purpose Chat System for customers & service providers</p>
                <button onClick={() => livechat()} className='btn btn-danger danger_case mb-5 animated_button_banner'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
        </>
    )
}

export default Expert