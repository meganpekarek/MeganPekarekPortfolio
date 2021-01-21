import '../App.css';
import React from 'react'
import MPLogo from '../images/MPLogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="nav__wrapper">
        <div className="nav__itemsWrapper">
          <nav className="nav__item">Home</nav>
          <nav className="nav__item">About Me</nav>
          <nav className="nav__item">Resume</nav>
          <nav className="nav__item">Contact</nav>
        </div>
        <div className="nav__logoWrapper">
          <img className="nav__mpLogo" src={MPLogo} />
        </div>
      </section>
    );
  }
}
export default Nav;