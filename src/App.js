import React, { useState, useEffect, useRef, useCallback } from 'react';
import Snowfall from 'react-snowfall';
import { Link, Element, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TitleSection from './sections/TitleAndIconsSection';
import AboutSection from './sections/AboutAndContentSection';
import SkillsSection from './sections/SkillsAndItemsSection';
import AnimatedSection from './sections/AnimatedSection';

import './App.css';

function App() {
  const sections = ['nav-section', 'title-section', 'about-section', 'skills-section'];
  const scrollTimeout = useRef(null);
  const [snowflakeColorIndex, setSnowflakeColorIndex] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const snowflakeColors = ['red', 'white', 'blue', 'purple'];
  const backgroundColors = ['#0e0000', 'black', '#001f3f', '#3D9970'];

  const scrollToNextSection = useCallback((direction) => {
    const nextIndex = direction === 'down' ? currentSectionIndex + 1 : currentSectionIndex - 1;
    if (nextIndex >= 0 && nextIndex < sections.length) {
      scroller.scrollTo(sections[nextIndex], {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
      setCurrentSectionIndex(nextIndex);
    }
  }, [currentSectionIndex, sections]);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        if (event.deltaY > 0) {
          scrollToNextSection('down');
        } else {
          scrollToNextSection('up');
        }
        scrollTimeout.current = null;
      }, 10);
    };

    const handleTouchStart = (event) => {
      const startY = event.touches[0].clientY;

      const handleTouchMove = (moveEvent) => {
        const moveY = moveEvent.touches[0].clientY;
        if (startY > moveY) {
          scrollToNextSection('down');
          document.removeEventListener('touchmove', handleTouchMove);
        } else if (startY < moveY) {
          scrollToNextSection('up');
          document.removeEventListener('touchmove', handleTouchMove);
        }
      };

      document.addEventListener('touchmove', handleTouchMove);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [scrollToNextSection]);

  const toggleSnowflakeColor = () => {
    setSnowflakeColorIndex((prevIndex) => (prevIndex + 1) % snowflakeColors.length);
    setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
  };

  return (
    <div className="App">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          background: backgroundColors[backgroundColorIndex],
        }}
      >
        <Snowfall 
          color={snowflakeColors[snowflakeColorIndex]}
          snowflakeCount={150}
        />
      </div>

      <Element name="nav-section" id="nav-section">
        <AnimatedSection>
          <div 
            className="
              d-flex justify-content-around 
              align-items-center w-100 pt-3
            "
          >
            <button 
              className="btn btn-lg btn-secondary" 
              onClick={toggleSnowflakeColor}
              style={{
                borderRadius: "0px",
                backgroundColor: "#fff",
                border: "0px",
                color: "black"
              }}
            >
              <h6 className="m-0 p-0 display-6 " style={{"fontSize": "0.8rem"}}>Theme</h6>
            </button>
            <Link to="skills-section" smooth={true} duration={0}>
              <button 
                className="btn btn-lg btn-primary" 
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#fff",
                  border: "0px",
                  color: "black"
                }}
              >
                <h6 className="m-0 p-0 display-6" style={{"fontSize": "0.8rem"}}>Skills</h6>
              </button>
            </Link>
            <Link to="about-section" smooth={true} duration={0}>
              <button 
                className="btn btn-lg btn-primary" 
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#fff",
                  border: "0px",
                  color: "black"
                }}
              >
                <h6 className="m-0 p-0 display-6" style={{"fontSize": "0.8rem"}}>About</h6>
              </button>
            </Link>
            <Link to="title-section" smooth={true} duration={0}>
              <button 
                className="btn btn-lg btn-primary" 
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#fff",
                  border: "0px",
                  color: "black"
                }}
              >
                <h6 className="m-0 p-0 display-6" style={{"fontSize": "0.8rem"}}>Profile</h6>
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </Element>

      <Element name="title-section" id="title-section">
        <AnimatedSection>
          <TitleSection />
        </AnimatedSection>
      </Element>

      <Element name="about-section" id="about-section">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
      </Element>

      <Element name="skills-section" id="skills-section">
        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
      </Element>

      {/* Animated Icon for Navigation */}
      {currentSectionIndex < sections.length - 1 && (
        <div
          className="navigation-icon"
          onClick={() => scrollToNextSection('down')}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            cursor: 'pointer',
            animation: 'bounce 2s infinite', // CSS bounce animation
            zIndex: 10,
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
        </div>
      )}
    </div>
  );
}

export default App;
