import React from 'react';

const PartSubtitle = ({subtitle}) => {
  return (
    <div className="part-subtitle">
      <p className="sub">{subtitle.organisation} • {subtitle.work} • {subtitle.year}</p>
    </div>
  )
}

export default PartSubtitle;