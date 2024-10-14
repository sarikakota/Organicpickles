// src/components/Banner.js
import React from 'react';
import '../styles/Paragraphimage.css'; // Import the CSS file for styles

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3c3b056-bf92-4e72-acd9-7e17ca8d8e99.__CR0,0,600,450_PT0_SX600_V1___.jpg"
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
