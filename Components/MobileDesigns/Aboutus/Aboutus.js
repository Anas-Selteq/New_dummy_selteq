import { useRouter } from 'next/router';
import React from 'react'
import Aboutspoke from './Aboutspoke'

function Aboutus() {
    const router = useRouter();
    const medical = () => {
        router.push("/healthcare-and-medical")
    }
    const banking = () => {
        router.push("/banking-and-finance")
    }
    const education = () => {
        router.push("/education")
    }
    const ecomm = () => {
        router.push("/e-commerce")
    }
    const erp = () => {
        router.push("/erp")
    }
    return (
        <>
            <div className='col-md-12 px-0 bg_img_aboutus text-center'>
                <p className='head_about'>About US</p>
                <p className='sub_head_about'>Selteq is an ultimate IT solutions and management provider aimed at helping organizations – irrespective of their size – embark on innovation to achieve competitiveness and profitability.</p>
            </div>
            <div className='col-md-12 pl-4'>
                <p className='text_head_about'>About Selteq</p>
                <p className='text_sub_para'>
                    Selteq, a next-generation software development and consultancy firm, operates in 4 countries with a global team. We're specialize in large-scale IT projects, pushing the boundaries of innovative software technologies to drive growth, productivity, and profitability. With a focus on digital transformation, Selteq brings together data and business insights, leveraging collective human wisdom to advance artificial intelligence.        </p>
            </div>
            <div className='col-md-12 px-0'>
                <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/rocketman.png' />
            </div>
            <div className='col-md-12 pl-4 pt-3'>
                <p className='text_sub_para'>
                As we move towards the greatest change in history, Selteq partners with clients to reinvent creation, offering digital solutions, consultancy, and outsourcing services that catapult businesses into the future.                </p>
            </div>
            <div className='col-md-12 background_grad_about px-4 pt-5 '>
                <p className='head_values'>Our Values to Live By</p>
                <p className='text_para_value'>Since its inception, Selteq is on a mission of creating a digitally connected world where apart from creating better businesses, we also create experiences that are equally rejoiced by the consumers.</p>
                <p className='text_para_value'>Since its inception, Selteq is on a mission of creating a digitally connected world where apart from creating better businesses, we also create experiences that are equally rejoiced by the consumers.</p>
                <div className='col-md-12 text-center '>
                    <img className='img-fluid neg_mar_val' src='https://1864597015.rsc.cdn77.org/selteqreact/images/sofagirl.png' />
                </div>
            </div>
            <div className='col-md-12 margin_top_para pl-4'>
                <p className='ires_para'>
                    Irrespective of the size of the company, we are always ready to give a digital makeover that helps us proceed further in making this world a better place.
                </p>
            </div>
            <div className='col-md-12 px-0'>
                <Aboutspoke />
            </div>
            <div className='col-md-12 pl-4 pt-5'>
                <p className='head_buss_about mb-1'>Business-Driven<br />
                    Software Solutions</p>
                <p className='headquater'>Selteq, headquartered in London, is an ultimate IT solutions provider aimed at helping organizations embark on innovation to achieve competitiveness. We focus on streamlining business processes via our cutting-edge technological reforms.</p>
            </div>
            <div className='col-md-12 px-0'>
                <div className='col-md-12 px-0 display_pc text-center'>

                    <div className='col-md-12 background_color_cards_ind mt-4'>
                        <div className='row'>
                            <div className='col-md-6 text-left col-8 m-auto pt-2'>
                                <p className='card_heading'>Healthcare & MedTech</p>
                            </div>
                            <div className='col-md-6 col-4 text-right'>
                                <img onClick={() => medical()} className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/button.png' />
                            </div>
                        </div>
                        <div className='col-md-12 text-left px-0'>
                            <p className='sub_text_card'>Streamlining patient care & improving outcomes through our cutting-edge MedTech and mHealth software development services. </p>
                        </div>
                    </div>
                    <div className='col-md-12 background_color_cards_ind1'>
                        <div className='row'>
                            <div className='col-md-6 text-left col-8 m-auto pt-2'>
                                <p className='card_heading'>FinTech</p>
                            </div>
                            <div className='col-md-6 col-4 text-right'>
                                <img onClick={() => banking()} className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/button.png' />
                            </div>
                        </div>
                        <div className='col-md-12 text-left px-0'>
                            <p className='sub_text_card'>Helping financial institutions, wealth management & banking companies transform their offerings with our custom software development. </p>
                        </div>
                    </div>
                    <div className='col-md-12 background_color_cards_ind'>
                        <div className='row'>
                            <div className='col-md-6 text-left col-8 m-auto pt-2'>
                                <p className='card_heading'>EdTech</p>
                            </div>
                            <div className='col-md-6 col-4 text-right'>
                                <img onClick={() => education()} className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/button.png' />
                            </div>
                        </div>
                        <div className='col-md-12 text-left px-0'>
                            <p className='sub_text_card'>We’re passionate about education & aim to unleash the power of digital learning through our bespoke, avant-garde LMS development. </p>
                        </div>
                    </div>
                    <div className='col-md-12 background_color_cards_ind1'>
                        <div className='row'>
                            <div className='col-md-6 text-left col-8 m-auto pt-2'>
                                <p className='card_heading'>Ecommerce</p>
                            </div>
                            <div className='col-md-6 col-4 text-right'>
                                <img onClick={() => ecomm()} className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/button.png' />
                            </div>
                        </div>
                        <div className='col-md-12 text-left px-0'>
                            <p className='sub_text_card'>Enjoy a seamless e-commerce experience that balances flexibility, scalability, & adaptability. Our solutions keep pace with evolving business needs & possibilities. </p>
                        </div>
                    </div>
                    <div className='col-md-12 background_color_cards_ind'>
                        <div className='row'>
                            <div className='col-md-6 text-left col-8 m-auto pt-2'>
                                <p className='card_heading'>ERP</p>
                            </div>
                            <div className='col-md-6 col-4 text-right'>
                                <img onClick={() => erp()} className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/mobimg/button.png' />
                            </div>
                        </div>
                        <div className='col-md-12 text-left px-0'>
                            <p className='sub_text_card'>ERP development services are designed to help you streamline & optimize your business processes by integrating all data and into a centralized system. </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutus