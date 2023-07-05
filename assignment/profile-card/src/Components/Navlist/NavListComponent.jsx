import React from "react";
import Atlassian from "../../../src/image/atlassian.png";
import Google from "../../../src/image/google.png";
import Dropbox from "../../../src/image/dropbox.png";
import Shopify from "../../../src/image/shopify.png";
import Slack from "../../../src/image/slack.png";
import GPT from "../../../src/image/GPT-3.png";
import "./navlist.css";

const navText = ["Home", "What is GPT", "Open AI", "Case Studies", "Library"];

export const images = [Atlassian, Google, Dropbox, Slack, Shopify];

export const NavListTextComponent = () => {
  return (
    <div>
      <ul>
        {navText.map((nav, ind) => (
          <a href="#" key={ind}>
            <li>{nav}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export const NavListImageComponent = () => {
  return (
    <div>
      <ul>
        {images.map((image, indx) => {
          return (
            <li className="imageList" key={indx}>
              <img src={image} alt="pic" className="image" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const LogoComponent = () => {
  return <img src={GPT} alt="logo" className="logo" />;
};

// export {NavListImageComponent, NavListTextComponent} ;
