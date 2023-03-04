import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../../Breadcumb/Main";
import BlogSidebar from "../BlogSidebar/Main";
import logicl from "../../../assets/images/blog/logicl.png";

const Cyber = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`comming soon`);
  };
  return (
    <>
      <Breadcumb Title="App-Dev-skills" Breadcumb="BLOG" />
      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details__image">
                <img src={logicl} alt="cyberl" />
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
                "Code Craft: Navigating the World of App Development"
              </h3>
              <div className="blog-details__content">
                <p>
                  Developing an app requires a combination of technical skills
                  and logical thinking. Logical skills are particularly
                  important because they help app developers solve complex
                  problems and create intuitive user interfaces. In this blog,
                  we'll explore how you can improve your logical skills for app
                  development.
                </p>
                <ol>
                  <li>Learn Programming Concepts</li>
                  <p>
                    To develop logical skills for app development, it's
                    essential to learn programming concepts such as algorithms,
                    data structures, and control structures. These concepts are
                    the building blocks of logical thinking, and mastering them
                    will help you write efficient, bug-free code.
                  </p>
                  <li>Practice Problem-Solving</li>
                  <p>
                    One of the best ways to improve logical skills is through
                    practice. You can challenge yourself by solving coding
                    problems on websites such as HackerRank or Project Euler.
                    These websites offer a wide range of problems that require
                    logical thinking and problem-solving skills.
                  </p>
                  <li>Break Problems into Smaller Parts</li>
                  <p>
                    When developing an app, it can be overwhelming to tackle a
                    large problem all at once. Instead, try breaking the problem
                    down into smaller, more manageable parts. This will help you
                    identify the key components of the problem and develop a
                    logical plan for solving it.
                  </p>
                  <li>Use Flowcharts and Diagrams</li>
                  <p>
                    Flowcharts and diagrams are useful tools for visualizing
                    complex problems and breaking them down into simpler
                    components. They can help you identify the logical flow of
                    an app and identify potential bottlenecks or problem areas.
                  </p>
                  <li>Collaborate with Others</li>
                  <p>
                    Working with other developers can help you develop logical
                    skills by exposing you to different approaches to
                    problem-solving. Collaborating with others can also help you
                    identify blind spots in your own logical thinking and find
                    new ways to approach problems.
                  </p>
                </ol>
                <h3>Conclusion:</h3>
                <p>
                  Improving your logical skills is essential for becoming a
                  successful app developer. By learning programming concepts,
                  practicing problem-solving, breaking problems down into
                  smaller parts, using flowcharts and diagrams, and
                  collaborating with others, you can develop the logical skills
                  needed to create high-quality, intuitive apps. Remember to
                  keep practicing and challenging yourself, and you'll be well
                  on your way to becoming a skilled app developer.
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
