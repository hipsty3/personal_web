import React from 'react';
import PartContent from './PartContent';
import PartTools from './PartTools';

const ProjectPart = ({title, image, desc, tools}) => {
  return (
    <div className="part-content">
      <h2 className="project-comp-title">{title}</h2>
      <PartContent desc={desc} image={image} />
      <PartTools tools={tools}/>
    </div>
  )
}

export default ProjectPart;