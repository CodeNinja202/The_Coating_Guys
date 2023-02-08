import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./index.css";

const Footer = () => {

  return (
    <footer>
    <div className="footer-main-div" id="contactUS">
     <p><FacebookIcon/></p>
     <p><TwitterIcon/></p>
    
    </div>
    </footer>
  );
};

export default Footer;