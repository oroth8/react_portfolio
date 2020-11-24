import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components';

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

// Styled Components
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`
const Image = styled.div`
flex: 1;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`;

const Hide = styled.div`
overflow: hidden;
`


export default AboutSection;