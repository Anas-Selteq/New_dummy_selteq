import React from 'react';
import styles from "../../styles/Landing.module.css"


const OurPartners = () => {
    return (
        <>
            <div className='container display_h partner_main mb-b py-5'>
                <h1 data-aos="zoom-in" className={`${styles.landing_create} text-center`}>Our Partners</h1>
                <div className={`row partner_section pt-2`}>
                    <div className="col partner_img_sec" >
                        <img src="/Assets/Images/microsoft.png" className="img-fluid" alt="Image 1" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/oracle.png" className="img-fluid" alt="Image 2" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/expert1.png" className="img-fluid" alt="Image 3" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/plexaar.png" className="img-fluid" alt="Image 4" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/expert2.png" className="img-fluid" alt="Image 5" />
                    </div>
                </div>
            </div>

            <div className='container display_pc partner_main mb-5 pb-4'>
                <h4 className='p_tag_ind' >Our Partners</h4>
                <div className="row partner_section pt-2">
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/microsoft.png" className="img-fluid" alt="Image 1" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/oracle.png" className="img-fluid" alt="Image 2" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/expert1.png" className="img-fluid" alt="Image 3" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/plexaar.png" className="img-fluid" alt="Image 4" />
                    </div>
                    <div className="col partner_img_sec">
                        <img src="/Assets/Images/expert2.png" className="img-fluid" alt="Image 5" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPartners