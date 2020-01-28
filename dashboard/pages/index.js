import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from "next/Link"
import "../static/style.css"

const Home = () => (
  <div>
    <Head>
      <title>Next JS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <div className="hero">
      <h3>Burak Ketmen</h3>
    </div>
  </div>
)

export default Home
