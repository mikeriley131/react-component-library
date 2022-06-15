import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Accordion.css";

const Accordion = ({ titleHeadingLevel: Heading, items, classes }) => {
  const accordionRef = useRef(null);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isClosingClass, setIsClosingClass] = useState("");

  const handleAccordionClick = (index) => {
    if (openAccordions[0] !== index) {
      setIsClosingClass("");
      setOpenAccordions([index, ...openAccordions]);
    }

    if (openAccordions[0] === index) {
      setIsClosingClass("is-closing");

      setTimeout(() => {
        setOpenAccordions([]);
        setIsClosingClass("");
      }, 1800);
    }
  };

  useEffect(() => {
    if (openAccordions.length > 1 && openAccordions[0] !== openAccordions[1]) {
      setTimeout(() => {
        setOpenAccordions(openAccordions.slice(0, -1));
      }, 1800);
    }
  }, [openAccordions]);

  return (
    <section className={`accordion ${classes}`}>
      {items.map((item, index) => (
        <article className="accordion__item" key={item.title}>
          <Heading>
            <button
              type="button"
              className="accordion__button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={openAccordions[0] === index ? "true" : "false"}
            >
              <span className="accordion__title">{item.title}</span>
              <span className="accordion__icon">
                {openAccordions[0] === index ? "-" : "+"}
              </span>
            </button>
          </Heading>
          <div className="accordion__content-wrapper">
            <div
              className={`accordion__content ${
                openAccordions[0] === index &&
                openAccordions[0] !== openAccordions[1]
                  ? "is-open"
                  : ""
              } ${
                openAccordions[1] === index ? "is-closing" : ""
              } ${isClosingClass}`}
              hidden={
                openAccordions[0] !== index && openAccordions[1] !== index
              }
              dangerouslySetInnerHTML={{ __html: item.content }}
              ref={accordionRef}
            />
          </div>
        </article>
      ))}
    </section>
  );
};

Accordion.propTypes = {
  classes: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      copyHeading: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    })
  ).isRequired,
  titleHeadingLevel: PropTypes.string,
};

Accordion.defaultProps = {
  classes: "",
  titleHeadingLevel: "h2",
};

export default Accordion;
