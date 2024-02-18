import { useState } from "react";

import wtsp from "/images/whatsapp.png";
import insta from "/images/instagram.png";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/aboout.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import Stay from "./components/stay/stay.jsx";
import Rooms from "./components/rooms/rooms.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/services/sevices.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    

      <Hero />
      <div className="whatsappapp">
        <a href="https://wa.me/+918591960434">
          <img src={wtsp} className="whatsap" alt="" />
        </a>

        <a href="https://www.instagram.com/hotelvinyasa?igsh=YngwZXNjdGNmOGE3">
          <img src={insta} className="whatsap" alt="" />
        </a>
      </div>

      <Welcome />
    
      <About />
      <Rooms />
      <Stay />

      <Services />
      <Reviews />

      <Footer />
    </>
  );
}

export default App;
