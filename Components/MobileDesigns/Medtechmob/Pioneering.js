import { useRouter } from 'next/router';
import React from 'react'

function Pioneering() {
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }
    return (
        <>
            <div className='container background_color_pioneer pt-3'>
                <div className='row'>
                    <div className='col-md-6 col-7 m-auto'>
                        <p className='heading_poineer'>Pioneering Safe Healthcare</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>Raising the standards of<br /> medical software implementations</p>
                    <p className='sub_text_paragraph mb-1'>
                        Bringing together technologies and expertise that make a difference – at Selteq, we know the future is now. Innovation trumps standard processes when it comes to the healthcare technology arena.</p>
                    <p className='sub_text_paragraph'>
                        We’ve been raising the standards of medical software implementations for a long time. Whether you’re a hospital or physician, if you’re looking for custom software to manage your day-to-day operations, or need a follow-up solution to manage your patients, we’re your go-to partner.
                    </p>
                </div>
                <div className='col-md-12 px-0 text-left'>
                    <p className='heading_poineer'>Enjoy the benefits of centralized Healthcare management system.</p>
                    <p className='text_health_head mb-1 '>Healthcare management</p>
                    <p>Providing Cloud solutions that can help your business to scale & grow while keeping your data secure & accessible.</p>
                    <p className='text_health_head mb-1 '>Electronic Medical Record</p>
                    <p>Selteq provides an EMR & Practice Management (PM) solution, geared to provide value-added solutions for healthcare organizations. </p>
                    <p className='text_health_head mb-1 '>Scheduling System</p>
                    <p>Helping connect devices & systems to the internet, allowing you to collect and analyze data in real-time.</p>
                </div>
                <div className='col-md-12 img_set_pos'>
                    <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/newdoc.png' />
                </div>

            </div>
            <div className='col-md-12 margin_top_poineer'>
                <button onClick={() => contact()} className='btn btn-danger w-100 background_color_red_new py-2 px-4 animated_button_banner'>
                    <span class="button-text">BOOK CONSULTATION</span>
                    <span class="animation-layer"></span>
                </button>
            </div>
        </>
    )
}

export default Pioneering