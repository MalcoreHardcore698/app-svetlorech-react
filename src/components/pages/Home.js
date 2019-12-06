import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'infinite-react-carousel'
import MarketMap from './../Map'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(selector) {
    this.setState(state => {
      let btn = document.querySelector(selector);
      btn.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  };

  render() {
    const data = this.props.data
    let pages = []

    pages.push(data.pages[2])
    pages.push(data.pages[3])
    pages.push(data.pages[4])
    pages.push(data.pages[5])
    pages.push(data.pages[6])

    const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
    }

    data.cardblocks.map((item, i) => pages.push(item))
    shuffle(pages)

    return(
      <section className="sv-home">
        <Slider className="sv-home-carousel" dots>
          <div className="sv-item">
            <img className="sv-item-background" src="img/carousel/background2.jpg" alt="Background" />
            <div className="sv-item-content">
              <div className="sv-content">
                <h2>Бесплатный паркинг для гостей</h2>
                <p>Новый Год не за горами! Если вы все еще сомневаетесь что купить и где провести время с близкими, то мы ждем Вас</p>
                <button onClick={() =>
                  this.handleScroll('.sv-home-bricks')}>Узнать больше</button>
              </div>
            </div>
          </div>

          <div className="sv-item">
            <img className="sv-item-background" src="img/carousel/background1.jpg" alt="Background" />
            <div className="sv-item-content">
              <div className="sv-content">
                <h2>Бесплатный паркинг для гостей</h2>
                <ul>
                  <li>Дискотеки на батутах</li>
                  <li>Бесплатные пробные занятия</li>
                  <li>По новым направлениям</li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>

        <div className="sv-home-bricks">
          {pages.map((page, i) =>
            (page.type === "news") ?
              <NavLink to={"page_" + page.id}>
                <article className={(page.type === "news") ? "sv-linkblock" : "sv-textblock"}>
                  <img className="sv-image" src={page.img} alt="Article" />
                  <div className="sv-content">
                    <h4 className="sv-title">{page.title}</h4>
                    <p className="sv-text">{(page.type === "news") ? page.preview : page.desc}</p>
                    {(page.type === "news") ? <button className="sv-button">Подробнее</button> : ""}
                  </div>
                </article>
              </NavLink> :
              <article className={(page.type === "news") ? "sv-linkblock" : "sv-textblock"}>
                <img className="sv-image" src={page.img} alt="Article" />
                <div className="sv-content">
                  <h4 className="sv-title">{page.title}</h4>
                  <p className="sv-text">{(page.type === "news") ? page.preview : page.desc}</p>
                  {(page.type === "news") ? <button className="sv-button">Подробнее</button> : ""}
                </div>
              </article>
          )}
        </div>

        <MarketMap data={data} />
      </section>
    )
  }
}

export default Home
