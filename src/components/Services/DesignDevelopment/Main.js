import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../../Breadcumb/Main";
import ServiceSidebar from "../ServiceSidebar/Main";
import design from "../../../assets/images/services/design.jpg";
import serviceConst from "../../../assets/images/services/serviceConst.png";

const CyberSecurity = () => {
  const [clicked, setClicked] = useState(0);
  const faqs = [
    {
      question: "What IT services does our company provide?",
      answer:
        "Hexabirds provides a wide range of IT solutions like Website development and Applications for both Android and IOS platform. We can provide full-service website design and development, including e-commerce solutions, content creation, and search engine optimization (SEO) to ensure your website is fully optimized for maximum visibility and performance.",
    },
    {
      question: "Do you offer website maintenance and support services?",
      answer:
        "Our team of experts provides ongoing support and maintenance services to ensure your website is always up-to-date, secure, and optimized for performance. From regular software updates and security patches to content updates and backups, we've got you covered.",
    },
    {
      question: "How long does it typically take to develop a website?",
      answer:
        "The web development process typically involves several stages, including planning, design, development, testing, and deployment. The timeline for each stage may vary based on the specific requirements of the project. A simple website with a few pages and basic features can be built in a few days or a week, while a more complex website with advanced features and custom design can take several weeks or months to complete.",
    },
    {
      question: "How you can contact us?",
      answer:
        "you can visit our website and look for Contact Us section. You can call us any time on our service numbers. And also you can mail us on our given email addresses.",
    },
  ];

  return (
    <>
      <Suspense
        fallback={
          <div class="preloader">
            <div class="preloader__circle"></div>
          </div>
        }
      >
        <Breadcumb Title="UI/UX Design" Breadcumb="SERVICES" />
        <section className="section-padding--bottom section-padding--top service-details--page">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="service-details__image">
                  <img src={design} alt="design" />
                </div>
                <h3 className="service-details__title">UI/UX Desing</h3>
                <div className="service-details__content">
                  <p>
                    Are you in need of a <b>website</b> to promote your business
                    or personal brand? Look no further! Our website services
                    offer everything you need to get your online presence up and
                    running.
                  </p>
                  <p>
                    Our team of expert web developers will work with you to
                    create a website that reflects your unique style and meets
                    your specific needs. Whether you need a simple one-page
                    website or a more complex e-commerce site, we've got you
                    covered. We use the latest web development technologies to
                    ensure your website is responsive, fast, and secure. We also
                    offer search engine optimization (SEO) services to help your
                    site rank higher in search engine results pages and attract
                    more visitors.
                  </p>
                  <h4>Why Choose we ?</h4>
                  <ul>
                    <li>
                      Experience and expertise: Look for a software company that
                      has a proven track record of delivering quality work and
                      has experience in working with businesses similar to
                      yours. This can ensure that they understand your needs and
                      can provide solutions that are tailored to your
                      requirements.
                    </li>
                    <li>
                      Range of services: Choose a software company that offers a
                      wide range of services, including software development,
                      web development, mobile app development, cloud computing,
                      and other related services. This can save you time and
                      money by providing you with a one-stop-shop for all your
                      software needs.
                    </li>
                    <li>
                      Quality of work: Look for a software company that has a
                      reputation for delivering high-quality work. You can check
                      their portfolio to see the quality of their work, and read
                      reviews from their previous clients to get an idea of
                      their level of customer satisfaction.
                    </li>
                  </ul>
                </div>
                <div className="row gutter-y-30 service-details__box-wrapper">
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__box">
                      <i className="service-details__box__icon icon-consulting"></i>
                      <div className="service-details__box__content">
                        <h3 className="service-details__box__title">
                          <Link to="/contact">IT Consultant</Link>
                        </h3>
                        <p className="service-details__box__text">
                          You are welcome to discuss your concept with our
                          experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__box">
                      <i className="service-details__box__icon icon-chip"></i>
                      <div className="service-details__box__content">
                        <h3 className="service-details__box__title">
                          <Link to="/contact">IT Specialist</Link>
                        </h3>
                        <p className="service-details__box__text">
                          You will learn about innovative technology from our
                          professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutter-y-30">
                  <div className="col-md-6 col-sm-12">
                    <img
                      src={serviceConst}
                      className="service-details__sub-image"
                      alt="serviceConst"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__caption">
                      <h3 className="service-details__caption__title">
                        Our Benefits
                      </h3>
                      <p className="service-details__caption__text">
                        We offer incredibly effective services.
                      </p>
                      <ul className="service-details__caption__list">
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Better customer experience.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Work efficiency and faster response time.
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Get competitive advantage in the market.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="accrodion-grp service-details__accrodion"
                      data-grp-name="service-details__accrodion-1"
                    >
                      {faqs.map((item, index) => (
                        <div
                          className={`accrodion wow fadeInUp ${
                            index === clicked && "active"
                          }`}
                          key={index}
                          data-wow-delay="0ms"
                        >
                          <div className="accrodion-title">
                            <h4 onClick={() => setClicked(index)}>
                              {item.question}
                              <span className="accrodion-icon"></span>
                            </h4>
                          </div>
                          {index === clicked && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-column">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default CyberSecurity;
