import React from 'react';
import me from './../images/me.jpg';
import my from './../images/my.JPG';
import myself from './../images/DSC_0606.jpg'
import Projects from './Projects'

export default function MainContent() {
  return (
    <div className="content">
      <img src={my} className="logo" alt="logo" />
      <div className="description-container">
        <div className="title">
          <h3>Hello :)</h3>
        </div>
        <div className="description">
          <p className="desc-text">My name is Raisa. I'm a freelance front end developer with a passion for design and aesthetics. I am currently looking for a full time front end development roles in Melbourne, Australia and am open for remote work as well.</p>
          <p className="desc-text">Feel free to take a look at my past and current projects and contact me if you have any questions/opportunities! :)</p>
          {/* <p className="desc-text">Freelance Front End Developer specialized in using React / React Native</p> */}
        </div>
      </div>
    </div>
  )
}