import React from "react";
import "../css/general.css";
import SprayPaint, { SpacedSprayPaint } from "../components/customizations/sprayPaint";
import AboutView from "../components/aboutView";

function About() {
  return (
    <>
      <SprayPaint />
      <SpacedSprayPaint />
      <AboutView />
    </>
  );
}

export default About;