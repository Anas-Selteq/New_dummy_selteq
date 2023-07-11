import React from 'react'
import Patientmon from '../Services/Patientmon'
import Ascand from '../Softwaredev/Ascand'

function Aboutspoke() {
  return (
    <div className='display_pc  background_color_solutions'>
      <div className='row pb-3 pt-5' >
        <div className='col-md-2 col-2'></div>
        <div className='col-md-8 col-8'>
        <div className="row">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/webcode.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Bespoke Software</p>
                    <p className="mt-0 sub_heading_sol_sec">Ground-breaking software tailored to your needs</p>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/brain.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Intelligent Business Engineering</p>
                    <p className="mt-0 sub_heading_sol_sec">Transform, scale & gain competitive edge</p>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-md-1 col-3 text-right">
                    <img className="img-fluid" src="https://1864597015.rsc.cdn77.org/selteqreact/images/head.png" />
                </div>
                <div className="col-md-11 col-9 pl-0">
                    <p className="mb-0 heading_sol_sec">Dedicated support</p>
                    <p className="mt-0 sub_heading_sol_sec">Rigorous QA for an efficient & high-quality software</p>
                </div>
            </div>
        </div>
        <div className='col-md-2 col-2'></div>
      </div>
    </div>
  )
}

export default Aboutspoke