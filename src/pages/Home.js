import React from "react";
import "../components/styles.css";
import Cursor from "../components/cursor";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

function Home() {
  return (
    <>
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
