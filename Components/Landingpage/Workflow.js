import { useEffect, useRef, useState } from "react"
import styles from "../../styles/workflow.module.css"

function Workflow() {
  //  hooks
  const [tabone, setTabone] = useState(1)

  return (
    <div className="col-sm-12 px-0 mb-md-5 pb-md-5 margin_b_main">
        <div className="col-md-12 p-0 mb-5 display_h ">
      <div data-aos="zoom-in" className={styles.background_process}>
        {tabone == 1 ? (
          // Tab one
          <div className="col-md-12 p-0 margin_bottom_neg">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(1)}
                  >
                    
                    <i class="fas fa-lightbulb"></i>
                    <br/>
                    <br/>
                    Idea
                   
                    
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                      <i class="fas fa-fill-drip"></i>
                    <br/>
                    <br/>
                    Prototype
                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    <i class="fas fa-code"></i>
                    <br/>
                    <br/>
                    Development


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                   <i class="fas fa-rocket"></i>
                    <br/>
                    <br/>
                    Deployment


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                     <i class="fas fa-drafting-compass"></i>
                    <br/>
                    <br/>
                    Scaling
                   
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
                <div className="col-md-12 p-0 mt-4">
                    <div className={styles.back_workflow}>
              <div className="row">
                <div className="col-md-12">
                 
                  <h6 className={styles.subheading_process}>
                    We believe in continuous communication with all parties
                    involved, from the client to the management.We believe in
                    continuous communication with all parties involved, from the
                    client to the management.We believe in continuous
                    communication with all parties involved, from the client to
                    the management.We believe in continuous communication with
                    all parties involved, from the client to the management.
                  </h6>
                  
                </div>
               
              </div>
              </div>
              </div>
            </div>
          </div>
        ) : tabone == 2 ? (
          // Tab 2
          <div className="col-md-12 p-0 margin_bottom_neg">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    
                    <i class="fas fa-lightbulb"></i>
                    <br/>
                    <br/>
                    Idea
                   
                    
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(2)}
                  >
                      <i class="fas fa-fill-drip"></i>
                    <br/>
                    <br/>
                    Prototype
                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    <i class="fas fa-code"></i>
                    <br/>
                    <br/>
                    Development


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                   <i class="fas fa-rocket"></i>
                    <br/>
                    <br/>
                    Deployment


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                     <i class="fas fa-drafting-compass"></i>
                    <br/>
                    <br/>
                    Scaling
                   
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
                <div className="col-md-12 p-0 mt-4">
                    <div className={styles.back_workflow}>
              <div className="row">
                <div className="col-md-12">
                 
                  <h6 className={styles.subheading_process}>
                  We finally build a prototype with a project structure and mock-ups in a clickable form. This is a kind of modelling visually everything from functionality to objectives of the purposed solution.
                  </h6>
                  
                </div>
               
              </div>
              </div>
              </div>
            </div>
          </div>
        ) : tabone == 3 ? (
          // Tab 3
          <div className="col-md-12 p-0 margin_bottom_neg">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    
                    <i class="fas fa-lightbulb"></i>
                    <br/>
                    <br/>
                    Idea
                   
                    
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                      <i class="fas fa-fill-drip"></i>
                    <br/>
                    <br/>
                    Prototype
                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(3)}
                  >
                    <i class="fas fa-code"></i>
                    <br/>
                    <br/>
                    Development


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                   <i class="fas fa-rocket"></i>
                    <br/>
                    <br/>
                    Deployment


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                     <i class="fas fa-drafting-compass"></i>
                    <br/>
                    <br/>
                    Scaling
                   
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
                <div className="col-md-12 p-0 mt-4">
                    <div className={styles.back_workflow}>
              <div className="row">
                <div className="col-md-12">
                 
                  <h6 className={styles.subheading_process}>
                  Here we convert design documentation or a prototype into the actual software, a stage to build a basic version of the software. By keeping SDLC in view, our development release cycle proceeds from alpha, beta to actual production build.
                  </h6>
                  
                </div>
               
              </div>
              </div>
              </div>
            </div>
          </div>
        ) : tabone == 4 ? (
          // Tab 4
          <div className="col-md-12 p-0 margin_bottom_neg">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    
                    <i class="fas fa-lightbulb"></i>
                    <br/>
                    <br/>
                    Idea
                   
                    
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                      <i class="fas fa-fill-drip"></i>
                    <br/>
                    <br/>
                    Prototype
                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    <i class="fas fa-code"></i>
                    <br/>
                    <br/>
                    Development


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(4)}
                  >
                   <i class="fas fa-rocket"></i>
                    <br/>
                    <br/>
                    Deployment


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(5)}
                  >
                     <i class="fas fa-drafting-compass"></i>
                    <br/>
                    <br/>
                    Scaling
                   
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
                <div className="col-md-12 p-0 mt-4">
                    <div className={styles.back_workflow}>
              <div className="row">
                <div className="col-md-12">
                 
                  <h6 className={styles.subheading_process}>
                  Time to build a full version. Usually, this is when a client needs real support, so we now work in small teams using iterative approaches. Deployment is a stage to complete the full product. The actual installation of the solution takes place with developing the full functionality and analysing user feedback.
                  </h6>
                  
                </div>
               
              </div>
              </div>
              </div>
            </div>
          </div>
        ) : tabone == 5 ? (
          // Tab 5
          <div className="col-md-12 p-0 margin_bottom_neg">
            {/* button section  */}
            <div className="container pt-5">
              <div className="row">
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    
                    <i class="fas fa-lightbulb"></i>
                    <br/>
                    <br/>
                    Idea
                   
                    
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                      <i class="fas fa-fill-drip"></i>
                    <br/>
                    <br/>
                    Prototype
                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    <i class="fas fa-code"></i>
                    <br/>
                    <br/>
                    Development


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                   <i class="fas fa-rocket"></i>
                    <br/>
                    <br/>
                    Deployment


                   
                  </button>
                </div>
                <div className="col-md col-12">
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(5)}
                  >
                     <i class="fas fa-drafting-compass"></i>
                    <br/>
                    <br/>
                    Scaling
                   
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container">
                <div className="col-md-12 p-0 mt-4">
                    <div className={styles.back_workflow}>
              <div className="row">
                <div className="col-md-12">
                 
                  <h6 className={styles.subheading_process}>
                  Product has flown off the shelves and has been launched in the market. Now you need to grow faster, gain new clients and outpace your competitors. Therefore, you will be seeking dedicated maintenance services and scaling.
                  </h6>
                  
                </div>
               
              </div>
              </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      </div>
      <div className="col-md-12 display_pc p-0">
        <div className={styles.background_process} >
          <div className="col-md-12 px-4 py-4">
              <div className="col-md-12 text-center">
              <span className="work_f_p"> <i class="fas fa-lightbulb"></i></span>
              <h3 className="color_white_work_p" >Idea</h3>
              <p className="color_white_work_p_p mt-3" >Are you a company that has an idea, but need a clear strategy with a plan? We nurture a long term partnership to get started on identifying the overall requirement of your company operations, detailed and feasibility analysis which will help identify the risk so that risk mitigation strategies can be worked out.</p>
              </div>
              <div className="col-md-12 text-center mt-5">
              <span className="work_f_p">     <i class="fas fa-fill-drip"></i></span>
              <h3 className="color_white_work_p" >Prototype</h3>
              <p className="color_white_work_p_p mt-3" >Are you a company that has an idea, but need a clear strategy with a plan? We nurture a long term partnership to get started on identifying the overall requirement of your company operations, detailed and feasibility analysis which will help identify the risk so that risk mitigation strategies can be worked out.</p>
              </div>
              <div className="col-md-12 text-center mt-5">
              <span className="work_f_p"> <i class="fas fa-code"></i></span>
              <h3 className="color_white_work_p" >Development</h3>
              <p className="color_white_work_p_p mt-3" >Are you a company that has an idea, but need a clear strategy with a plan? We nurture a long term partnership to get started on identifying the overall requirement of your company operations, detailed and feasibility analysis which will help identify the risk so that risk mitigation strategies can be worked out.</p>
              </div>
              <div className="col-md-12 text-center mt-5">
              <span className="work_f_p"> <i class="fas fa-rocket"></i></span>
              <h3 className="color_white_work_p" >Deployment</h3>
              <p className="color_white_work_p_p mt-3" >Are you a company that has an idea, but need a clear strategy with a plan? We nurture a long term partnership to get started on identifying the overall requirement of your company operations, detailed and feasibility analysis which will help identify the risk so that risk mitigation strategies can be worked out.</p>
              </div>
              <div className="col-md-12 text-center mt-5">
              <span className="work_f_p">  <i class="fas fa-drafting-compass"></i></span>
              <h3 className="color_white_work_p" >Scaling</h3>
              <p className="color_white_work_p_p mt-3" >Are you a company that has an idea, but need a clear strategy with a plan? We nurture a long term partnership to get started on identifying the overall requirement of your company operations, detailed and feasibility analysis which will help identify the risk so that risk mitigation strategies can be worked out.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow
