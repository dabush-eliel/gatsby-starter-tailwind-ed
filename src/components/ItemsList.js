import PropTypes from "prop-types";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Img from "gatsby-image";

function ItemName({ name, link, logo }) {
  return (
    <div className="flex flex-row items-center w-48">
      {logo && (
        <Img className="inline-block w-16" fluid={logo.childImageSharp.fluid} />
      )}
      {link ? (
        <a
          href={link}
          className={`font-bold underline ${logo ? "px-2" : ""}`}
        >{`${name} `}</a>
      ) : (
        <span className={`${logo ? "px-2" : ""}`}>{name}</span>
      )}
    </div>
  );
}

ItemName.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  logo: PropTypes.object,
};

function ItemPeriod({ period }) {
  return (
    <div className="py-2 text-blue-500 w-48 text-sm italic">
      <FaRegCalendarAlt className="inline-block" />
      <span className="px-2">{period}</span>
    </div>
  );
}

ItemPeriod.propTypes = {
  period: PropTypes.string.isRequired,
};

function ItemTitle({ title }) {
  return <span className="px-5 font-bold">{title}</span>;
}

ItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function ItemDescription({ description }) {
  return <span className="px-5">{description}</span>;
}

ItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

function ItemSkills({ skills = [] }) {
  return (
    <div className="text-xs px-5 py-2 italic">
      {skills.map((skill, index) => (
        <span key={skill}>{`${skill}${
          index === skills.length - 1 ? "" : ", "
        }`}</span>
      ))}
    </div>
  );
}

ItemSkills.propTypes = {
  skills: PropTypes.array,
};

function ItemLocation({ location }) {
  return (
    <div className="px-5 text-red-500 py-1">
      <MdLocationOn className="inline-block" />
      <span className="px-2">{location}</span>
    </div>
  );
}

ItemLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

function ListItem({ item, logo }) {
  return (
    <div key={item.name} className="py-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col content-center py-1">
          <ItemName name={item.name} link={item.link} logo={logo} />
          <ItemPeriod period={item.years} />
        </div>
        <div className="flex flex-col content-center py-1 w-full">
          {item.title && <ItemTitle title={item.title} />}
          {item.description && (
            <ItemDescription description={item.description} />
          )}
          <ItemSkills skills={item.skills} />
          {item.location && <ItemLocation location={item.location} />}
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  logo: PropTypes.object,
  item: PropTypes.object.isRequired,
};

function ItemsList({ items, title, data }) {
  return (
    <div>
      {title && <div className="font-bold text-2xl">{title}</div>}
      <div>
        {items.map((item) => {
          const logo = data
            ? data.allFile.nodes.find(
                ({
                  childImageSharp: {
                    fluid: { src },
                  },
                }) => src.endsWith(item.logo)
              )
            : null;
          return <ListItem key={item.name} item={item} logo={logo} />;
        })}
      </div>
    </div>
  );
}

ItemsList.propTypes = {
  data: PropTypes.object,
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default ItemsList;
