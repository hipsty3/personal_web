import React from 'react';

export default function ProjectElem(props) {
	return (
		<div className="project_box" >
			<div className="description_box">
				<p className="description">{props.description}</p>
			</div>
			<a className="image_link" href="https://www.google.com/">
				<img className="image" src={props.image}></img>
			</a>
		</div>
	)
}