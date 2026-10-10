import { useState } from "react";
import defaultSpaceImage from "../image/defaultSpaceImage.jpg";

function Slider({ slides }) {
  const currentIndex = 0;
  return (
    <div>
      <img
        src={slides[currentIndex].src || defaultSpaceImage}
        alt={slides[currentIndex].title}
      />
    </div>
  );
}

export default Slider;
