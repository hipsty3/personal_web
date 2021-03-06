import React from 'react';

const ProjectSummary = ({ summary }) => {
  return (
      <div className="part-summary">
        <div className="part-sub-summary">
        {Object.entries(summary).map((item) => {
          console.log(item[0]);
          return (
            <div className="summary-elem">
              <p className="summary-header">{item[0]}</p>
              {item[0] === 'link' && item[1] !== ''? <a href={item[1]}><p className="summary-content">{item[1]}</p></a> : <p className="summary-content">{item[1]}</p>}
            </div>
          )
        })}
        </div>
      </div>
  )
}

export default ProjectSummary;