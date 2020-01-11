import React from 'react';
import './App.css';
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";


function App() {
	return (
		<HashRouter>
			<div className="container">
				<Navbar />
				<Route exact path="/" component={MainContent}/>
				<Route exact path="/projects" component={Projects}/>
				<Route exact path="/experience" component={Experience}/>
				<Route exact path="/contact" component={Contact}/>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
