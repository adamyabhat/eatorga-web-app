import React from "react";
import img1 from "./../../assets/pictures/eatorga-gold-package.jpg";
import img2 from "./../../assets/pictures/eatorga-silver-package.jpg";
import img3 from "./../../assets/pictures/eatorga-prime-package.jpg";
import img4 from "./../../assets/pictures/eatorga-custom-package.jpg";

import Coverflow from "react-coverflow";

/* will change the slider styling soon */
const Slider = () => {
  return (
    <div className='main-slider'>
      <Coverflow
        width={960}
        height={600}
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
        enableHeading={false}
        active={3}
        >
        <img
          src={img1}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
        />
        <img
          src={img2}
          alt='title or description'
          data-action='http://andyyou.github.io/react-coverflow/'
        />
        <img
          src={img3}
          alt='title or description'
          data-action='http://andyyou.github.io/react-coverflow/'
        />
        <img
          src={img4}
          alt='title or description'
          style={{ display: "block", width: "100%" }}
        />
      </Coverflow>
    </div>
  );
};

export default Slider;
