/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'

function Homepage() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Homepage