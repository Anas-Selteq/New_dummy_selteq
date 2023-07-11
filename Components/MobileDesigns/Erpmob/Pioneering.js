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
                        <p className='heading_poineer'>Business Operations Made Easy!</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>Let’s automate your business operations with bespoke ERP solutions</p>
                    <p className='sub_text_paragraph mb-1'>
                        Are you running a business without an ERP system? Since data is the lifeblood of every modern company, ERP makes it easier to collect, organize, analyse, and distribute this information to every individual and system that needs it to best achieve their role and responsibility.</p>
                    <p className='sub_text_paragraph'>
                        Choosing the best system from such a wide range available on the market isn’t easy. Selteq ERP developers will make it easy for you to develop the most efficient ERP solution that can resolve all your business problems and give you full control over business operations.
                    </p>
                </div>
                <div className='col-md-12 px-0 text-left'>
                    <p className='heading_poineer'>Say hello to smart software built to enhance your productivity</p>
                    <p className='text_health_head mb-1 '>Payroll</p>
                    <p>We can also customize our custom payroll software solution to fit an organization’s needs. Whether looking for a simple end-of-year tax report or advanced approval workflow, we have the expertise to build a customized automated payroll software.</p>
                    <p className='text_health_head mb-1 '>Attendance System</p>
                    <p>Time attendance software is a great way to save money and increase efficiency. By installing accurate time clock software, you can better manage your payroll, budget, and labor estimations. Using the best time tracking software, you can monitor your employees’ punches with accuracy. This means you can more accurately estimate how much money you’re spending, saving, and making on certain projects. </p>
                    <p className='text_health_head mb-1 '>Inventory management System</p>
                    <p>Offering order tracking, invoicing and reporting for medium and large-sized companies across multiple locations – including production. Start tracking stock levels, cost, inventory value over time.</p>
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