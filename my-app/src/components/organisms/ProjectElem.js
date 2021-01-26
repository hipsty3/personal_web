import React from 'react';
import { NavLink } from "react-router-dom";

export default function ProjectElem(props) {
  return (
    <NavLink to={props.link}>
      <div className="project_box" >
        <a className="image_link">
          <img className="image" src={props.image}></img>
          <div className="description_box">
            <p className="description_proj">{props.desc}</p>
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