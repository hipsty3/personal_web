import React from 'react';
import me from './../me.jpg';
import Projects from './Projects'

export default function MainContent() {
  return (
    <div className="content">
      <img src={me} className="logo" alt="logo" />
      <div className="description-container">
        <div className="title">
          <h3>RAISA AMALIA</h3>
        </div>
        <div className="description">
          <p className="desc-text"> Melbourne based Frontend Developer experienced in Web and Mobile Development.</p>
          <p className="desc-text">Currently a third year Computing and Software Systems Undergraduate in University of Melbourne. </p>
        </div>
      </div>
    </div>
  )
}