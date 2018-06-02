import React,{ Component } from 'react';
import Header from './Header.js';
import Summary from './Summary.js';
import ContactInfo from './ContactInfo.js';

class PortfolioContent extends Component {
  render() {
    return (
      <div class="portfolio-content">
        <Header/>
        <Summary/>
        <ContactInfo/>
      </div>
    );
  }
}

export default PortfolioContent;
