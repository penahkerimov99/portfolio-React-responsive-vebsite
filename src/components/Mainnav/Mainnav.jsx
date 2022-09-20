import React from 'react'
import './style.scss'



export const Mainnav = () => {
    return (
        <nav id='home' className='main-nav'>

                <ul>
                <li><a href='#home'  className='navitem'>Home</a></li>
                <li><a href='#desc' className='navitem'>About</a></li>
                <li><a href='#skill'  className='navitem'>Skils</a></li>
                <li><a href='#contact' className='navitem'>Contact</a></li>
                </ul>
    

        </nav>
    )
}

