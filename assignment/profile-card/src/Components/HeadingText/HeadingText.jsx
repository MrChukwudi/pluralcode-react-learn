import React from "react";
import "./headingText.css";

const HeadingText = ({ text, fontSize }) => {
  return <h1 style={{ fontSize: fontSize }}>{text}</h1>;
};

export default HeadingText;
