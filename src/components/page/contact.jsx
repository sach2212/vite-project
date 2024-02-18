import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { IoCall } from "react-icons/io5";

 
import wtsp from "/images/whatsapp.png";
import insta from "/images/instagram.png";


const contact = () => {
  return (
    <>
      <Navbar />

      <div className="whatsappapp">
        <a href="https://wa.me/+918591960434">
          <img src={wtsp} className="whatsap" alt="" />
        </a>

        <a href="https://www.instagram.com/hotelvinyasa?igsh=YngwZXNjdGNmOGE3">
          <img src={insta} className="whatsap" alt="" />
        </a>
      </div>

      <div className="gallery_cont1">
        <h1 className="heading">Contact Us</h1>
      </div>


<div className="map_container">

      <div className="map_cont">
        <div className="cont_content">
          <h1 className="heading">
             GET IN TOUCH
          </h1>
          <div className="socialicons">
            <p>
              <span>
                <IoLocationSharp />{" "}
              </span>{" "}
              Hotel Vinyasa Residency, Bakery Galee, BP Rd, <br />
            Venkateshwar Nagar, Bhayandar East 401105{" "}
            </p>
            <p>
              <span>
                <IoCall />{" "}
              </span>
              <a href="tel:+9185919 60434"> 085919 60434</a>
           
            </p>
            <p>
              <span>
                <IoCall />{" "}

              </span>
              <a href="tel:+9185919 60434"> 9699691949 </a>
 
            </p> 
            
            <p>
              <span>
                <SiWhatsapp />{" "}

              </span>
              <a href="https://wa.me/+918591960434"> 8591960434 </a>
            </p>
          </div>
        </div>

        <div
          className="mapouter"
          style={{    }}
        >
          <div
            className="gmap_canvas"
            style={{
              // overflow: "hidden",
              background: "none!important",
              // height: "100%",
              // width: "100%",
            }}
          >
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Hotel%20Vinyasa%20Residency,%20Bakery%20Galee,%20BP%20Rd,%20Bhayandar,%20Venkateshwar%20Nagar,%20Bhayandar%20East,%20Mira%20Bhayandar,%20Maharashtra%20401105&t=k&z=20&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://2yu.co">2yu</a>
          </div>

          <style>{`.mapouter{text-align:right;}`}</style>
          <a href="https://embedgooglemap.2yu.co/"> </a>
          <style>{`.gmap_canvas {overflow:hidden;background:none!important;}`}</style>
        </div>
      </div>
      </div>
      <Footer />
    </>

  );
};

export default contact;
