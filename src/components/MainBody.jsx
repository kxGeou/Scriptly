import React from 'react'
import Navigation from './Navigation.jsx';
import HeroSection from './HeroSection.jsx';
import ShowSection from './ShowSection.jsx';
import ActionSection from './ActionSection.jsx';
import Footer from './Footer.jsx';
import Faq from './Faq.jsx';
import "../App.css";
function MainBody() {
  return (
    <div className='bg-mainBackground py-8 px-5'>
      <div className='max-w-[1400px] m-auto'>
        <Navigation></Navigation>  
        <HeroSection></HeroSection>
        <ShowSection></ShowSection>
        <Faq></Faq>
        <ActionSection></ActionSection>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default MainBody
