import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const selectedStyle = {
    color: "#ffcc01"
  }

  return(
    <header>
      <div className="sv-header-logotype"><NavLink to="/" activeStyle={selectedStyle}><img src="img/logotype.png" alt="Logotype" /></NavLink></div>

      <nav className="sv-header-navigation">
        <ul>
          <li><NavLink to="news" activeStyle={selectedStyle}>Новости</NavLink></li>
          <li><NavLink to="markets" activeStyle={selectedStyle}>Магазины</NavLink></li>
          <li><NavLink to="rental" activeStyle={selectedStyle}>Аренда</NavLink></li>
          <li><NavLink to="contact" activeStyle={selectedStyle}>Как добраться</NavLink></li>
        </ul>
      </nav>

      <div className="sv-header-telephone">
        <a href="tel:89193890375"><i className="fas fa-phone"></i></a>
        <HeadMenuButton />
      </div>
    </header>
  )
}

const HeadMenuButton = () => {
  const [toggle, setToggle] = useState('not-active')

  return (
    <button onClick={() => {
       let menu = document.querySelector('.sv-header-navigation ul')
       let scroll = document.querySelector('.sv-scroll-button')
       let background = document.querySelector('.sv-background')
       if (toggle === 'not-active') {
        setToggle('is-active')
        menu.className += ' show_m'
        background.className += ' show'
        document.body.className += 'swing'
        scroll.className += ' swing'
       }
       else {
        setToggle('not-active')
        menu.className = ''
        background.className = 'sv-background'
        document.body.className = ''
        scroll.className = 'sv-scroll-button'
       }

       background.addEventListener('click', () => {
        setToggle('not-active')
        menu.className = ''
        background.className = 'sv-background'
        document.body.className = ''
        scroll.className = 'sv-scroll-button'
       })
    }} className={"hamburger hamburger--slider sv-toggle-menu " + toggle}><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
  )
}

export default Header
