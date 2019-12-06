import React, { Component, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Popup from './components/Popup'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import data from './components/data/data'

import './../node_modules/hamburgers/dist/hamburgers.css'
import './css/_fonts.css'
import './css/index.css'
import './css/_media.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "home"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleClickPopup() {
    let _popup = document.getElementById("sv-popup")
    let _bg = document.getElementById("sv-background")

    if (_popup.className === "sv-popup show") {
      _popup.className  = "sv-popup hidden"
      _bg.className  = "sv-background hidden"
    }
    else {
      _popup = "sv-popup show"
      _bg = "sv-background show"
    }
  }

  handleScroll(selector) {
    this.setState(state => {
      let btn = document.querySelector(selector)
      btn.scrollIntoView({ block: "start", behavior: "smooth" })
    })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sv-background" id="sv-background" onClick={this.handleClickPopup}></div>

          <Popup />
          <HeadScroll onScroll={this.handleScroll} />

          <Header data={data} />
          <Main data={data} />
          <Footer data={data} />
        </div>
      </BrowserRouter>
    )
  }
}

const HeadScroll = ({ onScroll }) => {
  useEffect(() => {
    let scroll = document.querySelector('.sv-scroll-button')

    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 568) scroll.style.opacity = 1
      else scroll.style.opacity = 0
    }, true)
  })
  return (
    <div className="sv-scroll">
      <button id="sv-scroll-button" onClick={() => onScroll('header')} className="sv-scroll-button"><i className="fas fa-sort-up"></i></button>
    </div>
  )
}

export default App
