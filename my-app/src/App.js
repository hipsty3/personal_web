import React from 'react';
import './App.scss';
import Footer from './components/organisms/Footer'
import MainContent from './pages/MainContent'
import Navbar from './components/organisms/Navbar'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

import {
  Route, Switch, BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
