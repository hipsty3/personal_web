import React from 'react';
import ProjectPart from './ProjectPart';
import PartContent from './PartContent';
import ProjectSummary from './ProjectSummary';
import ProjectSubtitle from './ProjectSubtitle';
import {  useParams} from "react-router-dom";

const ProjectContent = ({ projects }) => {
  let { projectId } = useParams();
  const [project, setProject] = React.useState(projects.find(project => project.link === projectId)  );
  
  return (
    <div className="project-content">
      <h1 className="project-title">{project.title}</h1>
      <ProjectSubtitle subtitle={project.subtitle} />
      <PartContent desc={project.desc} image={project.image} />
      {(project.parts).map((part) =>
        <ProjectPart title={part.title} image={part.image} desc={part.desc} tools={part.tools} />)
      }
      {/* <ProjectSummary summary={project.summary} /> */}
    </div>
  )
}

export default ProjectContent;