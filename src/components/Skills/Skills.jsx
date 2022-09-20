import React from 'react'
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
                <div className="java">
                    <div className="icon1"><i class="fa-brands fa-js"></i></div>
                    <div className="tittle5">
                        <p><b>Javascript</b></p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, repudiandae aliquam. Rerum cum
                            vitae deserunt.</p>
                    </div>
                </div>

                <div className="java">
                    <div className="icon1"><i class="fa-brands fa-css3-alt"></i></div>
                    <div className="tittle5">
                        <p><b>CSS</b></p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, repudiandae aliquam. Rerum cum
                            vitae deserunt.</p>
                    </div>
                </div>

                <div className="java">
                    <div className="icon1"><i class="fa-brands fa-html5"></i></div>
                    <div className="tittle5">
                        <p><b>HTML5</b></p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, repudiandae aliquam. Rerum cum
                            vitae deserunt.</p>
                    </div>
                </div>

                <div className="java">
                    <div className="icon1"><i class="fa-brands fa-react"></i></div>
                    <div class="tittle5">
                        <p><b>React</b></p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, repudiandae aliquam. Rerum cum
                            vitae deserunt.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

