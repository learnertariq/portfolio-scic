import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Tariqul Islam
        </Link>
      </div>
      <div className="flex gap-5 mr-7">
        <Link className="font-bold" to="/">
          Home
        </Link>
        <Link className="font-bold" to="/blogs">
          Blogs
        </Link>
        <a className="font-bold" href="/#contact">
          Contact
        </a>
        <Link className="font-bold" to="/about">
          About
        </Link>
        <FontAwesomeIcon
          className="text-4xl ml-5 text-primary nav-arrow"
          icon={faArrowLeftLong}
        />
      </div>
    </div>
  );
};

export default NavBar;
