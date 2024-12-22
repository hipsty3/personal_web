import React from 'react';
import resume from './../images/resume.pdf';
import { Document, Page } from 'react-pdf'

export default function Experience() {
  return (
    <div className="content">
      <a href={resume}><h2 className="resume">Download Resume</h2></a>
      <p>Last updated: 22 December 2024</p>
    </div>
  )
}