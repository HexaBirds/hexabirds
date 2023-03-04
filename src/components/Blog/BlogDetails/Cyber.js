import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../../Breadcumb/Main";
import BlogSidebar from "../BlogSidebar/Main";
import cyberl from "../../../assets/images/blog/cyberl.png";

const Cyber = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`comming soon`);
  };
  return (
    <>
      <Breadcumb Title="Cyber Security" Breadcumb="BLOG" />
      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details__image">
                <img src={cyberl} alt="cyberl" />
              </div>
              <div className="blog-card-one__meta">
                <div className="blog-card-one__date">
                  <i className="fa fa-calendar-alt" aria-hidden="true"></i>
                  Jan, 10, 2023
                </div>
                {/* <Link to="/blog" className="blog-card-one__category">
                  Designer
                </Link> */}
              </div>
              <h3 className="blog-card-one__title blog-details__title">
                "Secure Bytes: Exploring the World of Cyber Security"
              </h3>
              <div className="blog-details__content">
                <p>
                  Cybersecurity has become one of the most important concerns in
                  the digital age. As we increasingly rely on technology for
                  almost every aspect of our lives, it has become crucial to
                  ensure that our digital assets are safe from malicious actors.
                  In this blog, we'll explore the world of cybersecurity and
                  learn how we can protect ourselves from cyber threats.
                </p>
                <ol>
                  <li>What is Cybersecurity?</li>
                  <p>
                    Cybersecurity is the practice of protecting digital devices,
                    networks, and sensitive information from unauthorized
                    access, theft, or damage. Cyber threats can take many forms,
                    including malware, phishing attacks, and social engineering
                    scams.
                  </p>
                  <li>Common Cyber Threats</li>
                  <p>
                    The most common types of cyber threats include phishing
                    attacks, ransomware, malware, and social engineering scams.
                    These attacks can be carried out through email, instant
                    messaging, social media, and other online platforms. To
                    protect yourself from these threats, it's important to be
                    aware of the warning signs and take steps to safeguard your
                    digital assets.
                  </p>
                  <li>
                    How to Protect Yourself from Cyber Threats To protect
                    yourself from cyber threats, you should follow these best
                    practices:
                  </li>
                  <ul>
                    <li>
                      Use strong passwords and two-factor authentication to
                      secure your online accounts
                    </li>
                    <li>
                      Keep your software up-to-date to protect against known
                      vulnerabilities
                    </li>
                    <li>
                      Use a reputable antivirus software to protect against
                      malware
                    </li>
                    <li>
                      Be cautious of suspicious emails, messages, and requests
                    </li>
                    <li>
                      Regularly back up your data to protect against data loss
                    </li>
                  </ul>
                  <li>Cybersecurity in the Workplace</li>
                  <p>
                    Cybersecurity is not just an individual concern; it's also a
                    critical issue for businesses and organizations. Cyber
                    attacks can cause significant financial and reputational
                    damage to businesses, so it's essential to implement robust
                    cybersecurity policies and procedures. These may include
                    regular employee training, network monitoring, and access
                    controls.
                  </p>
                  <li>The Future of Cybersecurity</li>
                  <p>
                    As technology continues to advance, the threat landscape
                    will continue to evolve. In the future, we can expect to see
                    more sophisticated cyber attacks, as well as advances in
                    cybersecurity technology. This includes the use of
                    artificial intelligence and machine learning to identify and
                    prevent cyber threats.
                  </p>
                </ol>
                <h3>Conclusion:</h3>
                <p>
                  Cybersecurity is an ever-evolving field, and it's important to
                  stay informed about the latest threats and best practices for
                  protecting yourself and your digital assets. By following the
                  tips outlined in this blog, you can reduce your risk of
                  falling victim to a cyber attack and stay safe online.
                </p>
              </div>
              <div className="blog-details__meta">
                {/* <div className="blog-details__tags">
                  <span>Tags</span>
                  <Link to="#">Development</Link>
                  <Link to="#">Designing</Link>
                </div> */}
                {/* <ul className="blog-details__share">
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
                  <li>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul> */}
              </div>
              {/* <div className="author-one">
                <div className="author-one__image">
                  <img src="assets/images/blog/author-1-1.jpg" alt="" />
                </div>
                <div className="author-one__content">
                  <h3 className="author-one__title">Christine Eve</h3>
                  <p className="author-one__text">
                    Lorem ipsum is simply free text by copytyping refreshing.
                    Neque porro est qui dolorem ipsum quia quaed veritatis et
                    quasi architecto.
                  </p>
                </div>
              </div> */}
              {/* <div className="comments-one">
                <h3 className="comments-one__title">2 Comments</h3>
                <div className="comments-one__item">
                  <div className="comments-one__item__image">
                    <img src="assets/images/blog/comment-1-1.png" alt="" />
                  </div>
                  <div className="comments-one__item__content">
                    <h3 className="comments-one__item__title">Kevin Martin</h3>

                    <p className="comments-one__item__text">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting simply fee text aunchanged. It
                      was popularised in the sheets containing lorem ipsum is
                      simply free text.
                    </p>

                    <Link to="#" className="thm-btn comments-one__item__btn">
                      <span>Reply</span>
                    </Link>
                  </div>
                </div>
                <div className="comments-one__item">
                  <div className="comments-one__item__image">
                    <img src="assets/images/blog/comment-1-2.png" alt="" />
                  </div>
                  <div className="comments-one__item__content">
                    <h3 className="comments-one__item__title">Sarah Albert</h3>

                    <p className="comments-one__item__text">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting simply fee text aunchanged. It
                      was popularised in the sheets containing lorem ipsum is
                      simply free text.
                    </p>

                    <Link to="#" className="thm-btn comments-one__item__btn">
                      <span>Reply</span>
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="comment-form">
                <h3 className="comment-form__title">Leave a Comment</h3>
                <form
                  onSubmit={handleSubmit}
                  className="contact-one__form contact-form-validated comment-form__form"
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
                    <div className="col-lg-12 col-md-12">
                      <textarea
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button
                        className="thm-btn contact-one__btn"
                        type="submit"
                      >
                        <span>Submit comment</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="col-lg-4"><BlogSidebar /></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cyber;
