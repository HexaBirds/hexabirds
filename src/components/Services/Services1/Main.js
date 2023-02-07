import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Breadcumb from '../../Breadcumb/Main'
import BG from '../../../assets/images/background/cta-two-bg-1-1.jpg'

const Service1 = () => {
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    dots: false,
    margin: 30,
    items: 2,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 30,
        items: 2
      },
      375: {
        margin: 30,
        items: 2
      },
      575: {
        margin: 30,
        items: 3
      },
      767: {
        margin: 50,
        items: 4
      },
      991: {
        margin: 40,
        items: 5
      },
      1199: {
        margin: 80,
        items: 5
      }
    }
  }
  const serviceOptions = {
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 1,
        margin: 30
      },
      1200: {
        items: 2,
        margin: 30
      },
      1700: {
        items: 3,
        margin: 30
      }
    }
  }
  return (
    <>
      <Breadcumb Title="Services 01" Breadcumb="SERVICES" />
      <section className="section-padding--top section-padding--bottom about-one">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="assets/images/resources/about-1-1.png" className="wow fadeInUp"
                  data-wow-duration="1500ms" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="section-title__title">Experts of Sofware and
                    Technology</h2>
                </div>
                <div className="about-one__text">
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form injected humour, or randomised words which don't look
                  even.
                </div>
                <ul className="about-one__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Refresing to get such a personal touch.
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Velit esse cillum dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <Link to="/about" className="thm-btn about-one__btn"><span>Learn More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-carousel client-carousel--two">
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
      </div>
      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div className="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
          style={{ backgroundImage: `url(${BG})` }}></div>
        <div className="container">
          <div className="cta-two__inner">
            <h3 className="cta-two__title">Better IT Solutions And Services
              At Your <span>Fingertips</span></h3>
            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom section-padding--top service-one">
        <div className="container-fluid">

          <OwlCarousel className="thm-owl__carousel service-one__carousel" {...serviceOptions}>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="" />
                  <div className="service-card-one__logo">G</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Gaming and
                    Entertainment</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="" />
                  <div className="service-card-one__logo">B</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Business and
                    Finance</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="" />
                  <div className="service-card-one__logo">T</div>
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Information
                    and Technology</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="section-padding--bottom">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="section-title__title">We Provide Best IT Solutions For Business <br />25 Years We Provide
              Solutions</h2>

          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/service-01">Quality Service</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-smart-tv"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/team">Expert Team</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-link"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/contact">Excellent Support</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-technical-support"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/about">Management</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-cctv"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
            <div className="cta-one__circle"></div>
            <div className="section-title ">
              <p className="section-title__text">Need Any Technology Solution</p>
              <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
            </div>
            <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service1