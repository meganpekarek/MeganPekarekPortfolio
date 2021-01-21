import '../App.css';
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home__wrapper">
        <div className="home__headerContent">
            <div className="home__titleSection">
                <h1 className="home__header">Megan Pekarek</h1>
                <h3 className="home__subheader">Front End Developer and UX/UI Designer</h3>
            </div>
            <div className="home__infoSection">
                <div className="home__devInfo">
                    dev info here
                </div>
                <div className="home__designInfo">
                    design info here
                </div>
            </div>
        </div>
      </section>
    );
  }
}
export default Home;