import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <img
            src={logo}
            alt="website logo"
            className="inline-block mx-auto w-48"
          />
        </Link>
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
