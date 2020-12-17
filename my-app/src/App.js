import React from 'react';
import './App.scss';
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
