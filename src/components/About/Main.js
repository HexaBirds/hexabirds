import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import BG2 from "../../assets/images/shapes/testi-bg-1-1.png";
import Breadcumb from "../Breadcumb/Main";
import { Parallax } from "react-parallax";
import client1 from "../../assets/images/resources/client1.jpg";
import aboutteam from "../../assets/images/resources/about-team.png";
import poonam from "../../assets/images/resources/poonam.png";
import servicebg from "../../assets/images/background/servicebg.png";
import vikash from "../../assets/images/team/vikash.png";
import nisha from "../../assets/images/team/Nisha.png";
import sahil from "../../assets/images/team/sahil2.png";
import joginder from "../../assets/images/team/joginder.png";
import aashu from "../../assets/images/team/Aashu.png";
import rakesh from "../../assets/images/team/rakesh.png";
const About = () => {
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<span class="fa-solid fa-angle-left"></span>',
      '<span class="fa-solid fa-angle-right"></span>',
    ],
    dots: false,
    margin: 30,
    items: 2,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 30,
        items: 2,
      },
      375: {
        margin: 30,
        items: 2,
      },
      575: {
        margin: 30,
        items: 3,
      },
      767: {
        margin: 50,
        items: 4,
      },
      991: {
        margin: 40,
        items: 5,
      },
      1199: {
        margin: 80,
        items: 5,
      },
    },
  };
  return (
    <>
      <Breadcumb Title="About Us" Breadcumb="ABOUT" />
      <section className="about-four section-padding--top">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-four__image">
                <img
                  src={aboutteam}
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="section-title__title">
                    The World’s Networking Company
                  </h2>
                </div>
                <div className="about-four__text">
                  Our software company is a leading provider of innovative
                  software solutions for businesses of all sizes. We specialize
                  in developing software applications that help organizations
                  streamline their operations, increase productivity, and
                  improve their bottom line.
                </div>

                <div className="about-four__meta">
                  <div className="about-four__author">
                    <img src={poonam} width="80" height="80 " alt="poonam" />
                    <div className="about-four__author__content">
                      <h3 className="about-four__author__title">
                        Poonam Sheoran
                      </h3>
                      <div className="about-four__author__designation">
                        Founder CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Our Team members</p>
            <h2 className="section-title__title">
              Our Expert Person to Provide <br /> IT Solution Services
            </h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="team-card-one__image">
                  <img src={joginder} alt="joginder" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Joginder Saini</Link>
                  </h3>

                  <p className="team-card-one__designation">
                    App Developer & Designer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="team-card-one__image">
                  <img src={rakesh} alt="rakesh" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Rakesh Sheoran</Link>
                  </h3>

                  <p className="team-card-one__designation">
                    Front-End Developer & UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="team-card-one__image">
                  <img src={sahil} alt="sahil boora" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Sahil Boora</Link>
                  </h3>

                  <p className="team-card-one__designation">App Developer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="team-card-one__image">
                  <img src={nisha} alt="nisha" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Nisha Saini</Link>
                  </h3>

                  <p className="team-card-one__designation">App Developer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="team-card-one__image">
                  <img src={aashu} alt="aashu" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Aashu Saini</Link>
                  </h3>

                  <p className="team-card-one__designation">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-card-one wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <div className="team-card-one__image">
                  <img src={vikash} alt="vikash" />
                  <div className="team-card-one__social">
                    <ul className="team-card-one__social__links">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {/* <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li> */}
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="team-card-one__social__icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="team-card-one__content">
                  <h3 className="team-card-one__title">
                    <Link to="#">Vikash Boora</Link>
                  </h3>

                  <p className="team-card-one__designation">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="black-bg cta-two">
        <Parallax
          bgImage={servicebg}
          bgImageAlt=""
          className="cta-two__bg section-padding-lg--top section-padding-lg--bottom"
          strength={300}
        >
          <div className="container">
            <div className="cta-two__inner">
              <h3 className="cta-two__title">
                Better IT Solutions And Services At Your <span>Fingertips</span>
              </h3>
              <Link to="/contact" className="thm-btn cta-two__btn">
                <span>LEarn More</span>
              </Link>
            </div>
          </div>
        </Parallax>
      </section>
      {/* <section
        className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
        style={{ backgroundImage: `url(${BG2})` }}
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-two__content">
                <div className="section-title ">
                  <p className="section-title__text">Our clients</p>
                  <h2 className="section-title__title">
                    We Are Trusted Worldwide Peoples
                  </h2>
                </div>
                <div className="testimonials-two__content__text">
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusa ntium doloremque laudantium totam rem aperiamea queipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </div>
                <div className="testimonials-two__content__text">
                  Pellentesque gravida lectus vitae nisi luctus, Finibus aliquet
                  ligula ultrices.
                </div>
                <Link
                  to="/about"
                  className="thm-btn testimonials-two__content__btn"
                >
                  <span>View All feedbacks</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonials-two__items">
                <div className="row gutter-y-30">
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                      <div className="testimonials-one-card__image">
                        <img
                          src={client1}
                          height="100"
                          width="100"
                          alt="ajay"
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                          On the other hand denounc with ghteo indignation and
                          dislike men who so beguiled and demoralized the charms
                          of pleasure the momen blinded by desire cannot foresee
                          the pain and trouble.
                        </div>
                        <h3 className="testimonials-one-card__title">
                          Michal Rahul
                        </h3>
                        <p className="testimonials-one-card__designation">
                          Ul - UX Designer
                        </p>
                        <i className="icon-right-quote testimonials-one-card__icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                      <div className="testimonials-one-card__image">
                        <img
                          src="assets/images/resources/testi-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                          On the other hand denounc with ghteo indignation and
                          dislike men who so beguiled and demoralized the charms
                          of pleasure the momen blinded by desire cannot foresee
                          the pain and trouble.
                        </div>
                        <h3 className="testimonials-one-card__title">
                          Jessica Brown
                        </h3>
                        <p className="testimonials-one-card__designation">
                          Ul - UX Designer
                        </p>
                        <i className="icon-right-quote testimonials-one-card__icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="client-carousel client-carousel--two">
        <div className="container">
          <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
            <div className="item">
              <img src="assets/images/resources/client-1-1.png" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div> */}
    </>
  );
};

export default About;
