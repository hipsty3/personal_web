import React, { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function handleScrolling() {
      // setScrolling(true);
      const isTop = window.scrollY < 2;
      !isTop ? setScrolling(true) : setScrolling(false);
    }
    window.addEventListener("scroll", handleScrolling)

    return function cleanUp() {
      window.removeEventListener('scroll', handleScrolling)
    }
  });

  const toggleNav = () => {
    setToggle(!toggle)
  }
  const closeNav = () => {
    setToggle(false)
  }

  return (
    <div className={scrolling ? 'nav scrolling' : 'nav'}>
      <div className="navlink-home">
        <NavLink exact to="/" className="navlink-style-home" onClick={closeNav}><p className="home">R A I S A</p></NavLink>
      </div>
      <div className={toggle? "nav-links nav-open" : "nav-links"}>
        <NavLink exact to="/projects" className="navlink-style" onClick={closeNav}><p className="projects">PROJECTS</p></NavLink>
        <NavLink exact to="/experience" className="navlink-style" onClick={closeNav}><p className="experience">RESUME</p></NavLink>
        <NavLink exact to="/contact" className="navlink-style" onClick={closeNav}><p className="contact">CONTACT</p></NavLink>
      </div >
      <div className={toggle ? "burger toggle" : "burger"} onClick={toggleNav}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div >
  )
}