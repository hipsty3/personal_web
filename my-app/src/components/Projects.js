import React from 'react';
import './../styles/Projects.scss';
import './ProjectElem'
import me from './../me.jpg';

import ProjectElem from './ProjectElem';

const projects = [
	{
		id: 0,
		image: me,
		description: 'hello0'
	},
	{
		id: 1,
		image: me,
		description: 'hello1'
	},
	{
		id: 2,
		image: me,
		description: 'hello2'
	},
	{
		id: 3,
		image: me,
		description: 'hello3'
	},
	{
		id: 4,
		image: me,
		description: 'hello4'
	},
	{
		id: 5,
		image: me,
		description: 'hello'
	},
	{
		id: 6,
		image: me,
		description: 'hello'
	},
	{
		id: 7,
		image: me,
		description: 'hello'
	},
	{
		id: 8,
		image: me,
		description: 'hello'
	},
]

export default function Projects() {
	return (
		<div className="content" >
			<h1>Projects</h1>

			<div className="grid">
				{projects.map((project) =>
					<ProjectElem image={project.image} description={project.description} />
				)}

			</div>
			<ul>
				<li><a href="http://goblox.herokuapp.com/">GPS: Get People Socializing</a></li>
				<li>Mementos</li>
				<li>This website!</li>
				<li>Shadowbuild</li>
			</ul>
		</div>
	)
}