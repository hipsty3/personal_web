import React from 'react';
import './../styles/Projects.scss';
import './ProjectElem'
import color from './../images/color.jpg';
import mementos from './../images/mementos2.png';
import gps from './../images/gps2.png';


import ProjectElem from './ProjectElem';

const projects = [
	{
		id: 0,
		image: color,
		description: 'This Website!',
		tools: ['React', 'JavaScript', 'SASS', 'AWS'],
		link: "http://goblox.herokuapp.com/"
	},
	{
		id: 1,
		image: mementos,
		description: 'Android app that keeps track of family heirloom to be passed down to future generations.',
		tools: ['React Native', 'JavaScript', 'Android', 'Firebase'],
		link: "https://github.com/hipsty3/mementos"
	},
	{
		id: 2,
		image: gps,
		description: 'A web app to let new students/residents of Melbourne to discover unique places and events within the city.',
		tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
		link: "https://github.com/hipsty3/Go-Blox-GPS"
	},
	// {
	// 	id: 3,
	// 	image: color,
	// 	description: 'Shadowbuild',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
	// {
	// 	id: 4,
	// 	image: color,
	// 	description: 'Cookpad2 (coming soon)',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
	// {
	// 	id: 5,
	// 	image: color,
	// 	description: 'Simple List (coming soon)',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
	// {
	// 	id: 6,
	// 	image: color,
	// 	description: 'NN_SNEK (coming soon)',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
	// {
	// 	id: 7,
	// 	image: color,
	// 	description: 'Pokedex WebApp (coming soon)',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
	// {
	// 	id: 8,
	// 	image: color,
	// 	description: 'Experimental WebApp (coming soon)',
	// 	tools: ['JavaScript', 'Pug', 'Firebase', 'Heroku'],
	// 	link: "http://goblox.herokuapp.com/"
	// },
]

export default function Projects() {
	return (
		<div className="content" >
			<h2>PROJECTS</h2>
			<div className="grid">
				{projects.map((project) =>
					<ProjectElem link={project.link} image={project.image} description={project.description} tools={project.tools} />
				)}
			</div>
		</div>
	)
}