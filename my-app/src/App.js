import React, { Component } from 'react';
import me from './me.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      !isTop ? this.setState({ scrolling: true }) : this.setState({ scrolling: false });
      console.log(window.scrollY);
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.scrolling ? 'nav scrolling' : 'nav'}>
          <div className="nav_text">
            <h1>R A I S A</h1>
          </div>
        </div>
        <div className="content">
          <img src={me} className="logo" alt="logo" />
          <div className="description-container">
            <div className="title">
              <h3>RAISA AMALIA</h3>
            </div>
            <div className="description">
              <p> Melbourne based Frontend Developer experienced in Web and Mobile Development.</p>
              <p>Currently a third year Computing and Software Systems Undergraduate in University of Melbourne. </p>
            </div>
          </div>
        </div>
        <div className="footer">
            <h4><a href="https://github.com/hipsty3">github</a> | <a href=
            "https://www.linkedin.com/in/ramalia/">linkedin</a> | raisaamaliaa@gmail.com </h4>
        </div>
      </div>
    );
  }

}
export default App;
