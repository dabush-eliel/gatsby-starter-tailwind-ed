import PropTypes from "prop-types";
import React from "react";
import SocialLinks from "./SocialLinks";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-800">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-10 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-teal-700">
        <nav className="flex justify-between flex-row-reverse max-w-4xl p-4 mx-auto text-sm md:p-8">
          <SocialLinks />
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
