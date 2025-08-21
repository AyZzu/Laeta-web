import React from "react";
import "../Pages/Home.css";

import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Talent from "../Component/Talent";
// import News from "../Component/News";
import Footer from "../Component/Footer";

import { Helmet } from "react-helmet";

const Home = () => (
  <div>
    <Helmet>
      <title>Laeta Indonesia</title>
    </Helmet>
    <Navbar />
    <Hero />
    <About />
    <Talent />
    {/* <News /> */}
    <Footer />
  </div>
);

export default Home;
