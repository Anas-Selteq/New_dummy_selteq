import Link from 'next/link'
import React from 'react'
import styles from "../../../styles/softwaremob.module.css"

function Solutionsmain() {
  return (
    <div className='col-md-12 px-0'>
      <div className={styles.backsoft}>
        <h1><b>Fintech</b></h1>
        <p>Cash flow management & POS optimization. Real-time transaction & account processing</p>
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
  )
}

export default Solutionsmain