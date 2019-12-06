import React, { useState } from 'react'
import {
  NavLink
} from 'react-router-dom'

const Footer = ({ data, onRedirect }) => {
  let [popup, showPopup] = useState("hidden");
  let _email
  const handlerSubmit = e => {
    e.preventDefault()
    _email.value = ''
    _email.focus()

    if (popup === "hidden") popup = "show"
    else popup = "hidden"
    showPopup(popup);

    let _popup = document.getElementById("sv-popup")
    let _bg = document.getElementById("sv-background")
    _popup.className = "sv-popup " + popup
    _bg.className = "sv-background " + popup
  }

  let articles = []

  data.pages.map((item, i) => {
    if (item.type === "article") articles.push(item)
    return null
  })

  const selectedStyle = {
    color: "#ffcc01"
  }

  return(
    <div className="sv-footer">
      <div className="sv-footer-subscibe">
        <h2>Подписаться на новости</h2>
        <form onSubmit={handlerSubmit}>
          <input ref={input => _email = input} name="email" type="text" placeholder="Ваш Email" />
          <button><i className="fas fa-caret-right"></i></button>
        </form>
      </div>
      <footer>
        <nav className="sv-footer-addition">
          <ul>
            {articles.map((article, i) =>
              <li key={i}><NavLink to={"page_" + article.id} activeStyle={selectedStyle}>{article.title}</NavLink></li>
            )}
          </ul>
        </nav>

        <div className="sv-footer-adress">
          <p>
            <span>По всем вопросам сотрудничества и аренды помещений:</span>
            <span>Бессонов Дмитрий Юрьевич</span>
            <span><a href="mail:bessonovd7676@mail.ru"><i className="fas fa-envelope"></i>bessonovd7676@mail.ru</a></span>
            <span><a href="tel:89090001617"><i className="fas fa-phone"></i>+7 909 000-16-17</a></span>
          </p>
        </div>

        <nav className="sv-footer-social">
          <ul>
            <li><a href="http://svetlorech.ru/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="http://svetlorech.ru/"><i className="fab fa-vk"></i></a></li>
            <li><a href="http://svetlorech.ru/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </nav>

        <div className="sv-footer-copyright">
          <p>Все права защищены &copy; 2019</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
