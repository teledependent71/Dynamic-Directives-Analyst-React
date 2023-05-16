import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Directives Analyst</title>
        <meta property="og:title" content="Dynamic Directives Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
