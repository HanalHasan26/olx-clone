import React from 'react'
import BannerWithoutImg from '../Components/Banner/BannerWithoutImg'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import User from '../Components/UserMenu/User'

function UserMenu() {
  return (
    <div className='div'>
      <Header />
      <BannerWithoutImg/>
        <User/>
        <Footer/>
    </div>
  )
}

export default UserMenu