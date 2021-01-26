import React from 'react';
import PartTool from '../atoms/PartTool.js';

const PartTools = ({ tools }) => {
  return (
    <div className="part-tools-container">
      <h3 className="tools-title">Tools</h3>
      <div className="part-tools">
        {tools.map((tool) => <PartTool tool={tool} />)}
      </div>
    </div>
  )
}

export default PartTools;