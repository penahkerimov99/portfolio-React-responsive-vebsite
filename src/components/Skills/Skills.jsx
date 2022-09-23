import React from 'react'
import data from '../data/data.json'
import './style.scss'

export const Skills = () => {
    return (
        <div id='skill' className='skill'>

            <div className="intro">
                <div className="tittle3">
                    <h1>Skills</h1>
                </div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="iconbar">
                {data.map((x) => {
                    return (
                        <div className='java'>
                            <div className="icon1"><i class={x.icon}></i></div>
                            <div className="tittle5">
                                <p><b>{x.name}</b></p>
                                <p> {x.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

