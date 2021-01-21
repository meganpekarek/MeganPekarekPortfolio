import '../App.css';
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="nav__wrapper">
        <nav className="nav__item">Home</nav>
        <nav className="nav__item">About Me</nav>
        <nav className="nav__item">Resume</nav>
        <nav className="nav__item">Contact</nav>
      </section>
    );
  }
}
export default Nav;