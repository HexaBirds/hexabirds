import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logohexa-2.png";

const Footer = () => {
  const location = useLocation();
  const [footerPadding, setfooterPadding] = useState(false);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/service-01") {
      setfooterPadding(true);
    } else {
      setfooterPadding(false);
    }
  }, [location]);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for contact us`);
  };

  return (
    <>
      <div
        className={`footer-main section-padding--bottom ${
          footerPadding ? "footer-main--top-padding" : "section-padding--top"
        }`}
      >
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--about">
                <Link to="/" className="footer-widget__logo">
                  <img src={Logo} width="180" height="80" alt="Hexabirds" />
                </Link>
                <p className="footer-widget__text">
                  We work with a passion of taking challenges and creating new
                  ones in advertising sector.
                </p>
                <ul className="footer-widget__social">
                  <li>
                    <a
                      href="https://twitter.com/hexabirds"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/Hexabirds-106846692296438"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCmcESAokMpRUWAAF-ZSU4gg"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/hexabirds/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--links">
                <h3 className="footer-widget__title">Services</h3>
                <ul className="footer-widget__links">
                  <li>
                    <Link to="/cyber-security">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/it-management">IT Management</Link>
                  </li>
                  <li>
                    <Link to="/qa-testing">QA & Testing</Link>
                  </li>
                  <li>
                    <Link to="/infrastructure-plan">Infrastructure Plan</Link>
                  </li>
                  <li>
                    <Link to="/it-consultant">IT Consultent</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title">Subscribe</h3>
                <p className="footer-widget__text">
                  Sign up to receive the latest articles
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="footer-widget__newsletter mc-form"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter Your Email"
                  />
                  <button className="thm-btn footer-widget__newsletter__btn">
                    <span>Register</span>
                  </button>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="footer-widget__contact">
                  <li>
                    <i className="fa fa-phone"></i>

                    <span>+ 91 8950412201</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>support@hexabirds.com</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>hexabirdspvtltd@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    1st floor, Bansal Complex, Rishi Nagar, Hisar
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; All Copyright <span className="dynamic-year"></span> by
            Hexabirds
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
