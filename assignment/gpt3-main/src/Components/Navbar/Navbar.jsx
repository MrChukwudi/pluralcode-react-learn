import "./navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <fragment className="non-btns">
          <img className="nav-logo" src={logo} alt="Logo" />

          <ul className="nav-ul">
            <li>
              <a href="#" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                What is GPT
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Open AI
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Case Study
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Library
              </a>
            </li>
          </ul>
        </fragment>
        <div className="btns">
          <button className="btn-sign-in btn">
            <a href="#" target="_blank">
              Sign In
            </a>
          </button>
          <button className="btn-sign-up btn">
            <a href="#" target="_blank">
              Sign Up
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
