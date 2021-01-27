import React from 'react';
import PartContent from '../atoms/PartContent';
import PartTools from './PartTools';

const ProjectPart = ({title, image, desc, tools }) => {
  return (
    <div className="project-part">
      {title ? <h2 className="project-comp-title">{title}</h2> : <></>}
      <PartContent desc={desc} image={image} />
      {tools.length ? <PartTools tools={tools} /> : <></>}
    </div>
  )
}

export default ProjectPart;