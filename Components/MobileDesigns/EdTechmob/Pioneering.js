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
                        <p className='heading_poineer'>Fun-Filled Digital Learning</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>We build high-end software to ease the learning process</p>
                    <p className='sub_text_paragraph mb-1'>
                        At Selteq, we are passionate about education and aim to unleash the power of digital learning – empowering educators to manage their classrooms from anywhere. We have the right skills, expertise, and experience to help educators better engage students using leading-edge technology.</p>
                    <p className='sub_text_paragraph'>
                        Selteq’s e-learning mobile apps, cloud-based educational platforms, learning management solutions, knowledge portals & web content development services are all infused with best-in-class pedagogy and industry best practices.
                    </p>
                </div>
                <div className='col-md-12 px-0 text-left'>
                    <p className='heading_poineer'>It’s not just software, it is a modern learning environment</p>
                    <p className='text_health_head mb-1 '>Learning Management System</p>
                    <p>We provide enterprise LMS (Learning Management System) development services to create or improve your corporate learning process. We specialize in developing corporate learning or e-learning systems that include gamification, speech processing, live communication, monetization, webinar support, file Import/Export, Self-registration/enrolment, educational games, drag-and-drop questions and many more.</p>
                    <p className='text_health_head mb-1 '>Student Management Portal</p>
                    <p>Offering a student management solution designed to help educational institutions manage and streamline administrative processes and improve efficiency with learning modules. Your teachers can record student details, grades and attendance in a centralized database, track student progress on academic reports and communicate with parents via secure messaging and. Schools can choose the level of integration with third-party learning management systems and choose the level of automation of their workflow processes.</p>
                    <p className='text_health_head mb-1 '>Online classes</p>
                    <p>With an aim to deliver learning to the next generation, we create educational apps, online classes, and courses, and other education software. We got our passion for technology from the vision of our founders. They had an idea about using technology to make education available to everyone regardless of their locations and conditions.</p>
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