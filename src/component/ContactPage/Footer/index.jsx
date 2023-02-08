//Imports///////////////////////////////////////////////
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./index.css";
////////////////////////////////////////////////////////


const Footer = () => {

  return (
    <footer>
      {/* Main Container */}
    <div className="footer-main-div">
     <p><FacebookIcon/></p>
     <p><TwitterIcon/></p>
    
    </div>
    </footer>
  );
};

export default Footer;