import React from "react";
import MarketingApp from "./components/MarketingApp"; // moved mount into MarketingApp

// for Federation - go to the plugin section of webpack.dev.js under the Marketing folder and
//  see what is exposed to container (ex. bootstrap file)
// import { mount } from "marketing/MarketingPage";

// console.log(mount);

export default () => {
  return (
    <>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </>
  );
};
