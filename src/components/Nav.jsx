import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", { 1: true });
    };
  }, []);
  return (
    <div className={`nav${show && " nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Logo"
      ></img>
    </div>
  );
};

export default Nav;
