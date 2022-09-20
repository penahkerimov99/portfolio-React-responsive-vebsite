import React from 'react'
import { Mainphoto } from '../Mainphoto/Mainphoto'
import { Headertitles } from '../Headertitles/Headertitles'
import { About } from '../About/About'
import { Skills } from '../Skills/Skills'
import { Contact } from '../Contact/Contact'
import { Contact2 } from '../Contact2/Contact2'

export const Main = () => {
  return (
    <div>
    <Mainphoto/>
    <Headertitles/>
    <About/>
    <Skills/>
    <Contact/>
    <Contact2/>
    </div>
  )
}

