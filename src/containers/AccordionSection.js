import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrowDown from "./../images/ArrowDown.svg";
import ArrowUp from "./../images/ArrowUp.svg";
import "./AccordionSection.css";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div className="accordion-section">
        <div onClick={onClick} className="accordion-label">
          {label}
          <div style={{ float: "right" }}>
            <img src={ArrowDown} />
          </div>
        </div>
        {isOpen && (
          <div className="accordion-overlay">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default AccordionSection;

// стрелкки

// {!isOpen && (
//   <span>
//     &#9660; <img src={ArrowDown} />
//   </span>
// )}
// {isOpen && (
//   <span>
//     &#9650; <img src={ArrowUp} />
//   </span>
// )}
