import React, { Component } from 'react';
import Header from './components/header-footer/Header';
import Featured from './components/featured/';
import VenueInfo from './components/VenueINFO';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header-footer/Footer';
import { Element } from 'react-scroll';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height : '1000px'}}>
        <Header />
        <Element name="Featured">
          <Featured />
        </Element>
        <Element name="VenueInfo">
          <VenueInfo /> 
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Element name="Footer">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
