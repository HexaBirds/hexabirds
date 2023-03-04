import React from "react";
import { Link } from "react-router-dom";
import BG from "../../../assets/images/services/services-s-cta-1-1.jpg";

const ServiceSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item sidebar__item--category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category">
          <li>
            <Link to="/web-dev">Web Development</Link>
          </li>
          <li>
            <Link to="/apps-dev">App Development</Link>
          </li>
          <li>
            <Link to="/ux-design">UI/UX Design</Link>
          </li>
          <li>
            <Link to="/cms-dev">CMS Development</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__item sidebar__item--cta">
        <div className="sidebar__cta" style={{ backgroundImage: `url(${BG})` }}>
          <i className="sidebar__cta__icon icon-phone-ringing"></i>
          <h3 className="sidebar__cta__title">
            Have Tech Problems Contact Now
          </h3>
          <p className="sidebar__cta__text">
            Call Anytime <br />
            <h4>+91 8950412201</h4>
          </p>
        </div>
      </div>
      {/* <div className="sidebar__item sidebar__item--btn">
        <Link to="#" className="thm-btn sidebar__btn">
          <span>Download our flyers</span>
        </Link>
      </div> */}
    </div>
  );
};

export default ServiceSidebar;
