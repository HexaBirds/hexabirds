import React from "react";
import { Link } from "react-router-dom";
import BG from "../../assets/images/background/contact-one-bg-1-1.png";
import Breadcumb from "../Breadcumb/Main";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for contact us`);
  };
  return (
    <>
      <Breadcumb Title="Contact" Breadcumb="CONTACT" />
      <section className="contact-one section-padding--top section-padding--bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
                className="contact-one__form contact-form-validated"
              >
                <div className="section-title">
                  <p className="section-title__text">Contact with us</p>
                  <h2 className="section-title__title">
                    Join Us To Get IT Free Consultations
                  </h2>
                </div>
                <div className="row ">
                  <div className="col-lg-6 col-md-12">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <textarea
                      name="message"
                      placeholder="Write message"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="thm-btn contact-one__btn" type="submit">
                      <span>send a message</span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
            <div className="col-lg-4">
              <div
                className="contact-one__info wow fadeInRight"
                data-wow-duration="1500ms"
                style={{ backgroundImage: `url(${BG})` }}
              >
                <div className="contact-one__item">
                  <h3 className="contact-one__item__title">Address</h3>
                  <p className="contact-one__item__text">
                    1st floor, Bansal Complex, <br />
                    Rishi Nagar, Hisar
                  </p>
                </div>
                <div className="contact-one__item">
                  <h3 className="contact-one__item__title">Phone</h3>
                  <p className="contact-one__item__text">
                    <span>+91 8950 40 2201</span>
                    <br />
                    <span>+91 8950 41 2201</span>
                  </p>
                </div>
                <div className="contact-one__item">
                  <h3 className="contact-one__item__title">Email</h3>
                  <p className="contact-one__item__text">
                    <span>Hexabirdspvtltd@gmail.com</span>
                    <br />
                    <span>support@hexabirds.com</span>
                  </p>
                </div>
                <div className="contact-one__item">
                  <ul className="contact-one__social">
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
            </div>
          </div>
        </div>
      </section>

      <section className="google-map google-map--contact">
        <iframe
          src="https://maps.google.com/maps?q=hisar&t=&z=10&ie=UTF8&iwloc=&output=embed"
          className="google-map__one"
          title="gmap"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
