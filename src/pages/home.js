import "../styles.css";
import "../search.css";
import React, { Component, useEffect, useState } from "react";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useHistory } from "react-router-dom";
import { Content } from "../data/content";
import { Link } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  // These values will be shown in the search dropdown
  // The name property is the actual text and the value property is the link
  const options = [
    {
      name: "everything about you",
      value: "all"
    },
    {
      name: "about",
      value: "about"
    },
    { name: "works", value: "works" },
    { name: "writing", value: "writing" },
    { name: "images", value: "images" },
    { name: "social", value: "social" }
  ];

  // Voice search functionality
  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      setIsListening(true);
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchValue(transcript);
        const inputField = document.querySelector(".search-input");
        if (inputField) {
          inputField.value = transcript;
        }
        setIsListening(false);
        // Trigger search
        setTimeout(() => searchWebsite(), 500);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    }
  };

  // Website search
  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;
    // When search is triggered, add the value entered into the search bar to the url
    if (path) {
      history.push(path);
    }
  };

  useEffect(() => {
    let inputField = document.querySelector(".search-input");
    //Trigger search when the enter key is pressed
    if (inputField) {
      inputField.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          searchWebsite();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector(".search-input").value;

    // Route to random page if search input is empty
    if (!path) {
      history.push(`/${options[Math.floor(Math.random() * options.length)].value}`);
      return;
    }

    /* Get all elements matching the search term */
    const item = Content.filter((item) => item.category === path);

    // Get the link of the first match
    // Redirect to first match, if it exists
    if (item[0]) {
      const url = item[0].link;
      window.location.href = url;
    } else if (path) {
      history.push(path);
    }
  }

  // Page loading effect with fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced loading time

    // Fallback: force show content after 3 seconds if still loading
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Enhanced scroll reveal animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Enhanced Interactive Features
  useEffect(() => {
    // Add particles effect
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) {
        const container = document.createElement('div');
        container.className = 'particles-container';
        document.body.appendChild(container);
        
        for (let i = 0; i < 15; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 20 + 's';
          particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
          container.appendChild(particle);
        }
      }
    };

    // Mouse trail effect
    const createMouseTrail = (e) => {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 800);
    };

    // Add haptic feedback for mobile
    const addHapticFeedback = (element) => {
      element.addEventListener('click', () => {
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
      });
    };

    // Add ripple effect to interactive elements
    const addRippleEffect = () => {
      const buttons = document.querySelectorAll('.search-btn, .top-menu-item, .top-menu-icon');
      buttons.forEach(button => {
        if (button) {
          button.classList.add('ripple', 'interactive-element');
          addHapticFeedback(button);
        }
      });
    };

    // Add delay to ensure DOM is ready
    const timer = setTimeout(() => {
      createParticles();
      addRippleEffect();
    }, 100);

    document.addEventListener('mousemove', createMouseTrail);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', createMouseTrail);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="loader-logo">
            <span className="blue">F</span>
            <span className="red">a</span>
            <span className="yellow">w</span>
            <span className="blue">a</span>
            <span className="green">z</span>
          </div>
          {/* Skip button for development */}
          <button 
            onClick={() => setIsLoading(false)}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: '#4285f4',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Skip Loading
          </button>
        </div>
      )}
      
      <div className={`main home ${isLoading ? 'loading' : 'page-transition-enter-active'}`}>
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          <a href="mailto:fawaz.ahamed2023@vitstudent.ac.in"> Gmail </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          <a href="/images"> Images </a>
        </span>
        <span className="top-menu-icon">
          <svg className="apps-grid" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </span>
        <ProfileMenuDrop />
      </div>
     <div className="flex-center">
      <div className="search-container">
        <div className="frontpage-logo">
          <Logo />
        </div>
        <div className="welcome-tagline">
          <p className="typewriter">Computer Science Student • Web Developer • AI Enthusiast</p>
          <p>Specializing in Cyber-Physical Systems at VIT Chennai</p>
        </div>
        <div className="search-container-enhanced">
          <SearchBox options={options} />
          <button 
            className={`voice-search-btn ${isListening ? 'listening' : ''}`}
            onClick={startVoiceSearch}
            title="Voice Search"
          >
            🎤
          </button>
        </div>
        <div className="search-btns">
          <input
            className="search-btn gsr"
            type="button"
            value="Explore Portfolio"
            onClick={searchWebsite}
          />
          <input
            className="search-btn ifl"
            type="button"
            value="Surprise Me!"
            onClick={feelingLucky}
          />
        </div>
      </div>
      </div>

      <footer className="footer">
        <div className="country">
          India
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <Link to="/about"> About </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/blog"> Blog</Link>
            <a href="mailto:fawaz.ahamed2023@vitstudent.ac.in"> Email </a>
          </div>
          <div className="footer-links-section">
            <a href="https://github.com/fawaz-ahamed"> GitHub </a>
            <a href="https://linkedin.com/in/fawaz-ahamed"> LinkedIn </a>
            <a href="mailto:fawaz.ahamed2023@vitstudent.ac.in"> Contact </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
export default Home;
