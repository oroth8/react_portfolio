import React from "react";
import home1 from "../img/home1.png";
// import styled from 'styled-components';
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { fade, titleAnim, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Owen Roth</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Full Stack <span>Developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Salesforce Admin</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any contract work or job inquirerys.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Profile" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
