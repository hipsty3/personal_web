import React from 'react';
import profile from './../images/me3.JPG';
import Projects from './Projects'

export default function MainContent() {
  return (
    <div className="content">
      <img src={profile} className="logo" alt="logo" />
      <div className="description-container">
        <div className="title">
          <h3>{`Hello :)`}</h3>
        </div>
        <div className="description">
          <p className="desc-text">My name is Raisa. I'm a Software Developer based in Melbourne with 3+ years of experience in Mobile and Web Front End development.</p>
          <p className="desc-text">{`Feel free to take a look at my past and current projects and contact me if you have any questions/opportunities! :)`}</p>
        </div>
      </div>
    </div>
  )
}