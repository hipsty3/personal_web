import React from 'react';
import './../styles/Projects.scss';
import './ProjectElem'
import color from './../images/color.jpg';
import mementos from './../images/mementos2.png';
import gps from './../images/gps2.png';

import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";


import ProjectElem from './ProjectElem';
import ProjectContent from './ProjectContent';

const projects = [
  {
    id: 0,
    title: 'Personal Website',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: color,
    desc: 'This Website!',
    parts: [
      {
        id: 0,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
      {
        id: 1,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
    ],
    tools: ['React', 'JavaScript', 'SASS', 'AWS'],
    summary: {
      position: 'position',
      organisation: 'organisation',
      year: '2020',
      work: 'front-end development',
      link: 'www.com',
    },
    link: "website"
  },
  {
    id: 1,
    title: 'mementos',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: mementos,
    desc: 'Android app that keeps track of family heirloom to be passed down to future generations.',
    parts: [
      {
        id: 0,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
      {
        id: 1,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
    ],
    tools: ['React Native', 'JavaScript', 'Android', 'Firebase'],
    summary: {
      position: 'position',
      organisation: 'organisation',
      year: '2020',
      work: 'front-end development',
      link: 'www.com',
    },
    link: "mementos"
  },
  {
    id: 2,
    title: 'gps (Get People Socializing)',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: gps,
    desc: 'A web app to let new students/residents of Melbourne to discover unique places and events within the city.',
    parts: [
      {
        id: 0,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
      {
        id: 1,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
    ],
    tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
    summary: {
      position: 'position',
      organisation: 'organisation',
      year: '2020',
      work: 'front-end development',
      link: 'www.com',
    },
    link: "gps"
  },
  {
    id: 3,
    title: 'foodiy',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: color,
    desc: 'foodiy',
    parts: [
      {
        id: 0,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
      {
        id: 1,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
    ],
    tools: ['React Native', 'JavaScript', 'Firebase'],
    summary: {
      position: 'position',
      organisation: 'organisation',
      year: '2020',
      work: 'front-end development',
      link: 'www.com',
    },
    link: "foodiy"
  },
  {
    id: 4,
    title: 'greenfields',
    subtitle: {
      organisation: 'Personal Project',
      work: 'Front-End Development',
      year: '2020',
    },
    image: color,
    desc: 'Greenfields Website',
    parts: [
      {
        id: 0,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
      {
        id: 1,
        title: 'part title',
        image: 'part image',
        desc: 'part desc',
        tools: ['JavaScript', 'React', 'Firebase']
      },
    ],
    tools: ['React', 'JavaScript', 'HTML', 'CSS', 'AWS'],
    summary: {
      position: 'position',
      organisation: 'organisation',
      year: '2020',
      work: 'front-end development',
      link: 'www.com',
    },
    link: "greenfields"
  },
]

export default function Projects() {

  let { path, url } = useRouteMatch();

  return (
      <Switch>
        <Route exact path={path}>
        <div className="content" >
        <h2>PROJECTS</h2>
        <div className="grid">
          {projects.map((project) =>
            <ProjectElem link={`${url}/${project.link}`} image={project.image} desc={project.desc} tools={project.tools} />
          )}
        </div>
      </div>
        </Route>
        <Route path={`${path}/:projectId`}>
          <ProjectContent projects={projects} />
        </Route>
      </Switch>
  )
}