import React from 'react';
import ProjectPart from '../molecules/ProjectPart';
import PartContent from '../atoms/PartContent';
import ProjectSummary from '../molecules/ProjectSummary';
import ProjectSubtitle from '../molecules/ProjectSubtitle';
import { useParams } from "react-router-dom";
import { projects } from './../../services/database'

const ProjectContent = () => {
  let { projectId } = useParams();
  const [project, setProject] = React.useState(projects.find(project => project.link === projectId));
  return (
    <div className="project-content-container">
      <div className="project-content">
        <h1 className="project-title">{project.title}</h1>
        <ProjectSubtitle subtitle={project.subtitle} />
        <PartContent desc={project.desc} image={project.image} />
        {(project.parts).map((part) =>
          <ProjectPart title={part.title} image={part.image} desc={part.desc} tools={part.tools} />)
        }
        <ProjectSummary summary={project.summary} />
      </div>
    </div>
  )
}

export default ProjectContent;