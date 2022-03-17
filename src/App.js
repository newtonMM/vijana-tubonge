import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import AboutUs from "./components/about_us";
import Gallery from "./components/gallery";
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
      {/* <Gallery /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
