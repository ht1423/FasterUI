import React from 'react'
import '../src/App.css'
import Hero from './sections/Hero'
import WhatWeDo from './sections/WhatWeDo'
import CheckOurWork from './sections/CheckOurWork'
import GetInTouch from './sections/GetInTouch'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/*Sections in order*/}
      <Hero />
      <WhatWeDo />
      <CheckOurWork />
      <FAQ />
      <GetInTouch />
      <Contact />
    </div>
  )
}

export default App