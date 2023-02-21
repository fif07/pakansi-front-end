import React, { Component } from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import landingPage from '../json/landingPage.json'
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories'
import Testimony from '../parts/Testimony'
import Footer from '../parts/Footer'

export default class LandingPage extends Component {
    constructor(props) {
    super(props);
    this.refPilihanFavorit = React.createRef();
  }
  
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refPilihanFavorit={this.refPilihanFavorit} data={landingPage.ikon}/>
        <MostPicked
          refPilihanFavorit={this.refPilihanFavorit}
          data={landingPage.pilihanFavorit}
        />
        <Categories data={landingPage.kategori}/>
        <Testimony data={landingPage.testimoni}/>
        <Footer/>
      </>
    )
  }
}
