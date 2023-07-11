import React from 'react'

function Section2({heading}) {
  return (
    <div>
    {/* Section 2 ----------------------------------------------- */}
    <div className='col-md-12 display_h background_white_h1'></div>
    <div className='col-md-12 px-md-5  background_section pb-5'>
        <div className='col-md-12 px-md-5 '>

            <div className="row ">
            <div className='col-md-7 display_pc margin_top_sec3 text-center m-auto'>
                <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/w1.png' />
            </div>
            <div className='col-md-5 margin_top_sec3'>
                <h2 className='font_for_mobile'><b>{heading?.Heading3}</b></h2>
                <p className='mb-0 pb-0 color_font_des' >{heading?.Sub_para3}</p>
                {heading?.List2?.map((item,index)=>{
                    return(
                        <div className='row pt-4'> 
                        <div className='col-md-1 col-2'>
                        <img className='img-fluid' src='/Assets/Solutionimages/arrowright3.png' />
                        </div>
                        <div className='col-md-11 pt-md-1 col-10'>
                            <h6 className='text_heading_sec2'>{item?.heading}</h6>
                            <p className='mb-0 pb-0 color_font_des' >{item?.paragraph}</p>
                        </div>
                        </div>
                    )
                })}
              
                

            </div>
            <div className='col-md-7 display_h margin_top_sec3 text-center m-auto'>
                <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/w1.png' />
            </div>
            </div>
        </div>
    </div>

    {/* Section 3 ----------------------------------------------- */}
    <div className='col-md-12 display_h background_white_h1'></div>
    <div className='col-md-12 px-md-5  background_section pb-5'>
        <div className='col-md-12 px-md-5 '>

            <div className="row ">
            <div className='col-md-7 display_h margin_top_sec3 text-center m-auto'>
                <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/w2.png' />
            </div>
            <div className='col-md-5 margin_top_sec3'>
             
            {heading?.List3?.map((item,index)=>{
                    return(
                        <div className='row pt-4'> 
                        <div className='col-md-1 col-2'>
                        <img className='img-fluid arrow_big' src='/Assets/Solutionimages/arrowright3.png' />
                        </div>
                        <div className='col-md-11 pt-md-1 col-10'>
                            <h6 className='text_heading_sec2'>{item?.heading}</h6>
                            <p className='mb-0 pb-0 color_font_des' >{item?.paragraph}</p>
                        </div>
                        </div>
                    )
                })}
               
            </div>
            <div className='col-md-7 display_pc margin_top_sec3 text-center m-auto'>
                <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/w2.png' />
            </div>
          
            </div>
        </div>
    </div>

  

    {/* Section 4 ---------------------------------------------------  */}
    <div className='col-md-12 text-center pt-5'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <h1 className='heading_set_sec4'>{heading?.Heading4}</h1>
        <p className='mb-0 pb-0 color_font_des' >{heading?.Paragraph4}</p>
            </div>
            <div className='col-md-2'></div>
        </div>
       
    </div>
    <div className='col-md-12 px-md-5 pt-md-5'>
        <div className='row'>
            <div className='col-md-7'>
            <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/mob.png' />
            </div>
            <div className='col-md-5 m-auto'>
                {heading?.List4?.map((item,index)=>{
                    return(
                        <div className='row pt-4'> 
                        <div className='col-md-1 col-2'>
                        <img className='img-fluid' src='/Assets/Solutionimages/checkb.png' />
                        </div>
                        <div className='col-md-11 pt-1 col-10'>
                            <h6 className='text_heading_sec2'>{item.Head}</h6>
                            <p className='mb-0 pb-0 color_font_des' >{item?.Para}</p>
                        </div>
                        </div>
                    )
                })}
          
               
            </div>
        </div>
    </div>

     {/* Section 5 ---------------------------------------------------  */}
     <div className='col-md-12 background_section mt-5 pb-5'>
     <div className='col-md-12 text-center pt-5 mt-4 '>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <h1 className='heading_set_sec4'>{heading?.Heading5}</h1>
             <p className='mb-0 pb-0 color_font_des' >{heading?.Paragraph5}</p>
            </div>
            <div className='col-md-2'></div>
        </div>
       
    </div>
     <div className='col-md-12 px-md-5 px-4 pt-md-5'>
        <div className='row'>
            <div className='col-md-4 px-md-5'>
                <div className='col-md-12 bg-white background_style_sec5 text-center py-4'>
                <h5><b>{heading?.List5[0]?.Head}</b></h5>
                <img className='img-fluid equal_size py-3' src='/Assets/Solutionimages/faceid.png' />
                <p className='mb-0 pb-0 color_font_des py-2' >
                {heading?.List5[0]?.Para}
                </p>
                </div>
            </div>
            <div className='col-md-4 px-md-5'>
                <div className='col-md-12 bg-white background_style_sec5 text-center py-4'>
                <h5><b>{heading?.List5[1]?.Head}</b></h5>
                <img className='img-fluid equal_size py-3' src='/Assets/Solutionimages/calendar2.png' />
                <p className='mb-0 pb-0 color_font_des py-2' >
                {heading?.List5[1]?.Para}
                </p>
                </div>
            </div>
            <div className='col-md-4 px-md-5'>
                <div className='col-md-12 bg-white background_style_sec5 text-center py-4'>
                <h5><b>{heading?.List5[2]?.Head}</b></h5>
                <img className='img-fluid equal_size py-3' src='/Assets/Solutionimages/securityuser.png' />
                <p className='mb-0 pb-0 color_font_des py-2' >
                {heading?.List5[2]?.Para}
                </p>
                </div>
            </div>
        </div>
    </div>
    </div>

    {/* Section 6 ---------------------------------------------------  */}
    <div className='col-md-12 text-center pt-5'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <h1 className='heading_set_sec4'>{heading?.Heading6}</h1>
        <p className='mb-0 pb-0 color_font_des' >{heading?.Paragraph6}</p>
            </div>
            <div className='col-md-2'></div>
        </div>
       
    </div>
    <div className='col-md-12 px-md-5 px-4 pt-5'>
        <div className='row'>
            <div className='col-md-7'>
            <img className='img-fluid img_sec_2_size' src='/Assets/Solutionimages/calwedget.png' />
            </div>
            <div className='col-md-5 m-auto'>
                {heading?.List6?.map((item, index)=>{
                    return(
                        <div className='row py-4'> 
                        <div className='col-md-1 col-2'>
                        <img className='img-fluid' src='/Assets/Solutionimages/checkb.png' />
                        </div>
                        <div className='col-md-11 pt-1 col-10'>
                            <h6 className='text_heading_sec2'>{item?.Head}</h6>
                            <p className='mb-0 pb-0 color_font_des' >{item?.Para}</p>
                        </div>
                        </div>
                    )
                })}
           
              
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Section2
