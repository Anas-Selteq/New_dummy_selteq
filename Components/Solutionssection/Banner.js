import Link from "next/link"
import styles from "../../styles/banner.module.css";

function Banner({heading}) {
    console.log("ehhehe " , heading);
    return (
        <div className="col-md-12 px-0 background_white" style={{ zIndex: 0 }}  >
            <div className={`px-4 ${styles.solution_erp_banner_background}`}>
                <div className="col-md-12 text_align_crousal text-left ">
                    <div className="row">
                        <div className="col-md-6">
                        <h2 className="mb-0 font_crousal pt-4">
                       {heading?.Headingm} <span className="color_active">{heading?.Heading1}</span> {heading?.Headingn}
                        </h2>
                         {/* <h6 className="display_pc font_wi_banner px-1 ">E-CO</h6> */}
                        </div>
                    </div>
                   
                    {/* <p className="size_12 display_h">{heading.sub_heading}</p> */}
                   
                    
                </div>
                <div className='col-md-12 '>
                   <div className="pt-4">
                    {heading?.List1?.map((item, index)=> {
                        return(
 <h6 className='text_heading_sec3 pt-1'><img className='img-fluid' src='/Assets/Solutionimages/checky.png' />&nbsp;&nbsp; {item?.Para}</h6>
                        )
                    })}
                   
                   
                    </div>
                    <Link href="/contact-us" >
                        <button className="btn btn-light btn-lg background_color_black mt-4 "> Talk to us </button>
                    </Link>
                </div>
            </div>
            <div className="col-md-12 background_md_tech_banner  mb-1">
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-4 newdivhover px-0">
                            <div className="row">
                                <div className="col-md-3 col-12 text-center">
                                <img className='img-fluid font_check_s1' src='/Assets/Solutionimages/tickcircle.png' />
                                </div>
                                <div className="col-md-9 align_for_mobile col-12 m-auto pt-2 px-0">
                                <p className="style_patient_font mb-0 pt-1">
                                    {heading?.first_section[0]?.heading}</p>
                                    <p className="style_patient_font1 pt-2">{heading?.first_section[0]?.paragraph}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 newdivhover px-0">
                            <div className="row">
                                <div className="col-md-3 col-12 text-center">
                                <img className='img-fluid font_check_s1' src='/Assets/Solutionimages/tickcircle.png' />
                                </div>
                                <div className="col-md-9 align_for_mobile col-12 m-auto pt-2 px-0">
                                <p className="style_patient_font mb-0 pt-1">
                                    {heading?.first_section[1]?.heading}</p>
                                    <p className="style_patient_font1 pt-2">{heading?.first_section[1]?.paragraph}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 newdivhover px-0">
                            <div className="row">
                                <div className="col-md-3 col-12 text-center">
                                <img className='img-fluid font_check_s1' src='/Assets/Solutionimages/tickcircle.png' />
                                </div>
                                <div className="col-md-9 align_for_mobile col-12 m-auto pt-2 px-0">
                                <p className="style_patient_font mb-0 pt-1">
                                    {heading?.first_section[2]?.heading}</p>
                                    <p className="style_patient_font1 pt-2">{heading?.first_section[2]?.paragraph}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="data_grid_banner">
                                <div className="background_card_icons3">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.56 109.01" style={{ width: "80%" }}><path d="M38.47,10.12A14.59,14.59,0,0,0,41.2,25.24a15.53,15.53,0,0,0,9.51,5.36l3.54.65.19-.25a1.55,1.55,0,0,1,1-.56A15.32,15.32,0,0,0,56.83.54c-.51-.14-1-.26-1.53-.39L54.68,0H51L50.9,0c-.21.06-.42.13-.63.17C44.39,1.41,40.42,4.74,38.47,10.12ZM52.85,4.69h.06A10.65,10.65,0,0,1,63.47,15.34,10.65,10.65,0,0,1,52.83,26h-.06a10.64,10.64,0,0,1,.08-21.27Z" /><path d="M98.77,100.86c2.73-5.07,2.53-10.27-.58-15.46L96.71,83h8.85l-.16-.12-4.14-3.31c-9.51-7.5-15.1-17-16.61-28.14-1.28-9.48-9.34-19.34-21.61-19-1.81.06-3.65,0-5.42,0H53.3l.11-.15-2.84.07c-1.59,0-3.18,0-4.76.06-1.23,0-2.45,0-3.67,0a22.79,22.79,0,0,0-3.93.31A21.61,21.61,0,0,0,21.06,51.17a41.34,41.34,0,0,1-7.9,19.53,56,56,0,0,1-11,10.67C1.42,81.92.71,82.5,0,83.07H9L7.86,84.82c-.1.16-.19.28-.26.41-3.22,5.23-3.46,10.49-.69,15.63A14.53,14.53,0,0,0,20.28,109c23,.09,44.3.08,65.23,0A14.44,14.44,0,0,0,98.77,100.86ZM16.06,74.65c.22-.31.44-.59.65-.88a46.65,46.65,0,0,0,9.08-22.22A16.39,16.39,0,0,1,42.41,37.12c6.92.15,13.93.15,20.83,0A16.31,16.31,0,0,1,79.81,51.19a48.51,48.51,0,0,0,9.78,23.4,1.75,1.75,0,0,1,.22.43l.78,2.13-2.38-1-.9-.37A33.2,33.2,0,0,1,70.87,59.37c-1-2-1.9-4-2.88-6.11l-.21-.45c-.13.71-.26,1.4-.38,2.08q-2.85,16.23-5.7,32.45a2.76,2.76,0,0,1-1.61,2.18C58,90.58,55.94,91.7,54,92.76a2.39,2.39,0,0,1-1.17.33,2.37,2.37,0,0,1-1.18-.34c-2.21-1.22-4.23-2.3-6.16-3.28a2.56,2.56,0,0,1-1.49-2c-1-5.73-1.93-11.46-2.9-17.18L38.44,54.53l-2.9,6C32,68,26,73.17,17.09,76.47a1.06,1.06,0,0,1-.59,0l-.11,0-1.61-.13Zm66.3,3.95L66.7,85.88,70,67.36l1.25,1.55A39.39,39.39,0,0,0,81,77.72ZM39,85.92,24.35,79.05l11.87-9.54Zm-1.56,15.89a15.67,15.67,0,0,1-8.61,2.57c-.47,0-.94,0-1.42-.06a44.44,44.44,0,0,0-4.47-.06q-1.25,0-2.49,0a10.62,10.62,0,0,1-1.25-21.17,8,8,0,0,1,4,.74c5.77,2.67,11.63,5.5,16.66,8,1.46.71,2.88,1.48,4.39,2.29l2.17,1.15,1.48.79-1.47.8c-1,.54-2,1-2.9,1.55C41.42,99.52,39.39,100.58,37.46,101.81Zm48.33,2.42c-5.4.06-10.86.08-16.27.08l-11.42,0H46l-.67-1.49.74-.4,2-1.13c1.46-.81,3-1.65,4.49-2.43Q65.88,92,79.16,85.22c.74-.38,1.52-.7,2.27-1L81.9,84a9.81,9.81,0,0,1,13,5,10.68,10.68,0,0,1-.59,10.3A10.11,10.11,0,0,1,85.79,104.23Z" /></svg>
                                </div>
                                <div className="text-left" >
                                    <p className="style_patient_font mb-0 pt-1">
                                    {heading?.first_section[1]?.heading}</p>
                                    <p className="style_patient_font1 pt-2">{heading?.first_section[1]?.paragraph}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="data_grid_banner">
                                <div className="background_card_icons2">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.19 113.24" style={{ width: "84%" }}><path d="M98.81,53.24A8.84,8.84,0,0,0,100,46.49a9.08,9.08,0,0,0-10.87-6.9,2.32,2.32,0,0,1-1.8-.43C78.65,31.72,69.7,24,60.67,16.07a2.29,2.29,0,0,1-.69-1.7,13.32,13.32,0,0,0-.89-6.21A12.34,12.34,0,0,0,48.28.08a12.24,12.24,0,0,0-12,5.68,89.52,89.52,0,0,0-4.67,8A3.6,3.6,0,0,1,27.9,16h-.29C16,16,6.88,21,.54,30.94A2.32,2.32,0,0,0,0,32.64c.11.46.52.88,1.3,1.33L3.62,35.3c2.8,1.62,5.69,3.3,8.55,4.91a1.63,1.63,0,0,1,.95,2.19,12.82,12.82,0,0,0,5.44,14.18,37.2,37.2,0,0,0,4.18,2.23A12.49,12.49,0,0,0,37.1,56.43a3,3,0,0,0,.45-.68c.07-.13.15-.27.23-.39l.19-.31.3.2c.55.36.91.57,1.22.74l4.4,2.54,8,4.59a2.23,2.23,0,0,0,1.65.4,2.1,2.1,0,0,0,1.14-1.11,30.78,30.78,0,0,0,3.91-13.26A31.51,31.51,0,0,0,53.36,29.8a1.61,1.61,0,0,1-.18-1.41c.47-.9,1-1.8,1.49-2.66l.71-1.22.42.19a.6.6,0,0,1,.26.14q12.72,11,25.44,22A1.86,1.86,0,0,1,82,47.91c.37,1.7.69,3.18,1,4.69a2.73,2.73,0,0,1-.06,1.66C77.48,65.14,72.5,75.11,67.64,84.76a2.55,2.55,0,0,1-1.58,1.15A13.23,13.23,0,0,0,56,94.53a18.51,18.51,0,0,0-.59,2c-.09.33-.17.65-.27,1l-.07.25H36l-11.45,0A14,14,0,0,0,10.86,111a2.29,2.29,0,0,0,.45,1.72,2.3,2.3,0,0,0,1.67.48h77.6c1.56,0,2.09-.53,2.1-2.12,0-3.72,0-7.44,0-11.17,0-1.75-.48-2.23-2.21-2.24H82.61l-.09-.21c-.25-.62-.47-1.22-.69-1.8a20.53,20.53,0,0,0-1.52-3.45,20.11,20.11,0,0,0-2.3-3c-.39-.43-.78-.87-1.16-1.33l-.14-.18,3.22-6.45c3.7-7.41,7.44-14.89,11.14-22.37a3,3,0,0,1,2.19-1.74A8.84,8.84,0,0,0,98.81,53.24ZM35,53.88a8.73,8.73,0,0,1-6.8,2.93,9.35,9.35,0,0,1-3.73-.75A33.83,33.83,0,0,1,20.44,54a9.5,9.5,0,0,1-4.13-10.84l.13-.42L35.28,53.56ZM52.62,59.4l-.15.36L3.86,31.7l.22-.31C9.36,23.94,16.33,19.85,24.8,19.23c11.85-.87,20.88,3.84,26.84,14C56.39,41.27,56.72,50.08,52.62,59.4Zm3.11-42.11c-1,1.95-2.08,3.82-3.24,5.79-.52.9-1.05,1.8-1.58,2.73l-.23.41-.32-.34a32.15,32.15,0,0,0-16.19-9.3l-.46-.11.24-.41c.56-.95,1.1-1.89,1.63-2.83,1.21-2.14,2.36-4.16,3.71-6.1A9.51,9.51,0,0,1,52.12,4.64,9.51,9.51,0,0,1,55.73,17.29Zm1.4,4.18,1.58-2.78L85,41.53l-1.92,2.41ZM88.46,101l.37,0,.57,0v8.91H14.22l.1-.43c0-.14.07-.28.1-.41a8.7,8.7,0,0,1,.22-.88A10.52,10.52,0,0,1,24.39,101q24.64,0,49.28,0Zm-9.8-3.67,0,.38H58.59l0-.38c.33-4.5,5.1-8.41,10.22-8.41h.07C73.79,88.9,78.35,92.83,78.66,97.28Zm-5-10.68-2.9-.83L85.68,55.94l2.7,1.25ZM91,54.34h0a5.87,5.87,0,0,1-5.78-5.87,6,6,0,0,1,5.88-5.9h0A5.89,5.89,0,1,1,91,54.34Z" /></svg>
                                </div>
                                <div className="text-left" >
                                    <p className="style_patient_font mb-0 pt-1">{heading?.first_section[2]?.heading}</p>
                                    <p className="style_patient_font1 pt-2">{heading?.first_section[2]?.paragraph}</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner