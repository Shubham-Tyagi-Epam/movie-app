/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import facebookIcon from "./../../assets/Images/facebook-icon.svg";
import linkedinIcon from "./../../assets/Images/linkedin-icon.svg";
import youtubeIcon from "./../../assets/Images/youtube-icon.svg";
import twitterIcon from "./../../assets/Images/twitter-icon.svg";
import googlePlayIcon from "./../../assets/Images/get-it-on-google-play-logo-svg-vector.svg";
import appStoreIcon from "./../../assets/Images/available-app-store.png";
import heartIcon from "./../../assets/Images/heart-icon.png";

const Footer = () => {
  return (
    <div className="footer-div text-light mt-5">
      <div className="all-footer-links p-5">
        <div className="footer">
          <h5>ABOUT</h5>
          <div>Contact Us</div>
          <div>About us</div>
          <div>Carrers</div>
          <div>ShubhMovies Stories</div>
          <div>Press</div>
          <div>ShubhMovies Wholesale</div>
          <div>Corporate Info</div>
        </div>
        <div className="footer">
          <h5>HELP</h5>
          <div>Payments</div>
          <div>Watchlist</div>
          <div>Cancellation and Returns</div>
          <div>FAQ</div>
          <div>Credit Cards</div>
          <div>Report</div>
          <div>Infringement</div>
        </div>
        <div className="footer">
          <h5>Policy</h5>
          <div>Return Policy</div>
          <div>Terms of Use</div>
          <div>Security</div>
          <div>Privacy</div>
          <div>Sitemap</div>
          <div>ERP Compilance</div>
        </div>
        <div className="footer">
          <h5>Make money with us</h5>
          <div>Sell on ShubhMovies</div>
          <div>Sell under ShubhMovies Accelerator</div>
          <div>ShubhMovies Global Selling</div>
          <div>Advertise Your Movies</div>
          <h5 style={{ marginTop: "3rem" }}>social</h5>
          <div>
            <span className="footer-icon">
              <a href="#">
                <img src={facebookIcon} width="30" alt="fb" />
              </a>
            </span>
            <span className="footer-icon">
              <a href="#">
                <img src={linkedinIcon} width="30" alt="linkenicon" />
              </a>
            </span>
            <span className="footer-icon">
              <a href="#">
                <img src={youtubeIcon} width="30" alt="youtubeicon" />
              </a>
            </span>
            <span className="footer-icon">
              <a href="#">
                <img src={twitterIcon} width="30" alt="twittericon" />
              </a>
            </span>
          </div>
          <div className="store">
            <span className="footer-store-img">
              <a href="#">
                <img src={googlePlayIcon} alt="googleplay" />
              </a>
            </span>
            <span className="footer-store-img">
              <a href="#">
                <img src={appStoreIcon} alt="appStore" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <hr className="less-width" />
      <div className="copywrite">
        <div>Copyright© 2022 . All rights Reserved.</div>
        <div>
          Made with{" "}
          <img
            src={heartIcon}
            width="15"
            style={{ transform: "translate(0,-10%)" }}
            alt="heartIcon"
          />{" "}
          by Shubham Tyagi
        </div>
      </div>
    </div>
  );
};

export default Footer;
