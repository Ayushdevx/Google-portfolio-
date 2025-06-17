import "../styles.css";
import "../search.css";
import React, { Component, useEffect } from "react";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useHistory } from "react-router-dom";
import { Content } from "../data/content";
import { Link } from "react-router-dom";

function Home() {
  const history = useHistory();

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
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector(".search-input").value;

    // Route to random page if search input is empty
    if (!path) {
      history.push(
        `/${
          options[Math.floor(Math.random() * options.length)].value
        }`
      );
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

  return (
    <div className="main home">
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="mailto:fawaz.ahamed2023@vitstudent.ac.in"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="https://github.com/fawaz-ahamed"> GitHub </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
     <div className="flex-center">
      <div className="search-container">
        <div className="frontpage-logo">
          <Logo />
        </div>
        <div className="welcome-tagline">
          <p>Computer Science Student • Web Developer • AI Enthusiast</p>
          <p>Specializing in Cyber-Physical Systems at VIT Chennai</p>
        </div>
        <SearchBox options={options} />
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
  );
}
export default Home;
