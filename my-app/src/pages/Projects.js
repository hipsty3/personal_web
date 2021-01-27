import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { projects } from './../services/database'
import './../styles/Projects.scss';
import '../components/organisms/ProjectElem'
import ProjectElem from '../components/organisms/ProjectElem';
import ProjectContent from '../components/organisms/ProjectContent';

export default function Projects() {

  let { path, url } = useRouteMatch();

  return (
      <Switch>
        <Route exact path={path}>
        <div className="content" >
        <h2>PROJECTS</h2>
        <div className="grid">
          {projects.map((project) =>
            <ProjectElem link={`${url}/${project.link}`} image={project.image} title={project.title} tools={project.tools} />
          )}
        </div>
      </div>
        </Route>
        <Route path={`${path}/:projectId`}>
          <ProjectContent projects={projects}/>
        </Route>
      </Switch>
  )
}