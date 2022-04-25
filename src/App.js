import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import AboutUs from "./components/about_us";
import Prefooter from "./components/prefooter";
import Footer from "./components/footer";
import Contacts from "./components/contact_us";
import Events from "./components/events";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <AboutUs />
      <Events />
      <Prefooter />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
