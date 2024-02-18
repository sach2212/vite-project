import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
// import Link from "react-router-dom"
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";


const Footer = () => {
  return (



    <div className="footer">

<div className="foo_container">
      
      <div className="footer_head">
        <h1>
          vinyasa <br /> <span>residency</span>{" "}
        </h1>
      </div>
      <div className="footer_cont">
        <div className="fo_cont">
          <h2>quick links</h2>
          <p>
            {" "}
            <Link to="//vinyasaresidency.com">home</Link>{" "}
          </p>
          <p>
            <Link to="/vinyasaresidency.com/contact">contact</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/vinyasaresidency.com/about">about</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/vinyasaresidency.com/gallery">gallery</Link>
          </p>
        </div>

        <div className="fo_cont">
          <h2>keywords</h2>

          <p>
            
            {" "}
            <a href="https://www.google.com/travel/search?q=vinyasa%20residency&g2lb=2502548%2C2503771%2C2503781%2C2504510%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72430562%2C72440516%2C72448541%2C72458066%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72472051%2C72473738%2C72473841%2C72479990%2C72480007%2C72484736%2C72485656%2C72486593&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2JlN2IxMzUyMGFmYjY4ZDoweGFmMmI1MGQxYzFmNGE0MmQSHBIUCgcI6A8QARgeEgcI6A8QARgfGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyKENob0lyY2pTajV5YTFKV3ZBUm9OTDJjdk1URndYekZ6TlRBd1loQUI4AkIJCS2k9MHRUCuvQgkJLaT0wdFQK68&ap=ugEIb3ZlcnZpZXc&ictx=1">
              budget hotels for couples
            </a>{" "}
          </p>
          <p>
            {" "}
            <a href="https://www.google.com/travel/search?q=vinyasa%20residency&g2lb=2502548%2C2503771%2C2503781%2C2504510%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72430562%2C72440516%2C72448541%2C72458066%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72472051%2C72473738%2C72473841%2C72479990%2C72480007%2C72484736%2C72485656%2C72486593&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2JlN2IxMzUyMGFmYjY4ZDoweGFmMmI1MGQxYzFmNGE0MmQSHBIUCgcI6A8QARgeEgcI6A8QARgfGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyKENob0lyY2pTajV5YTFKV3ZBUm9OTDJjdk1URndYekZ6TlRBd1loQUI4AkIJCS2k9MHRUCuvQgkJLaT0wdFQK68&ap=ugEIb3ZlcnZpZXc&ictx=1">
              budget hotels in mumbai
            </a>{" "}
          </p>
          <p>
            {" "}
            <a href="https://www.google.com/travel/search?q=vinyasa%20residency&g2lb=2502548%2C2503771%2C2503781%2C2504510%2C4258168%2C4284970%2C4291517%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72430562%2C72440516%2C72448541%2C72458066%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72472051%2C72473738%2C72473841%2C72479990%2C72480007%2C72484736%2C72485656%2C72486593&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2JlN2IxMzUyMGFmYjY4ZDoweGFmMmI1MGQxYzFmNGE0MmQSHBIUCgcI6A8QARgeEgcI6A8QARgfGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyKENob0lyY2pTajV5YTFKV3ZBUm9OTDJjdk1URndYekZ6TlRBd1loQUI4AkIJCS2k9MHRUCuvQgkJLaT0wdFQK68&ap=ugEIb3ZlcnZpZXc&ictx=1">
              affordable hotels near mumbai
            </a>{" "}
          </p>
        </div>

        <div className="fo_cont">

          <h2>contact us</h2>
        
          <p>
            {" "}
            <a href="tel:+918591960434">
              {" "}
              <IoCall className="call" />
              8591960434{" "}
            </a>{" "}
          </p> 
        
          
          
          <p>
            {" "}
            <a href="tel:+919699691949">
              {" "}
              <IoCall className="call" />
              9699691949{" "}
            </a>{" "}
          </p>  
          <p>
            {" "}
            <a href="">
            <FaFlag/> only locals are permitted
            </a>{" "}
          </p> 
          <p className="address">
            {" "}
            <a href="https://www.google.com/maps?hl=en-GB&gl=IN&um=1&ie=UTF-8&fb=1&sa=X&geocode=KY22ryA1sec7MS2k9MHRUCuv&daddr=Hotel+Vinyasa+Residency,+Bakery+Galee,+BP+Rd,+Bhayandar,+Venkateshwar+Nagar,+Bhayandar+East,+Mira+Bhayandar,+Maharashtra+401105">
              {" "}
              Bakery Galee, BP Rd, Venkateshwar Nagar <br /> Bhayandar East, <br />
              Mira Bhayandar, Maharashtra 401105
            </a>
          </p>
         
        </div>
      </div>
      </div>
      <div className="credit">

      <p>© 2024 hoetl vinyasa Residency</p>
      
      <a href=""><p>develop by webserv</p></a>
      </div>
      {/* <p>develop by webserv</p> */}


    </div>
  );
};

export default Footer;
