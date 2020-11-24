import React from 'react'
import home1 from '../img/home1.png'

const AboutSection = () => {
    return (
        <div>
            <div className='discription'>
                <div className='title'>
                    <div className='hide'>
                        <h2>
                            Owen Roth
                        </h2>
                    </div>
                    <div className='hide'>
                        <h2>
                            Full Stack <span>Developer</span>
                        </h2>
                    </div>
                    <div className='hide'>
                        <h2>
                            Salesforce Admin
                        </h2>
                    </div>
                </div>
                <p>Contact me for any contract work or job inquirerys.</p>
                <button>Contact Me</button>
            </div>
            <div className='image'>
                <img src={home1} alt="Profile Image"/>
            </div>
        </div>
    )
}

export default AboutSection;