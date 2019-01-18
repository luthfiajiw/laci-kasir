import React, { Component } from 'react';
import Navbar from './Navbar';

class Landing extends Component {
    render() {
        return (
            <section className="landing">
              <Navbar/>

              <section className="jumbotron">
                <section className="jumbo-text">
                  <h1 className="display-4">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4"/>
                </section>
                <button className="ml-4 my-5 btn btn-primary btn-lg" href="#" role="button">Learn more</button>
              </section>
            </section>
        );
    }
}

export default Landing;
