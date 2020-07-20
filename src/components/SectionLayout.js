import PropTypes from "prop-types";
import React from "react";
import SectionSeparator from "./SectionSeparator";

function SectionTitle({ title }) {
  return <div className=" text-3xl font-bold uppercase">{title}</div>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function SectionQuote({ quote }) {
  return (
    <div className="text-md font-bold italic text-teal-500 uppercase pb-4">
      {quote}
    </div>
  );
}

SectionQuote.propTypes = {
  quote: PropTypes.string.isRequired,
};

function SectionLayout({ id, title, quote, children }) {
  return (
    <section id={id}>
      {title && <SectionTitle title={title} />}
      {quote && <SectionQuote quote={quote} />}
      {children}
      <SectionSeparator />
    </section>
  );
}

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  quote: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default SectionLayout;
