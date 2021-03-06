import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <Link to="/video">Watch the video</Link>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2.</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
