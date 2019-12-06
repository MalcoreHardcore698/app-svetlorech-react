import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../data/data'

const News = () => {
  let news = []

  data.pages.map((item, i) => {
    if (item.type === "news") news.push(item)
    return null
  })

  return(
    <section className="sv-news">
      <h1>Новости</h1>
      <div className="sv-news-bricks">
        {news.map((item, i) =>
          <NavLink to={"page_" + item.id}>
            <article key={i}>
              <img className="sv-news-background" src={item.img} alt="Article" />
              <div className="sv-news-content">
                <p className="sv-data">{item.date}</p>
                <h4 className="sv-title">{item.title}</h4>
                <p className="sv-text">{item.preview}</p>
              </div>
            </article>
          </NavLink>
        )}
      </div>
    </section>
  )
}

export default News
