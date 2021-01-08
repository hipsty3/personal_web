import React from 'react';

const PartSubtitle = ({organisation, work, year}) => {
  return (
    <div className="part-subtitle">
      <p className="sub-organisaton">{organisation}</p>
      <p className="sub-work">{work}</p>
      <p className="sub-year">{year}</p>
    </div>
  )
}

export default PartSubtitle;