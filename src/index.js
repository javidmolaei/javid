import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TabPanel from "./component/TabPanel";
import ColorTabs from "./component/ColorTabs";
import About from "./component/About";
import AboutMe from "./component/AboutMe";
import Interests from "./component/Interests";
import MediaCard from "./component/MediaCard";
import Project from "./component/Project";
import GetIn from "./component/GetIn";
import Certificate from "./component/Certificate";
import Footer from "./component/Footer";

import { BrowserRouter } from "react-router-dom";
import Blog from "./blog/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ColorTabs />
      <About />
      <Certificate />
      <AboutMe />
      <Interests />
      <Project />
      <GetIn />
      <Footer /> */}

      <Blog />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
