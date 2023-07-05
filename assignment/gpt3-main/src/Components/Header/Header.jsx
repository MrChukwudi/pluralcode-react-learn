import ilustration from "../../images/ilustration.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-details">
        <div className="header-title">
          Let's Build Something amazing with GPT-3 OpenAI
        </div>
        <p className="header-desc">
          Tailor your conversations with ChatGPT-3 to suit your needs. With
          customizable prompts and adaptable conversational styles, you can
          shape the interaction to align with your preferences and desired
          outcomes.
        </p>
        <div className="input-block">
          <input
            type="email"
            placeholder="Your Email Address"
            className="header-input"
          />
          <button className="my-btn" type="button">
            Get Started{" "}
          </button>
        </div>
      </div>
      <div className="header-img">
        <img className="my-image" src={ilustration} alt="imagine" />
      </div>
    </div>
  );
};

export default Header;
