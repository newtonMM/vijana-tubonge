import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import AboutUs from "./components/about_us";
import Prefooter from "./components/prefooter";
import Footer from "./components/footer";
import Contacts from "./components/contact_us";
import Events from "./components/events";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="scroll-smooth">
        <Navbar />

        <div className="w-10/12 my-0 mx-auto">
          <Carousel />
          <AboutUs />
          <Events />
          <Prefooter />
          <Contacts />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
