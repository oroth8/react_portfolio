import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className='title'>
                    <Hide>
                        <h2>
                            Owen Roth
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>
                            Full Stack <span>Developer</span>
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>
                            Salesforce Admin
                        </h2>
                    </Hide>
                </div>
                <p>Contact me for any contract work or job inquirerys.</p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={home1} alt="Profile"/>
            </Image>
        </About>
    )
}


export default AboutSection;