import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../assest/radiopic.png";
import image2 from "../assest/radiopic.png";
import image3 from "../assest/radiopic.png";
import image4 from "../assest/radiopic.png";
import image5 from "../assest/radiopic.png";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function SildeImage() {
  return (
    <div className="SildeImage">
      <Slideshow />
    </div>
  );
}

export default SildeImage;
