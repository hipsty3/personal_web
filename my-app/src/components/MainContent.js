import React from 'react';
import me from './../images/me.jpg';
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
          <p className="desc-text"> Freelance Front End Developer specialized in using React / React Native</p>
        </div>
      </div>
    </div>
  )
}