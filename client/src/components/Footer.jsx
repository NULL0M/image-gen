// src/components/Footer.jsx

import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div class="row">
        <div class="col">
          <img src="../assets/imageAIGeneratorLogo.png" alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, ratione ipsam repellat, iure dolore quas error doloribus
            culpa repudiandae vero quo quis qui suscipit architecto magnam
            soluta repellendus fugit libero?
          </p>
        </div>
        <div class="col">
          <h3>Office <div className="underline"> <span></span></div></h3>
          <p>itpl Road</p>
          <p>Adresse</p>
          <p>land</p>
          <p class="email-id">drywurts@gmail.com</p>
          <h4>0800666777</h4>
        </div>
        <div class="col">
          <h3>Links <div className="underline"> <span></span></div></h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h3>Newsletter <div className="underline"> <span></span></div></h3>
          <form>
            <FaRegEnvelope />
            <input type="email" placeholder="Enter you email id" required />
            <button type="sumit">
              {" "}
              <FaArrowRight />{" "}
            </button>
          </form>
          <div class="social-icons">
            <SlSocialInstagram />
            <TiSocialTwitter />
            <TiSocialInstagram />
            <SlSocialFacebook />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright"> All rights reserved AI imageGenerator© 2024 </p>


      {/* <div className="subfooter">
        <div className="theteam">
          <h3 className="the-team">The Team</h3>
          <div className="teammembername-parent">
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">{`Copyright - Aleksandra `}</h4>
            </div>
            <div className="teammembername">
             <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Alex</h4>
            </div>
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Ali</h4>
            </div>
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Deolindo Baptista</h4>
            </div>
          </div>
        </div>
        <div className="logofooter">
          <a className="logofooter-child" />
          <p className="thanks-for-watching-container">
            <span className="thanks">
              <span>THANKS</span>
            </span>
            <span className="for-watching">
              <span>FOR WATCHING</span>
            </span>
          </p>
          <p className="all-rights-reserved"> All rights reserved</p>
        </div>
        <div className="theteam">
          <h2 className="the-team">Friendly Links</h2>
          <div className="teammembername-parent">
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">{`Copyright - Aleksandra `}</h4>
            </div>
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Alex</h4>
            </div>
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Ali</h4>
            </div>
            <div className="teammembername">
              <FaRegCopyright className="copyright-icon" />
              <h4 className="the-team">Copyright - Deolindo Baptista</h4>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};
