import React, { Fragment } from 'react'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection';
import FaqSection from '../components/FaqSection'

const AboutMe = () => {
    return (
        <Fragment>
            <AboutSection />
            <ServiceSection />
            <FaqSection/>
        </Fragment>
    )
}

export default AboutMe;