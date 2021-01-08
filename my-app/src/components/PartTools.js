import React from 'react';
import PartTool from './PartTool.js';

const PartTools = ({tools}) => {
  return (
    <div className="part-tools">
      <h3 className="tools-title">Tools</h3>
      {tools.map((tool) => <PartTool tool={tool} />)}
    </div>
  )
}

export default PartTools;