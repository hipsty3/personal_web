import React from 'react';
import { NavLink } from "react-router-dom";

export default function ProjectElem(props) {
  const [hover, setHover] = React.useState(false);

  return (
    <NavLink to={props.link}>
      <div className="project_box" >
        <a className="proj-image-link">
          <img className="proj-image" src={props.image}></img>
          <div className="proj-elem-details">
            <p className="proj-elem-desc">{props.title}</p>
            <div className="tools">
              {
                props.tools.map((tool) =>
                  <>
                    <div className='tool'><p className='tool_text'>{tool}</p></div>
                  </>
                )
              }
            </div>
          </div>
        </a>
      </div>
    </NavLink>
  )
}