import React from 'react'
import Navigation from './Navigation.jsx';
import HeroSection from './HeroSection.jsx';
import ShowSection from './ShowSection.jsx';
import CourseShowcase from './CourseShowcase.jsx';
import "../App.css";
function MainBody() {
  return (
    <div className='bg-mainBackground py-8 px-5 max-w-[1400px] m-auto'>
      <Navigation></Navigation>  
      <HeroSection></HeroSection>
      <ShowSection></ShowSection>
      <CourseShowcase></CourseShowcase>
    </div>
  )
}

export default MainBody
