import React from "react";
import LineHeaderComp from "../LineHeader/LineHeaderComp";
import ParagrahText from "../Paragraph/ParagrahText";
import "./maingpt.css";
import HeadingText from "../HeadingText/HeadingText";

const MainGPT = () => {
  return (
    <div className="mainContainer">
      <div className="layer1">
        <LineHeaderComp
          style={{ width: "50%", background: "none", color: "white" }}
          text="What is GPT-3"
          fontSize="24px"
        />

        <ParagrahText
          className="layer1p"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="layer2">
        <HeadingText
          text="The possibilities are beyond your imagination"
          fontSize="34px"
        />
        <h5 className="small-Guy">Explore The Library</h5>
      </div>
      <div className="layer3">
        <div className="card">
          <LineHeaderComp
            style={{ width: "50%" }}
            text="Chatbots"
            fontSize="24px"
            color="#fff"
          />
          <ParagrahText
            className="layer1p"
            fontSize="16px"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div className="card">
          <LineHeaderComp
            style={{ width: "50%" }}
            text="Knowledge"
            fontSize="24px"
            color="#fff"
          />
          <ParagrahText
            className="layer1p"
            fontSize="16px"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
        <div className="card">
          <LineHeaderComp
            style={{ width: "50%" }}
            text="Education"
            fontSize="24px"
            color="#fff"
          />
          <ParagrahText
            className="layer1p"
            fontSize="16px"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};

export default MainGPT;
