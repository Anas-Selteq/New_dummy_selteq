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
                        <p className='heading_poineer'>Core Banking Software</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>Focusing on Simplifying Corporate Banking
                        and Financial Operations</p>
                    <p className='sub_text_paragraph mb-1'>
                        We help financial institutions, wealth management and banking companies transform their offerings with custom software development services for their customers’ emerging needs, enrich the security of end-products, speed up time to market, find valuable business insights and compete by means of technology.</p>
                    <p className='sub_text_paragraph'>
                        We jump into your organization’s structure and look over your internal processes to develop a fully-fledged and scalable solution that addresses both your business and financial needs.
                    </p>
                </div>
                <div className='col-md-12 px-0 text-left'>
                    <p className='heading_poineer'>Our solutions support a number of core
                        banking & finance activities:</p>
                    <p className='text_health_head mb-1 '> Money Transfer Solutions</p>
                    <p>Money transfer businesses require a highly customized solution to take care of an increasingly digitalized business requirements. Our Money Transfer Software automates every aspect of your money transfer business so that you can expand your services to a local or global audience and meet the most stringent regulatory requirements.</p>
                    <p className='text_health_head mb-1 '>Bill Payments</p>
                    <p>The best custom software development company is not the one that just knows how to construct the right system but the one that will work with you, your team and your stakeholders through every step of the development process. The billing software development experts at Selteq play the same role in developing custom applications for clients.</p>
                    <p className='text_health_head mb-1 '>Mobile Topups</p>
                    <p>Providing a competitively costed and electronically devised Mobile Recharge Application for prepaid & postpaid mobile businesses. Our customized Mobile Recharge Software is engineered to track the records of your customers and any other related party, giving them easy access to recharge their mobile connections more conveniently.</p>
                    <p className='text_health_head mb-1 '>E-Ticketing</p>
                    <p>We are your ultimate e-ticketing partner. Providing premium technology that lets you sell tickets quickly and easily, manage and sell memberships and set up a platform suitable for all needs. Our core technology means your tickets will accessible anywhere in the time zone.</p>
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