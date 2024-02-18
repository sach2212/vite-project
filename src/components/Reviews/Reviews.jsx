import React from "react";
import "./Reviews.css";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";

import { IoStar, IoStarHalfOutline } from "react-icons/io5";

import google from "/images/google (1).png";

const Reviews = () => {
  return (
    <div className="review">
      <h1 className="heading">reviews</h1>
      <div className="rev_cont">
        <div className="rev_slider">
          <Swiper
            className="swiper"
            modules={[Autoplay]}
            spaceBetween={50}
            effect={"fade"}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
            speed={500}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="SwiperSlide">
              <FaQuoteLeft className="quote" />

              <p>
                As a frequent traveler, I am thrilled to have discovered Vinyasa
                Hotels near Bhayandar Station. The rooms are top-notch, offering
                a luxurious experience at prices that won't burn a hole in your
                pocket. Kudos to the management!"
              </p>

              <h1>ivya thomas!</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <FaQuoteLeft className="quote" />
              <p>
                the vinyasa hotel resides near bhayandar staion which makes easy
                to travel to the hotel, loved your services
              </p>
              <h1>Charu Borasi</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <FaQuoteLeft className="quote" />
              <p>
                Nice hotel good staff happy Will visit again, best part its a
                budget hotel in mumbai and most affordabe also
              </p>
              <h1>yasar MEMON</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <FaQuoteLeft className="quote" />
              <p>
                the food was delicious and the staff were too friendly best
                hotels for couples near station
              </p>
              <h1>Aman Vasistha</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
              <FaQuoteLeft className="quote" />
              <p>
                {" "}
                The hotel staff people are very nice Very well taken care of the
                manager also very nice Thank you Hotel Vishana Residency.
              </p>
              <h1> Mukesh Singh</h1>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="testimonial">
          <h2>
            {" "}
            hAPPY <br /> CUSTOMER{" "}
          </h2>

          <div className="rating">
            <h3>4.4</h3>
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStarHalfOutline className="icon" />
          </div>

          <div className="google">
            <img src={google} alt="" />
            <a href="https://www.google.com/travel/search?q=vinyasa%20residency&g2lb=2502548%2C2503771%2C2503781%2C2504510%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72430562%2C72440516%2C72448541%2C72458066%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72472051%2C72473738%2C72473841%2C72479990%2C72480007%2C72484736%2C72485656%2C72486593&hl=en-IN&gl=in&ssta=1&ts=CAEaRwopEicyJTB4M2JlN2IxMzUyMGFmYjY4ZDoweGFmMmI1MGQxYzFmNGE0MmQSGhIUCgcI6A8QARgeEgcI6A8QARgfGAEyAhAA&qs=CAEyFENnc0lyY2pTajV5YTFKV3ZBUkFCOAJCCQktpPTB0VArr0IJCS2k9MHRUCuv&ap=ugEHcmV2aWV3cw&ictx=1&ved=0CAAQ5JsGahcKEwjIlrf7jISEAxUAAAAAHQAAAAAQCw">
              review us on google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
