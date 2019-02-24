import React, { Component } from 'react';
import Header from './components/header-footer/Header';
import Featured from './components/featured/';
import VenueInfo from './components/VenueINFO';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header-footer/Footer';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height : '1000px'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
