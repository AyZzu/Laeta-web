import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Component/Navbar.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../assets/LaetaLogos.png";
import Burger from "../assets/hamburger.png";

const Navbar = () => {
  const sidebarRef = useRef();
  const openBtnRef = useRef();
  const closeBtnRef = useRef();

  useEffect(() => {
    const openBtn = openBtnRef.current;
    const closeBtn = closeBtnRef.current;
    const sidebar = sidebarRef.current;

    openBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });

    // Cleanup to avoid memory leaks
    return () => {
      openBtn.removeEventListener("click", () => {});
      closeBtn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <nav className="header" data-aos="fade-right" data-aos-duration="900">
      <div className="wrapper">
        <div className="HeadMid">
          <ul className="listNav">
            <Link to="#hero" className="button">
              Home
            </Link>
            <Link to="#about" className="button">
              About
            </Link>
            <Link to="#talent" className="button">
              Member
            </Link>
            <Link to="#news" className="button">
              News
            </Link>
            <Link to="/" className="button">
              Audition
            </Link>
          </ul>
        </div>

        <div className="navRes">
          <div className="Reskiri">
            <img src={Logo} width={160} />
          </div>

          <div className="Reskanan">
            <div className="ham" ref={openBtnRef}>
              <FaBars className="burgers" size={30} color="#006ff5" />
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar" ref={sidebarRef} className="sidenav">
        <div className="kananBur" ref={closeBtnRef}>
          <FaTimes className="burgers" size={30} color="#006ff5" />
        </div>

        <a className="button" href="#">
          About
        </a>
        <a className="button" href="#">
          Services
        </a>
        <a className="button" href="#">
          Clients
        </a>
        <a className="button" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
