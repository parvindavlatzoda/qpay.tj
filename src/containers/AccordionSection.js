import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrowDown from "./../images/ArrowDown.svg";
import ArrowUp from "./../images/ArrowUp.svg";

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
      <div
        style={{
          background: "#ffff",
          border: "1px solid #ccc",
          padding: "5px 10px",
          borderRadius: "5px",
          margin: "16px"
        }}
      >
        <div
          onClick={onClick}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: "1.7",
            fontWeight: "600",
            border: "none",
            padding: "1.5rem 2rem 1.5rem 2rem"
          }}
        >
          {label}
          <div style={{ float: "right" }}>
            <img src={ArrowDown} />
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              // background: "#6db65b",
              // border: "2px solid #008f68",
              // marginTop: 10,
              padding: "10px 32px",
              lineHeight: "1.7"
            }}
          >
            {this.props.children}
          </div>
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
