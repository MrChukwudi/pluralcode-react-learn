import HeadingText from "../HeadingText/HeadingText";
import LineHeaderComp from "../LineHeader/LineHeaderComp";
import ParagrahText from "../Paragraph/ParagrahText";
import "./mainFeature.css";

const MainFeature = () => {
  return (
    <div className="featureContainer">
      <div className="headerLeft">
        <HeadingText
          text="The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen."
          fontSize="34px"
        />
        <h3 className="smallGuy">Request Early Access to Get Started</h3>
      </div>
      <div className="contentRight">
        <div className="contentCard">
          <LineHeaderComp
            text="Improving end distrusts instantly "
            fontSize="18px"
          />
          <ParagrahText
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            lineHeight="24px"
            fontSize="14px"
            fontWeight="500"
          />
        </div>
        <div className="contentCard">
          <LineHeaderComp
            text="Improving end distrusts instantly "
            fontSize="18px"
          />
          <ParagrahText
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            lineHeight="24px"
            fontSize="14px"
            fontWeight="500"
          />
        </div>
        <div className="contentCard">
          <LineHeaderComp
            text="Improving end distrusts instantly "
            fontSize="18px"
          />
          <ParagrahText
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            lineHeight="24px"
            fontSize="14px"
            fontWeight="500"
          />
        </div>
        <div className="contentCard">
          <LineHeaderComp
            text="Improving end distrusts instantly "
            fontSize="18px"
          />
          <ParagrahText
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            lineHeight="24px"
            fontSize="14px"
            fontWeight="500"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFeature;
