import React from "react";
import { Link } from "react-router-dom";
// Images
import styled from "styled-components";
import githubf from "../img/githubfinderss.png";
import ck from "../img/CKscreenshot.png";
import storybook from "../img/storybook.PNG";
import ecom from "../img/screenshot.PNG";
import codegig from "../img/codegig.PNG";
import weatherApp from "../img/weatherApp.PNG";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

const MyWork = () => {
  // fade animation controllers
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Github Finder</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/github-finder">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={githubf}
              alt="Github Finder"
            />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Contact Keeper</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/contact-keeper">
          <img src={ck} alt="Contact Keeper" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Story Book</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/story-book">
          <img src={storybook} alt="story book" />
        </Link>
      </Project>
      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Ecommerce Site</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/ecom">
          <img src={ecom} alt="ecom" />
        </Link>
      </Project>
      <Project
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>Coding Gig Finder</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/gig-finder">
          <img src={codegig} alt="gig finder" />
        </Link>
      </Project>
      <Project
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <h2>Weather App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/weather-app">
          <img src={weatherApp} alt="weather app" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hide;
`;

// frame animations
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;
