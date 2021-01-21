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
                <div className="home__careerInfo">
                    <h3>&lt; Developer /&gt;</h3>
                    <div className="home__headerDesc">
                    My journey into the world of software started with my degree in Computer Science. I quickly realized that front end development is where it’s at. Bringing beautiful designs to life never gets old.
                    </div>
                </div>
                <div className="home__careerInfo">
                    <h3>Designer</h3>
                    <div className="home__headerDesc">
                    I love making pretty things, but what I am most passionate about is user research and testing. I want to know what my users want and why they want it. 
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}
export default Home;