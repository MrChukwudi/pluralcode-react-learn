import Line from "../../image/line.png";
import "./lineHeader.css";

const LineHeaderComp = ({ text, fontSize }) => {
  return (
    <div className="lineHeader">
      <img src={Line} alt="linear" />
      <h1 className="lineHeaderColor" style={{ fontSize: fontSize }}>
        {text}
      </h1>
    </div>
  );
};

export default LineHeaderComp;
