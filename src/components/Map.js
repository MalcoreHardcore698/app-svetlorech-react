import React, { Component } from 'react'

class MarketMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "toggle": 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
      const button = document.getElementById("sv-map-tab-button-" + id)
      const content = document.getElementById("sv-map-tab-content-" + id)

      if (id === 1) {
        const button_alt = document.getElementById("sv-map-tab-button-2")
        const content_alt = document.getElementById("sv-map-tab-content-2")

        const button_alt_alt = document.getElementById("sv-map-tab-button-3")
        const content_alt_alt = document.getElementById("sv-map-tab-content-3")

        content.style.display = "flex";
        content_alt.style.display = "none";
        content_alt_alt.style.display = "none";

        button.style.backgroundColor = "#FFCC01";
        button.style.color = "#fff";

        button_alt.style.backgroundColor = "#0c54a0";
        button_alt.style.color = "#4993D0";

        button_alt_alt.style.backgroundColor = "#0c54a0";
        button_alt_alt.style.color = "#4993D0";
      }
      else if (id === 2) {
        const button_alt = document.getElementById("sv-map-tab-button-1")
        const content_alt = document.getElementById("sv-map-tab-content-1")

        const button_alt_alt = document.getElementById("sv-map-tab-button-3")
        const content_alt_alt = document.getElementById("sv-map-tab-content-3")

        content.style.display = "flex";
        content_alt.style.display = "none";
        content_alt_alt.style.display = "none";

        button.style.backgroundColor = "#FFCC01";
        button.style.color = "#fff";

        button_alt.style.backgroundColor = "#0c54a0";
        button_alt.style.color = "#4993D0";

        button_alt_alt.style.backgroundColor = "#0c54a0";
        button_alt_alt.style.color = "#4993D0";
      }
      else {
        const button_alt = document.getElementById("sv-map-tab-button-2")
        const content_alt = document.getElementById("sv-map-tab-content-2")

        const button_alt_alt = document.getElementById("sv-map-tab-button-1")
        const content_alt_alt = document.getElementById("sv-map-tab-content-1")

        content.style.display = "flex";
        content_alt.style.display = "none";
        content_alt_alt.style.display = "none";

        button.style.backgroundColor = "#FFCC01";
        button.style.color = "#fff";

        button_alt.style.backgroundColor = "#0c54a0";
        button_alt.style.color = "#4993D0";

        button_alt_alt.style.backgroundColor = "#0c54a0";
        button_alt_alt.style.color = "#4993D0";
      }

      this.setState({ id })
  }

  render() {
    return(
      <section className="sv-map">
        <div className="sv-map-tabs">
          {this.props.data.marketmap.map((map, i) =>
            <button id={"sv-map-tab-button-" + (i + 1)} className="sv-map-tab-button" onClick={() => this.handleClick((i + 1))}>{map.title}</button>
          )}
        </div>

        {this.props.data.marketmap.map((map, i) =>
          <div id={"sv-map-tab-content-" + (i + 1)} className="sv-map-tab-content">
            <img className="sv-map-tab-image" src={map.img} alt="Map" />
          </div>
        )}
      </section>
    )
  }
}

export default MarketMap
