import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { IoClose } from "react-icons/io5";
import "./gallery.css";

import event from "/images/event.webp";
import img2 from "/images/home3.webp";
import img3 from "/images/home3.webp";
import img4 from "/images/home4.webp";
import img6 from "/images/home6.webp";
import img5 from "/images/home5.webp";
import img7 from "/images/home7.webp";
import img8 from "/images/home8.webp";
import img9 from "/images/home9.webp";
import img10 from "/images/home10.webp";
import img11 from "/images/home11.webp";
import img12 from "/images/home12.webp";
import img13 from "/images/home13.webp";
import img14 from "/images/home14.webp";
import img16 from "/images/home16.webp";
import img1 from "/images/hone1.webp";

import wtsp from "/images/whatsapp.png";
import insta from "/images/instagram.png";


 

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img16,
    }, {
      id: 10,
      imgSrc: img10,
    }, {
      id: 11,
      imgSrc: img11,
    }, {
      id: 12,
      imgSrc: img12,
    }, {
      id: 13,
      imgSrc: img13,
    }, {
      id: 14,
      imgSrc: img14,
    },
    
    {
      id: 15,
      imgSrc: event,
    },
  ];

  const [model, setmodel] = useState(false);
  const [tempimgSrc, setimgSrc] = useState("");

  const getimg = (imgSrc) => {
    setimgSrc(imgSrc);
    setmodel(true);
  };

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

      <div>
        <div className="gallery_cont1">
          <h1 className="heading">rooms & suits</h1>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery_cont">
          <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} alt="s" />

            <IoClose onClick={() => setmodel(false)} />
          </div>

          <div className="gallery_image">
            {data.map((item, index) => {
              return (
                <div
                  className="pics"
                  key={index}
                  onClick={() => getimg(item.imgSrc)}
                >
                  <img src={item.imgSrc} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
