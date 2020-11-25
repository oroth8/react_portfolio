import React from "react";
import home1 from "../img/home1.png";
// import styled from 'styled-components';
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Owen Roth</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              Full Stack <span>Developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>Salesforce Admin</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact me for any contract work or job inquirerys.</p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={home1} alt="Profile" />
      </Image>
    </About>
  );
};

export default AboutSection;
