import React from 'react';

const PartContent = ({ image, desc }) => {
  return (
    <div className="part-content">
      <div className="image-container">
        {image === '' ? <></> : <img className="image-content" src={image}></img>}
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  )
}

export default PartContent;