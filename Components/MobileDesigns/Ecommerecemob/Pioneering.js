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
                        <p className='heading_poineer'>Feature-Rich Software</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>Developing data-driven and fully responsive ecommerce systems</p>
                    <p className='sub_text_paragraph mb-1'>
                        We build ecommerce platform dedicated to your needs or customize an existing solution to help scale your business. Ecommerce solutions powered by Selteq can be optimized for flexibility, scalability, long term adaptability, reliability and security while keeping pace with the evolving needs and possibilities for online businesses.</p>
                    <p className='sub_text_paragraph'>
                        Sell more with an industry-leading suite of professional ecommerce apps.
                    </p>
                </div>
                <div className='col-md-12 px-0 text-left'>
                    <p className='heading_poineer'>Help you to turn more of your visitors
                        into paying customers</p>
                    <p className='text_health_head mb-1 '>Systems Integration</p>
                    <p>We are specialized in eCommerce systems development and integration. We have extensive experience developing CRM, ERP, PIM, marketing automation, inventory management, accounting packages and third-party systems integration.</p>
                    <p className='text_health_head mb-1 '>UX & UI Design</p>
                    <p>Your customers will get a better overall experience that will increase the chances of making a purchase. UX and UI designers at Selteq follow best practices based on proven research, which has been gathered from hundreds of eCommerce sites, to make sure your website or app is optimized for conversion. </p>
                    <p className='text_health_head mb-1 '>Ecommerce Application Development</p>
                    <p>Selteq is skilled in ecommerce software development. We provide complete lifecycle services, including software testing and architecture design. Our customers can rely on us for top quality solutions that will increase their revenue.</p>
                    <p className='text_health_head mb-1 '>Intuitive Product Management</p>
                    <p>Combining a deep understanding of eCommerce industry practices and trends with thoughtful creativity, we design your eCommerce website and application to match enduring business goals.</p>
                    <p className='text_health_head mb-1 '>Custom Shopping Carts & Checkout</p>
                    <p>Customers love to shop. To that end, it becomes your pleasure to enhance your customer’s shopping experience by implementing a customized shopping cart and checkout. Contact Selteq today for a system that makes the customer purchasing experience a piece of cake!</p>
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