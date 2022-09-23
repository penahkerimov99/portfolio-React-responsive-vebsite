import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.scss'



export const Mainnav = () => {
    
    return (
        <nav id='home' className='main-nav'>
               
                <ul>
                <li><AnchorLink href='#home'  className='navitem'>Home</AnchorLink></li>
                <li><AnchorLink href='#desc' className='navitem'>About</AnchorLink></li>
                <li><AnchorLink href='#skill'  className='navitem'>Skils</AnchorLink></li>
                <li><AnchorLink href='#contact' className='navitem'>Contact</AnchorLink></li>
                </ul>
               
        </nav>
    )
}

