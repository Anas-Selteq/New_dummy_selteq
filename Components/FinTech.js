import React from 'react'
import Bankingsoft from './FinTech/Bankingsoft'
import Bannersol from './FinTech/Bannersol'
import Letsconnect from './FinTech/Letsconnect'
import Ourclients from './FinTech/Ourclients'
import Header from './Header'
import Footer from './Footer'
import Newfooter from './Newfooter/Newfooter'


const FinTech = () => {
  return (
    <>
      <Header/>
      <Bankingsoft/>
      <Bannersol/>
      <Letsconnect/>
      <Ourclients/>
      <Newfooter/>
    </>
  )
}

export default FinTech
