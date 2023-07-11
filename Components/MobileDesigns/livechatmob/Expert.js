import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Expert() {
    const [count, setCount] = useState(0);
    const [isServiceCount, setIsServiceCount] = useState(false);

    const router = useRouter();
    const plexarr = () => {
        router.push(" /case-study-expert")
    }

    const livechat = () => {
        router.push("/live-chat-system")
    }

    // useEffect(() => {
    //     if (isServiceCount) {
    //         for (let i = 0; i <= 100; i++) {
    //             if (count < 101) {
    //                 setInterval(() => {
    //                     setCount(count => count + 1)
    //                 }, 100)
    //             }
    //         }
    //     }
    // }, [isServiceCount])

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
            <div className='col-md-12 px-0 background_grad_mobile'>
                <p className='headexpert_app'>LIVE CHAT SYSTEM</p>
                <p className='text_expert_paragraph px-3' >A multi-purpose Chat System to assist customers & service providers with real-time communication and deliver quick, personalized experiences.</p>
                <div className='container px-5 pb-3'>
                    <div className='row'>
                        <div className='col-md-4 col-4 text-center' onMouseOver={() => setIsServiceCount(true)}>
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

                {/* <div className='col-md-12 px-4 text-center'>
                    <div className='col-md-12 video-container p-0'>
                        <video loop autoPlay muted controls className='video_main1'>
                            <source src='../video/new1.mp4' type="video/mp4" />
                        </video>

                    </div>
                </div> */}

            </div>
            <div className='col-md-12'>

                <div className='col-md-12 p-0 text-center'>
                    <div className='col-md-12 video-container p-0'>
                        <video loop autoPlay muted controls className='video_main1'>
                            <source src='../video/new1.mp4' type="video/mp4" />
                        </video>

                    </div>
                </div>

                <p className='padd_text'>24/7 Support to<br /> Spruce Up<br />     Satisfaction</p>
                <p className='para_text'>The primary purpose of the Live Chat Tool is to manage multiple requests, at a time, with no backlog and wait time. It helps to engage, qualify, convert and resolve matters for all stakeholders in real-time. Apart from seamless interaction, this high-quality support system records customers’ inquiries, solutions provided, the number of queries entertained in a certain timeframe, and the feedback received from the other end.</p>
            </div>
            <div className='col-md-12 text-center'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tabb.png' />
            </div>
            <div className='col-md-12'>
                <p className='padd_text'>THE PROBLEM</p>
                <p className='para_text'>Before the integration of this 24/7, Live Communication Portal, many of our customers were facing difficulty getting in touch with our team. In case of any problem, delay, or lack of quality provided, most of them were clueless about where to contact/complain and how to resolve their problems. The same goes for our service providers who couldn’t contact us in case of any query or confusion. The end result was dissatisfied clients and infuriated professionals.</p>
            </div>
            <div className='backgrond_gray_exp_new'>
                <div className='col-md-12 background_sol_head pt-4'>
                    <p className='text_headd'>SOLUTION</p>
                    <p className='text_parara'>
                        The main aim of this Live Chat System was to create harmony in our system and provide personalized communication to everyone – be it the customers or service providers working for us. Now that we have this system up and working, our customer care executives are managing 100s of customer requests simultaneously, interacting with them, answering their questions, guiding them properly, boosting sales, enhancing marketing, and empowering the brand.
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
                        <div className='col-md-6 col-6 text-center'>
                            <img className='img-fluid mt-4' src='https://1864597015.rsc.cdn77.org/selteqreact/images/and.png' />
                        </div>
                        <div className='col-md-6 col-6 text-center'>
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
                <p className='para_text_light'>A high-end CRM system for businesses of all sizes.</p>
                <button onClick={() => plexarr()} className='btn animated_button_banner pt-0 py-2 danger_case mb-3'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
            <div className='col-md-12 text-center pt-4 pb-5'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/chat.png' />
                <p className='plexx mb-0'>Live Chat system</p>
                <p className='para_text_light'>A multi-purpose Chat System for customers & service providers</p>
                <button onClick={() => livechat()} className='btn animated_button_banner  pt-0 py-2 danger_case mb-5'>
                    <span class="button-text">CASE STUDY</span>
                    <span class="animation-layer"></span>
                </button>
            </div>

        </>

    )
}

export default Expert