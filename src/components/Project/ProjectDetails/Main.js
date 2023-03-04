import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Breadcumb from "../../Breadcumb/Main";
import primefix from "../../../assets/images/projects/primefix.jpg";

const ProjectDetails = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    items: 1,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 3,
        margin: 30,
      },
    },
  };
  return (
    <>
      <Breadcumb Title="Project Deatils" Breadcumb="PROJECT" />
      <section className="project-details section-padding--bottom section-padding--top">
        <div className="container">
          <div className="project-details__image">
            <img src={primefix} alt="primefix" />
          </div>
          <div className="project-details__info">
            <div className="project-details__info__item">
              <h4 className="project-details__info__title">Clients:</h4>
              <p className="project-details__info__text">David Jackson</p>
            </div>

            <div className="project-details__info__item">
              <h4 className="project-details__info__title">Category:</h4>
              <p className="project-details__info__text">
                <Link to="#">IT</Link>, <Link to="#">Technology</Link>
              </p>
            </div>
            <div className="project-details__info__item">
              <h4 className="project-details__info__title">Date:</h4>
              <p className="project-details__info__text">28 July, 2022</p>
            </div>

            <div className="project-details__info__item">
              <div className="project-details__info__social">
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <h3 className="project-details__title">Prime Fixx</h3>
          <div className="project-details__content">
            <p>
              PRIMEFIXX is a Tech based company which provides the best-in-class
              vehicle assistance services at your convenient location. Your
              safety is our priority, our services are aimed to help you at the
              most difficult situations. Our team strives to provide top quality
              services at the best possible price. At PRIMEFIXX, our top
              priority is to provide a peaceful and hassle-free experience with
              a strong value proposition for all our services and products. Our
              aim is to bring you transparency, greater accessibility and
              convenience at agreeably affordable prices.
            </p>
            <ul className="project-details__list">
              <li>
                <i className="fa fa-check-circle"></i>
                <a href="https://play.google.com/store/apps/details?id=com.primefixx.primexxcustomer">
                  Primefixx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="project-nav">
        <div className="container">
          <div className="project-nav__inner">
            <Link to="#">
              <i className="icon-left-arrow"></i>
              Previous
            </Link>
            <Link to="#">
              Next
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* <section className="section-padding--top section-padding--bottom">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">similar projects</p>
            <h2 className="section-title__title">
              Check We Have Similar <br />
              IT Projects
            </h2>
          </div>

          <OwlCarousel className="thm-owl__carousel" {...options}>
            <div className="item">
              <div className="project-card-one">
                <div className="project-card-one__image">
                  <img src="assets/images/projects/project-1-1.jpg" alt="" />
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
                  <img src="assets/images/projects/project-1-2.jpg" alt="" />
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
                  <img src="assets/images/projects/project-1-3.jpg" alt="" />
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
      </section> */}
    </>
  );
};

export default ProjectDetails;
