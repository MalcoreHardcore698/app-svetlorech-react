import React from 'react'

const Page = ({ data }) => {
  return(
    <section className="sv-page">
      <div className="sv-page-date"><span>{data.date}</span></div>
      <h1>{data.title}</h1>
      <article className="sv-page-content">
        {(data.img !== "") ? <img className="sv-image" src={data.img} alt="Avatar" /> : ""}
        <p>{data.text}</p>
      </article>
    </section>
  )
}

export default Page
