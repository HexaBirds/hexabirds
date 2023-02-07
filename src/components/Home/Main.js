import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import BG1 from "../../assets/images/background/slider-3-1.jpg";
import BG2 from "../../assets/images/background/slider-3-2.jpg";
import BG3 from "../../assets/images/background/service-1-bg-1.png";
import BG4 from "../../assets/images/shapes/testi-bg-2-1.png";
import AnimatedNumber from "animated-number-react";
import image1 from "../../assets/images/resources/resource-image-2.jpg";
import image2 from "../../assets/images/resources/resources-image-1.jpg";
import serviceimg1 from "../../assets/images/services/service-1-1.png";
import serviceimg2 from "../../assets/images/services/service-1-2.jpg";
import serviceimg3 from "../../assets/images/services/service-1-3.jpg";
import contact from "../../assets/images/resources/contact-two-1.jpg";
import client1 from "../../assets/images/resources/testi-1-1.jpg";
import project1 from "../../assets/images/projects/project-1-1.png";

const Home3 = () => {
  const [ytShow, setytShow] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  };
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
  const serviceOptions = {
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 1,
        margin: 30,
      },
      1200: {
        items: 2,
        margin: 30,
      },
      1700: {
        items: 3,
        margin: 30,
      },
    },
  };
  const sliderOptions = {
    loop: true,
    items: 1,
    navText: [
      '<span class="fa-solid fa-angle-left"></span>',
      '<span class="fa-solid fa-angle-right"></span>',
    ],
    margin: 0,
    dots: true,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  };
  const projectOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    navText: [
      '<span class="fa-solid fa-angle-left"></span>',
      '<span class="fa-solid fa-angle-right"></span>',
    ],
    dots: false,
    margin: 0,
    items: 1,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 0,
        items: 1,
      },
      768: {
        margin: 30,
        items: 2,
      },
      992: {
        margin: 30,
        items: 3,
      },
      1200: {
        margin: 30,
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="slider-one slider-three">
        <OwlCarousel
          className="slider-one__carousel owl-theme thm-owl__carousel"
          {...sliderOptions}
        >
          <div className="item slider-one__slide-1">
            <div
              className="slider-one__bg"
              style={{ backgroundImage: `url(${BG1})` }}
            ></div>
            <div className="slider-one__shape-1"></div>
            <div className="slider-one__shape-2"></div>
            <div className="container">
              <div className="slider-one__content text-center">
                <div className="slider-one__floated lettering-text">
                  HEXABIRDS
                </div>
                <p className="slider-one__text">Ready For The Future</p>
                <div className="slider-one__title-wrapper">
                  <h2 className="slider-one__title">
                    Where Innovation Meets <br /> The Real World
                  </h2>
                </div>
                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn slider-one__btn">
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item slider-one__slide-2">
            <div
              className="slider-one__bg"
              style={{ backgroundImage: `url(${BG2})` }}
            ></div>
            <div className="slider-one__shape-1"></div>
            <div className="slider-one__shape-2"></div>
            <div className="container">
              <div className="slider-one__content text-center">
                <div className="slider-one__floated lettering-text">
                  HEXABIRDS
                </div>
                <p className="slider-one__text">Welcome to best IT Solutions</p>
                <div className="slider-one__title-wrapper">
                  <h2 className="slider-one__title">
                    Future Belongs to
                    <br /> Technology
                  </h2>
                </div>
                <div className="slider-one__btns">
                  <Link to="/about" className="thm-btn slider-one__btn">
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <Link to="/service-01">Quality Service</Link>
                </h3>
                <p className="service-card-two__text">
                  We always focus on Quality instead of Quantity.
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-smart-tv"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <Link to="/team">Expert Team</Link>
                </h3>
                <p className="service-card-two__text">
                  Have the chance to speak with highly skilled developers.
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-link"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <Link to="/contact">Excellent Support</Link>
                </h3>
                <p className="service-card-two__text">
                  We provide assistance every day of the week, round-the-clock.
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-technical-support"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <Link to="/about">Management</Link>
                </h3>
                <p className="service-card-two__text">
                  Greatest management group you've ever worked with.
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-cctv"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom about-six">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-six__content">
                <div className="section-title">
                  <p className="section-title__text">
                    Welcome to hexabirds tech
                  </p>
                  <h2 className="section-title__title">
                    Best Talent, Competitive Cast, Incredible IT Service
                    Infrastructure
                  </h2>
                </div>
                <div className="about-six__text">
                  System is a term used to refer to an organized collection
                  symbols and processes that may be used to operate on such
                  symbols. Perspiciatis unde omnis natus error voluptatems
                  accusa.
                </div>
                <ul className="about-six__list">
                  <li className="about-six__list__item">
                    <i className="far fa-check-circle about-six__list__icon"></i>
                    <h3 className="about-six__list__title count-box">
                      <span className="count-text">
                        <AnimatedNumber
                          value={130}
                          duration={150}
                          formatValue={(v) => Math.round(v)}
                        />
                      </span>
                    </h3>
                    <div className="about-six__list__text">
                      Satisfied Clients
                    </div>
                  </li>
                  <li className="about-six__list__item">
                    <i className="far fa-check-circle about-six__list__icon"></i>
                    <h3 className="about-six__list__title count-box">
                      <span className="count-text">
                        <AnimatedNumber
                          value={150}
                          duration={1500}
                          formatValue={(v) => Math.round(v)}
                        />
                      </span>
                    </h3>
                    <div className="about-six__list__text">
                      Projects Relased
                    </div>
                  </li>
                </ul>
                <div className="about-six__btns">
                  <Link to="/about" className="thm-btn">
                    <span>learn more</span>
                  </Link>
                  <Link to="/service-01" className="about-six__link">
                    How it Work
                    <i className="fa fa-angle-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-six__images wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <img src={image2} alt="Hexabirds resources 1" />
                <img src={image1} alt="Hexabirds resources 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-padding--top section-padding--bottom service-three black-bg"
        style={{ backgroundImage: `url(${BG3})` }}
      >
        <div className="container">
          <div className="service-three__block">
            <div className="row">
              <div className="col-lg-7">
                <div className="section-title">
                  <p className="section-title__text">What We offier</p>
                  <h2 className="section-title__title section-title__title--light">
                    Help you Overcome your Technology Challenges
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="service-three__block__text">
                  Accusa ntium doloremque laudantium totam rem aperiamea queipsa
                  quae abillo inventore veritatis.
                </div>
              </div>
            </div>
          </div>
          <ul className="service-three__list">
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <i className="icon-coding service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">Website</Link>
              </h3>
            </li>
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <i className="icon-apple service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">IOS</Link>
              </h3>
            </li>
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <i className="icon-android service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">Android</Link>
              </h3>
            </li>
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <i className="icon-iot service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">IOT</Link>
              </h3>
            </li>
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <i className="icon-smartband service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">Wearalables</Link>
              </h3>
            </li>
            <li
              className="service-three__list__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <i className="icon-tv service-three__list__icon"></i>
              <h3 className="service-three__list__title">
                <Link to="#">TV</Link>
              </h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-one cta-one--home-three">
        <div className="container">
          <div
            className="cta-one__inner  wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="cta-one__circle"></div>
            <div className="section-title ">
              <h2 className="section-title__title section-title__title--light">
                Ready to Get Free Consulations <br />
                for Any Kind of it Solutions?
              </h2>
            </div>
            <div className="cta-one--home-three__btns">
              <Link
                to="/contact"
                className="thm-btn thm-btn--light cta-one__btn"
              >
                <span>Get A Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding--bottom section-padding--top service-one">
        <div className="container-fluid">
          <OwlCarousel
            className="thm-owl__carousel service-one__carousel"
            {...serviceOptions}
          >
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src={serviceimg1} alt="service 1" />
                  {/* <div className="service-card-one__logo">W</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title">
                    <Link to="/cyber-security">Web Development</Link>
                  </h3>
                  <p className="service-card-one__text">
                    Lorem Ipsum is dummy text of the new design printng and type
                    setting Ipsum has been the is industrys.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src={serviceimg2} alt="service 2" />
                  {/* <div className="service-card-one__logo">A</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title">
                    <Link to="/cyber-security">App Development</Link>
                  </h3>
                  <p className="service-card-one__text">
                    Lorem Ipsum is dummy text of the new design printng and type
                    setting Ipsum has been the is industrys.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src={serviceimg3} alt="service 3" />
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title">
                    <Link to="/cyber-security">UI/UX Design</Link>
                  </h3>
                  <p className="service-card-one__text">
                    Lorem Ipsum is dummy text of the new design printng and type
                    setting Ipsum has been the is industrys.
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section
        className="section-padding--bottom section-padding--top gray-bg testimonials-one background-repeat-no background-position-top-center"
        style={{ backgroundImage: `url(${BG4})` }}
      >
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Our clients</p>
            <h2 className="section-title__title">Trusted Worldwide Peoples</h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src={client1} width="100" height="100" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">
                    Amazing Company: after finding a lot of platforms for weeks
                    to do my job, only this company could pull this off. They
                    were incredibly talented, and they even assisted me until
                    the very last step. helped me and finished I will definitely
                    work with this team again. They did a very fast job, too.
                  </div>
                  <h3 className="testimonials-one-card__title">Ajay Boora</h3>
                  <p className="testimonials-one-card__designation">
                    Physics Professor
                  </p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-one-card">
                <div className="testimonials-one-card__image">
                  <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                </div>
                <div className="testimonials-one-card__content">
                  <div className="testimonials-one-card__text">
                    <b>Hexabirds</b> keeps surprising me. As a business owner,
                    I've frequently dealt with negative attitudes in new hires
                    and projects. You don’t need to handhold them for every
                    little thing. They ask for permission before proceeding and
                    deliver an amazing service. Great job!
                  </div>
                  <h3 className="testimonials-one-card__title">
                    Sandeep Banga
                  </h3>
                  <p className="testimonials-one-card__designation">
                    Owner - SK Steel Fabrications
                  </p>
                  <i className="icon-right-quote testimonials-one-card__icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom section-padding--top project-two">
        <div className="container-fluid">
          <div className="section-title text-center">
            <p className="section-title__text">Latest Project</p>
            <h2 className="section-title__title">Check Done IT Project</h2>
          </div>

          <OwlCarousel className="thm-owl__carousel" {...projectOptions}>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src={project1} alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      A Complete Vehicle Assistance
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Primefixx</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img
                    src="assets/images/projects/project-2-2.jpg"
                    alt="hexabirds"
                  />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      A Complete Vehicle Assistance
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Primefixx</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-3.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      IT Technology Solution
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Data Recovery Analysis</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-4.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      IT Technology Solution
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Data Recovery Analysis</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-1.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      IT Technology Solution
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Data Recovery Analysis</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-2-2.jpg" alt="" />
                </div>
                <div className="project-card-one__content">
                  <div className="project-card-one__content__inner">
                    <p className="project-card-one__text">
                      IT Technology Solution
                    </p>
                    <h3 className="project-card-one__title">
                      <Link to="/project-details">Data Recovery Analysis</Link>
                    </h3>
                    <Link
                      to="/project-details"
                      className="project-card-one__more"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom contact-two">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="contact-two__image">
                <img
                  src={contact}
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
                <Link
                  to="#"
                  onClick={() => setytShow(true)}
                  className="video-popup contact-two__video"
                >
                  <i className="fa fa-play"></i>
                  <i className="ripple"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-two__content">
                <div className="section-title">
                  <p className="section-title__text section-title__text--light">
                    Contact with us
                  </p>

                  <h2 className="section-title__title section-title__title--light">
                    Join Us To Get IT Free Consultations
                  </h2>
                </div>
                <form
                  action="assets/inc/sendemail.php"
                  className="contact-one__form contact-form-validated"
                >
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
                    <div className="col-lg-6 col-md-12">
                      <input type="text" placeholder="Phone" name="phone" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <select name="services" className="niceselect">
                        <option value="department">Department</option>
                        <option value="department">Department</option>
                        <option value="department">Department</option>
                        <option value="department">Department</option>
                      </select>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <textarea
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button
                        className="thm-btn thm-btn--light contact-one__btn"
                        type="submit"
                      >
                        <span>send message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding--top section-padding--bottom blog-one--home-three">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Direct from the Blog Posts</p>
            <h2 className="section-title__title">
              Checkout Our Latest <br />
              News & Articles
            </h2>
          </div>
          <div className="row gutter-y-30">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      July, 25, 2022
                    </div>
                    <Link to="/blog" className="blog-card-one__category">
                      Designer
                    </Link>
                  </div>
                  <h3 className="blog-card-one__title">
                    <Link to="/blog-details">
                      Web design done Delightful Visualization Examples
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    Read More
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      July, 25, 2022
                    </div>
                    <Link to="/blog" className="blog-card-one__category">
                      Graphic
                    </Link>
                  </div>
                  <h3 className="blog-card-one__title">
                    <Link to="/blog-details">
                      Technology Support Allows Erie non-profit to Serve
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    Read More
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="blog-card-one">
                <div className="blog-card-one__image">
                  <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                  <Link to="/blog-details"></Link>
                </div>
                <div className="blog-card-one__content">
                  <div className="blog-card-one__meta">
                    <div className="blog-card-one__date">
                      <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                      July, 25, 2022
                    </div>
                    <Link to="/blog" className="blog-card-one__category">
                      SEO
                    </Link>
                  </div>
                  <h3 className="blog-card-one__title">
                    <Link to="/blog-details">
                      Software Makes Your Profit Double if You Scale Properly
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-card-one__more">
                    Read More
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      {ytShow && (
        <div className="YouTubePopUp-Wrap">
          <div className="YouTubePopUp-Content">
            <span
              className="YouTubePopUp-Close"
              onClick={() => setytShow(false)}
            ></span>
            <iframe
              src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
              title="ytvideo"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Home3;
