import React from "react";
import "../components/styles.css";
import Cursor from "../components/cursor";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Aluko Brown</title>
        <meta name="description" content="Aluko Brown's portfolio website" />
        <link rel="canonical" href="/" />
        <meta name="keywords" content="Aluko Brown" />
        <meta property="og:url" title="" />
        <meta property="og:title" title="Aluko Brown" />
        <meta
          property="og:description"
          title="Aluko Brown's portfolio website"
        />
        <meta property="og:type" title="portfolio website" />

        <meta property="twitter:site" title="@AlukoBrown" />
        <meta property="twitter:title" title="Aluko Brown" />
        <meta
          property="twitter:description"
          title="Aluko Brown's portfolio website"
        />
        <meta property="twitter:creator" title="@AlukoBrown" />
      </Helmet>
      <div className="center">
        <Cursor />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
