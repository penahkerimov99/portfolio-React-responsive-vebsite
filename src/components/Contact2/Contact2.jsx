import React from 'react'
import datacontact from '../data/datacontact.json'
import './style.scss'


export const Contact2 = () => {
    return (
        <div className='contact-2'>
            <div className="contactbar">
                {datacontact.map((y) => {
                    return (
                        <div className="contact1">
                            <i class={y.icon}></i>
                            <p><b>{y.type}</b></p>
                            <p>{y.adress}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

