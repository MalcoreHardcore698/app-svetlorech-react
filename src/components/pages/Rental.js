import React, { Component } from 'react'
import data from '../data/data'

class Rental extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "toggle": 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
      const button = document.getElementById("sv-tab-button-" + id)
      const content = document.getElementById("sv-tab-content-" + id)

      if (id === 1) {
        const button_alt = document.getElementById("sv-tab-button-2")
        const content_alt = document.getElementById("sv-tab-content-2")

        content.style.display = "flex";
        content_alt.style.display = "none";

        button.style.backgroundColor = "#FFCC01";
        button.style.color = "#fff";
        button_alt.style.backgroundColor = "#0c54a0";
        button_alt.style.color = "#4993D0";
      } else {
        const button_alt = document.getElementById("sv-tab-button-1")
        const content_alt = document.getElementById("sv-tab-content-1")

        content.style.display = "flex";
        content_alt.style.display = "none";

        button.style.backgroundColor = "#FFCC01";
        button.style.color = "#fff";
        button_alt.style.backgroundColor = "#0c54a0";
        button_alt.style.color = "#4993D0";
      }

      this.setState({ id })
  }

  render() {
    return(
      <section className="sv-rental">
        <h1>Аренда</h1>

        <div className="sv-rental-tabs">
          <button id="sv-tab-button-1" className="sv-tab-button" onClick={() => this.handleClick(1)}>Аренда площадей</button>
          <button id="sv-tab-button-2" className="sv-tab-button" onClick={() => this.handleClick(2)}>Аренда оборудования</button>
        </div>

        <div className="sv-rental-bricks">
          {data.rental.map((item, i) =>
            <article key={i} id={"sv-tab-content-" + (i + 1)} className="sv-tab-content">
              <div className="sv-rental-content">
                <h4 className="sv-title">{item.title}</h4>
                <p className="sv-text">{item.text}</p>
              </div>
              <img className="sv-rental-background" src={item.img} alt="Article" />
            </article>
          )}
        </div>
      </section>
    )
  }
}

export default Rental
