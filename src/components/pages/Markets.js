import React from 'react'
import MarketMap from '../Map'
import data from '../data/data'

const Markets = () => {
  return(
    <section className="sv-markets">
      <h1>Магазины</h1>

      <MarketMap data={data} />
      
      <div className="sv-markets-bricks">
        {data.markets.map((market, i) =>
          <article key={i}>
            <img className="sv-markets-background" src={market.img} alt="Market" />
            <div className="sv-markets-content">
              {market.icon !== "" ? <img className="sv-image" src={market.icon} alt="Article" /> : ""}
              <h4 className="sv-title">{market.title}</h4>
              <p className="sv-text">{market.desc}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Markets
