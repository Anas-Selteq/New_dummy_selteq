import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Pioneering({heading}) {
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }
    const [tabs, setTabs] = useState([]);
    useEffect(() => {
        setTabs(heading?.second_section)
        // console.log(heading?.second_section)
      }, [])
    return (
        <>
            <div className='container background_color_pioneer pt-3'>
                <div className='row'>
                    <div className='col-md-6 col-7 m-auto'>
                        <p className='heading_poineer'>{heading.heading}</p>
                    </div>
                    <div className='col-md-6 col-5 px-0'>
                        <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/tab1.png' />
                    </div>
                </div>
                <div className='col-md-12 px-0'>
                    <p className='sub_head_poineer'>{heading?.sub_heading}</p>
                    <p className='sub_text_paragraph mb-1'>
                    {heading?.sub_head_paagraph}</p>
                </div>
                <div className='col-md-12 px-0 pt-3 text-left'>
                    <p className='heading_poineer'>{heading?.second_section_heading}</p>
                    {heading?.second_section?.map((item, index) => {
                        return (
                            <div key={index}>
                            <p className='text_health_head mb-1'>{item.heading}</p>
                            <p>
                            {item.paragraph}
                            </p>
                            </div>
                        );
                        })}
                  
                  
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