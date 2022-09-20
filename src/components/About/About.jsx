import React from 'react'
import { Aboutphoto } from '../Aboutphoto/Aboutphoto';
import { Aboutdescription } from '../Aboutdescription/Aboutdescription';
import './style.scss'


export const About = () => {
  return (
    <div className='about-section'>
     <Aboutphoto/>
     <Aboutdescription/>
    </div>
  )
}

