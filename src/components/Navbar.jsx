import React from "react";
import { IoMdCall } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import contact from "./../components/page/contact";
import vr from "/images/vr1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";

import wtsp from "/images/whatsapp.png";
import insta from "/images/instagram.png";

import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toogle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <section>
        <div className="header">
          <div className="logo">
            <h1>
              <img src={vr} alt="" className="vrlogo" />
              {/* vinyasa <span>residency</span> */}
            </h1>
          </div>
          <div className={`menu ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com">home</Link>{" "}
              </li>
           
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/places">places</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/about">about</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/gallery">gallery</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/contact">contact</Link>{" "}
              </li>
         
            </ul>
          </div>

          <div className="booknow_header">
            <a href="https://wa.me/+918591960434" >
              Book Now
            </a>
            {/* <a href="" > <IoMdCall /> 9699691949</a> */}
          </div>

          <div className="icons" onClick={toogle}>
            <RiMenu2Fill />
          </div>

          <div className={isOpen ? "mobile_menu active" : "mobile_menu"}>
            <MdClose
              className="icons-close"
              onClick={() => setIsopen(!isOpen)}
            />
            {/* <RiMenu2Fill className="icons"  onClick={() => setnav(!isOpen)} /> */}

            <ul className="mobile_ul">
              <li>
                {" "}
                <Link to="/vinyasaresidency.com">home</Link>{" "}
              </li>
        

              <li>
                {" "}
                <Link to="/vinyasaresidency.com/places">places</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/about">about</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/gallery">gallery</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/vinyasaresidency.com/contact">contact</Link>{" "}
              </li>

              <li>
            
                <a href="tel:+918591960434" className="callnow">
                 <p className="callnow"> call now</p>  
                </a>

                
              </li>
.com.com
              <li className="whatsapp li">
              <div className="whatsapp">
        <a href="https://wa.me/+985919 60434">
          <img src={wtsp} className="whatsap" alt="" />
        </a>

        <a href="https://www.instagram.com/hotelvinyasa?igsh=YngwZXNjdGNmOGE3">
          <img src={insta} className="whatsap" alt="" />
        </a>
      </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
