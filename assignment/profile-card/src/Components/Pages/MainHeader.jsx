import ButtonComponent from "../Button/ButtonComponent";
import Face from "../../image/header.png";
import "./mainheader.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerDescription">
        <h1 className="headerTitle">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="headerParagraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all excercises blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <ButtonComponent
            className="btnComp"
            text="Get Started"
            borderBottomLeftRadius=""
            borderBottomRightRadius="5px"
            borderTopLeftRadius=""
            borderTopRightRadius="5px"
            background="#FF4820"
            color="#fff"
            width="152px"
            height="58px"
          />
        </div>
      </div>
      <img src={Face} className="headerImage" alt="" />
    </div>
  );
};

export default Header;
