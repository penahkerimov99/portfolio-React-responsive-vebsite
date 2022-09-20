import React from 'react'
import './style.scss'


export const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div class="about">
                <div class="tittle1">
                    <h1>CONTACT ME</h1>
                </div>
                <div class="line"></div>

            </div>
            <form>
                <div className='bar1'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email' />
                </div>

                <div className='bar1'>
                    <input type='text' placeholder='Surname' />
                    <input type='text' placeholder='Phone' />
                </div>

                <div className='bar2'>
                    <input type='text' placeholder='Your message' />
                    <button>Submit</button>
                </div>

            </form>

        </div>
    )
}

