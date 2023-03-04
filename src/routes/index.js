import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../components/About/Main";
import BlogDetails from "../components/Blog/BlogDetails/Main";
import Blogs from "../components/Blog/Blogs/Main";
import Contact from "../components/Contact/Main";
import Footer from "../components/Footer/Main";
import Home from "../components/Home/Main";
import Navbar from "../components/Navbar/Main";
import ProjectDetails from "../components/Project/ProjectDetails/Main";

import WebDevelopment from "../components/Services/WebDevelopment/Main";
import DesignDevelopment from "../components/Services/DesignDevelopment/Main";
import AppDevelopment from "../components/Services/AppDevelopment/Main";
import CmsDevelopment from "../components/Services/CmsDevelopment/Main";

import Cyber from "../components/Blog/BlogDetails/Cyber";
import Appdev from "../components/Blog/BlogDetails/Appdev";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/web-dev" element={<WebDevelopment />} />
        <Route path="/apps-dev" element={<AppDevelopment />} />

        <Route path="/ux-design" element={<DesignDevelopment />} />
        <Route path="/cms-dev" element={<CmsDevelopment />} />
       
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/web-design" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/appdev" element={<Appdev />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
