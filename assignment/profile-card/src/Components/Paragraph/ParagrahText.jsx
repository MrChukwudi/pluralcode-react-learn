import React from "react";

const ParagrahText = ({ text, lineHeight, fontSize, fontWeight }) => {
  return (
    <p
      style={{
        lineHeight: lineHeight,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: "#81AFDD",
        textAlign: "left",
      }}
    >
      {text}
    </p>
  );
};

export default ParagrahText;
