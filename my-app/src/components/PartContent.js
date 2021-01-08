import React from 'react';

const PartContent = ({image, desc}) => {
  return (
    <div className="part-content">
      {/* <div className="project-img">{image}</div> */}
	  <img className="image" src={image}></img>
      <p className="project-desc">{desc}</p>
    </div>
  )
}

export default PartContent;