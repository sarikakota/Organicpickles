import React from 'react';
import '../styles/Footer.css'; // Ensure this path is correct

const FooterComponent = () => {
  return (
    <footer className="footer-component" >
      <div className="top-green-line" /> {/* Thin green line */}
      <div className="footer-container text-center" style={{fontWeight:'bold'}}>
        <p>Copyright © organicanand.com 2022 All Rights Reserved. Designed & Developed By Techno Tide Technologies Pvt. Ltd.</p>
        
      </div>
    </footer>
  );
};

export default FooterComponent;
