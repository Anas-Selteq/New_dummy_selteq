import Link from 'next/link'
import React from 'react'
import styles from "../../../styles/softwaremob.module.css"

function Softwaredev() {
  return (
    <div className='col-md-12 px-0 display_pc'>
      <div className={styles.backsoft}>
        <div className='col-md-12 px-0'>
          <p className='text_size_baner'><b>
            EXPLICIT FUNCTIONALITIES
          </b></p>
          <p>Transform, scale and gain competitive edge</p>
          <div className='text-center '>
            <Link href="/contact-us">
              <button className='btn btn-danger background_button_soft1 animated_button_banner py-2 px-5'>
                <span class="button-text">Explore</span>
                <span class="animation-layer"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Softwaredev