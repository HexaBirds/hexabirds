import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logohexa-2.png";
import WOW from "wowjs";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobile, setmobile] = useState(false);

  const [menu, setmenu] = useState({});
  const [home, setHome] = useState(false);
  const [header, setheader] = useState(false);
  const [pages, setpages] = useState(false);
  const [service, setservice] = useState(false);
  const [project, setproject] = useState(false);
  const [blog, setblog] = useState(false);

  const activeMenu = () => {
    if (path === "/") {
      setmenu({ home: true });
    } else if (path === "/about") {
      setmenu({ pages: true });
    } else if (
      path === "/apps-dev" ||
      path === "/web-dev" ||
      path === "/ux-design" ||
      path === "/cms-dev"
    ) {
      setmenu({ services: true });
    } else if (path === "/project-details") {
      setmenu({ project: true });
    } else if (
      path === "/blog" ||
      path === "/web-design" ||
      path === "/cyber" ||
      path === "/app-development"
    ) {
      setmenu({ blog: true });
    } else if (path === "/contact") {
      setmenu({ contact: true });
    } else {
      setmenu({ home: true });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    new WOW.WOW({
      live: false,
    }).init();
    activeMenu();
  }, [path]);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  };
  return (
    <>
      <div className="header-three">
        <div className="topbar">
          <div className="container-fluid">
            <p className="topbar__text">Welcome to Hexabirds private limited</p>
            <ul className="topbar__info">
              <li>
                <i className="fa fa-envelope"></i>
                <span>support@hexabirds.com</span>
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                1st floor, Bansal Complex, Rishi Nagar, Hisar
              </li>
            </ul>
            <ul className="topbar__social">
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
        <nav
          className={`main-menu sticky-header ${
            sticky && "sticky-header--cloned sticky-fixed"
          }`}
        >
          <div className="container-fluid">
            <div className="main-menu__logo">
              <Link to="/">
                <img src={Logo} width="180" height="80" alt="Hexabirds" />
              </Link>
            </div>

            <ul className="main-menu__list">
              <li
                className={`menu-item-has-children ${menu.home && "current"}`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`menu-item-has-children ${menu.pages && "current"}`}
              >
                <Link to="/about">About Us</Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  menu.services && "current"
                }`}
              >
                <Link to="/web-dev">Services</Link>
                <ul>
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
              </li>
              <li
                className={`menu-item-has-children ${
                  menu.project && "current"
                }`}
              >
                <Link to="/project-details">Projects</Link>
              </li>
              <li
                className={`menu-item-has-children ${menu.blog && "current"}`}
              >
                <Link to="/blog">Blog</Link>
              </li>
              <li
                className={`menu-item-has-children ${
                  menu.contact && "current"
                }`}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="main-menu__right">
              <Link
                to="#"
                className="mobile-nav__toggler"
                onClick={() => setmobile(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </Link>
              <Link
                to="#"
                onClick={() => setSearch(true)}
                className="search-toggler"
              >
                <i className="icon-magnifying-glass"></i>
              </Link>
              <Link to="/contact" className="main-menu__cta">
                <i className="fa fa-phone-alt"></i>
                <span className="main-menu__cta__text">
                  <b>+ 91 8950412201</b>
                  Call Anytime
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <div className={`search-popup ${search && "active"}`}>
          <div
            className="search-popup__overlay search-toggler"
            onClick={() => setSearch(false)}
          ></div>
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <span>
                  <i className="icon-magnifying-glass"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className={`mobile-nav__wrapper ${mobile && "expanded"}`}>
          <div
            className="mobile-nav__overlay mobile-nav__toggler"
            onClick={() => setmobile(false)}
          ></div>
          <div className="mobile-nav__content">
            <Link
              to="#"
              onClick={() => setmobile(false)}
              className="mobile-nav__close mobile-nav__toggler"
            >
              <span></span>
              <span></span>
            </Link>

            <div className="logo-box">
              <Link to="/" aria-label="logo image">
                <img src={Logo} width="98" height="33" alt="Hexabirds" />
              </Link>
            </div>
            <div className="mobile-nav__container">
              <ul className="mobile-menu__list">
                <li
                  className={`menu-item-has-children ${
                    menu.home ? "current" : ""
                  }`}
                >
                  <Link to="/" className={home ? "expanded" : ""}>
                    Home
                  </Link>
                </li>
                <li
                  className={`menu-item-has-children ${
                    menu.pages ? "current" : ""
                  }`}
                >
                  <Link to="/about" className={pages ? "expanded" : ""}>
                    About-Us
                  </Link>
                </li>
                <li
                  className={`menu-item-has-children ${
                    menu.services ? "current" : ""
                  }`}
                >
                  <Link
                    to="/web-development"
                    className={service ? "expanded" : ""}
                  >
                    Services
                    <button
                      aria-label="dropdown toggler"
                      onClick={() => setservice(!service)}
                      className={service ? "expanded" : ""}
                    >
                      <i className="fa fa-angle-down"></i>
                    </button>
                  </Link>
                  {service && (
                    <ul style={{ display: "block" }}>
                      <li>
                        <Link to="/web-development">WEB DEVElOPMENT</Link>
                      </li>
                      <li>
                        <Link to="/apps-development">APP DEVELOPMENT</Link>
                      </li>
                      <li>
                        <Link to="/ux-design">UI/UX DESIGN</Link>
                      </li>
                      <li>
                        <Link to="/cms-development">CMS DEVELOPMENT</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className={`menu-item-has-children ${
                    menu.project ? "current" : ""
                  }`}
                >
                  <Link
                    to="/project-details"
                    className={project ? "expanded" : ""}
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className={`menu-item-has-children ${
                    menu.blog ? "current" : ""
                  }`}
                >
                  <Link to="/blog" className={blog ? "expanded" : ""}>
                    Blog
                  </Link>
                  {blog && <ul style={{ display: "block" }}></ul>}
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
