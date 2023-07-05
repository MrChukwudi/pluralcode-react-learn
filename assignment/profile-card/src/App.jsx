import React from "react";
import "./App.css";
import { ButtonComponent } from "./Components/Button/ButtonComponent";
import {
  NavListTextComponent,
  NavListImageComponent,
  LogoComponent,
} from "./Components/Navlist/NavListComponent";
import Header from "./Components/Pages/MainHeader";
import LineHeaderComp from "./Components/LineHeader/LineHeaderComp";
import ParagrahText from "./Components/Paragraph/ParagrahText";
import HeadingText from "./Components/HeadingText/HeadingText";
import MainGPT from "./Components/Pages/MainGPT";
import MainFeature from "./Components/Pages/MainFeature";

function App() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="middle">
        <div className="navbar">
          <div className="navLeft">
            <LogoComponent />
            <NavListTextComponent className="navList" />
          </div>
          <div className="navright">
            <ButtonComponent
              text="Sin In"
              borderBottomLeftRadius="5px"
              borderBottomRightRadius="5px"
              borderTopLeftRadius="5px"
              borderTopRightRadius="5px"
              background=" #040C18"
              color="#fff"
              width="152px"
              height="58px"
            />
            <ButtonComponent
              text="Sign Up"
              borderBottomLeftRadius="5px"
              borderBottomRightRadius="5px"
              borderTopLeftRadius="5px"
              borderTopRightRadius="5px"
              background="#FF4820"
              color="#fff"
              width="152px"
              height="58px"
            />
          </div>
        </div>

        <Header />
        <NavListImageComponent />

        <MainGPT />

        <MainFeature />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
