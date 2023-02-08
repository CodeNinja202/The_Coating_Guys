// IMPORTS////////////////////////////////
import React from "react";
import Navbar from "./component/Navbar"
import Homepage from './component/Home'
import AboutPage from './component/AboutPage'
import OurPhilosophy from './component/OurPhilosophy'
import ServicesPage from './component/ServicesPage'
import WhyUs from './component/WhyUs'
import ImageGallery from './component/ImageGallery'
import ClientTestmonials from './component/ClientTestmonials'
import ContactPage from './component/ContactPage'
///////////////////////////////////////////////////////




//Main App Component//
const App = () => {
  return (
    //Main App Component Container//
    <div className="main-app-div">
      {/* Navbar Component */}
      <Navbar /> 


     {/* HOME COMPONENT */}
      <div id="Home">
        <Homepage id="Home" />
      </div>

      {/* ABOUT COMPONENT */}
      <div id="About">
        <AboutPage />
      </div>
     
      {/* Our Philosophy COMPONENT */}
      <div id="Our_Philosophy">
        <OurPhilosophy />
      </div>
      
      {/* Services COMPONENT */}
      <div id="Services">
        <ServicesPage />
      </div>

       {/* Why US COMPONENT */}
       <div id="Why_Us">
      <WhyUs/>
      </div>

       {/* Gallery COMPONENT */}
      <div id="Why_Us">
      <ImageGallery/>
      </div>

       {/* Cleint Testimonials COMPONENT */}
       <div id="Testimonials">
      <ClientTestmonials/>
      </div>

      {/* Contact COMPONENT */}
      <div  id="Contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default App;
