import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../../Breadcumb/Main";
import BlogSidebar from "../BlogSidebar/Main";
import designl from "../../../assets/images/blog/designl.png";

const BlogDetails = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`comming soon`);
  };
  return (
    <>
      <Breadcumb Title="web-design" Breadcumb="BLOG" />
      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details__image">
                <img src={designl} alt="designl" />
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
                "Designing a Winning Website: Key Elements for a Successful Web
                Design"
              </h3>
              <div className="blog-details__content">
                <p>
                  Web design is the process of creating and designing websites
                  with the use of different techniques and tools. A
                  well-designed website not only looks aesthetically pleasing
                  but also offers a seamless user experience. In this blog,
                  we'll explore some key aspects of web design that can help
                  create an effective website.
                </p>
                <ol>
                  <li>Purpose and Target Audience</li>
                  <p>
                    Before starting the design process, it's essential to
                    understand the website's purpose and target audience.
                    Knowing the purpose and audience helps in creating a website
                    that is tailored to meet their specific needs. For instance,
                    a website designed for children would look significantly
                    different from a website designed for a corporate audience.
                  </p>

                  <li>Visual Design</li>
                  <p>
                    The visual design of a website is what captures the
                    audience's attention and keeps them engaged. Using a color
                    scheme that complements the brand and creating a layout
                    that's easy on the eyes are critical elements of visual
                    design. Additionally, using high-quality images and videos
                    that are relevant to the website's purpose can also help in
                    creating an aesthetically pleasing website.
                  </p>

                  <li>Navigation</li>
                  <p>
                    Navigation is a critical element of web design that can
                    impact the user experience. Creating an easy-to-use
                    navigation system helps the audience find the information
                    they need quickly. A well-designed navigation system makes
                    it easy to find the website's essential pages and sections.
                  </p>

                  <li>Responsiveness</li>
                  <p>
                    With more people accessing websites on mobile devices,
                    creating a responsive website has become more important than
                    ever. A responsive website design ensures that the website
                    looks good and is easy to use on all devices, including
                    desktops, tablets, and smartphones.
                  </p>

                  <li>Accessibility</li>
                  <p>
                    Web accessibility refers to designing websites that can be
                    accessed by people with disabilities. Creating an accessible
                    website means ensuring that people with different abilities
                    can access and use the website. This includes features such
                    as alternative text for images and videos, clear and concise
                    content, and keyboard accessibility.
                  </p>

                  <li>Call-to-Action</li>
                  <p>
                    A call-to-action (CTA) is an element that encourages the
                    audience to take a specific action, such as signing up for a
                    newsletter or making a purchase. CTAs should be prominently
                    displayed on the website and should be designed in a way
                    that encourages the audience to take action.
                  </p>
                </ol>
                <p>
                  In conclusion, a well-designed website is critical to the
                  success of any business or organization. A website that's easy
                  to use, visually appealing, and accessible can help in
                  engaging the audience and achieving the website's purpose. By
                  considering the above aspects of web design, you can create a
                  website that's effective and meets the needs of the audience.
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

export default BlogDetails;
