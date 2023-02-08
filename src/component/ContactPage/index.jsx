// Imports////////////////////////////////
import React, { useRef } from "react";
import "./index.css";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import Footer from './Footer/index'
////////////////////////////////////////




const Form = () => {
  const formRef = useRef();//Use the reference
  return (
    //Main Container
    <footer className="contactus" id="contact-us-page">
      <div className="form-main-div">
        <div className="container">
          <h1>Contact Me</h1>
          <form
          ref={formRef} 
          className="centered"
            target="_blank"
            action="https://formsubmit.co/your@email.com" // <----INPUT CUSTOMERS EMAIL
            method="POST"
            onSubmit={() => {
            
              // submit the form using the API here
              formRef.current.reset();
            }}
          >
            <div className="form-column align-items-center">
              <FormControl className="form-group">
                <div className="form-row">
                  <div className="col">
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                    <Input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                    <FormHelperText>Required</FormHelperText>
                  </div>
                </div>
              </FormControl>
              <FormControl className="form-group">
                <div className="form-row">
                  <div className="col">
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                    />
                    <FormHelperText>Required</FormHelperText>
                  </div>
                </div>
              </FormControl>
              <FormControl className="form-group">
                <TextField
                  placeholder="Your Message"
                  name="message"
                  rows="10"
                  multiline
                  required
                ></TextField>
                <FormHelperText>Required</FormHelperText>
            
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="btn btn-lg btn-dark btn-block"
              >
                Submit Form
              </Button>
                </FormControl>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </footer>
  );
};

export default Form;
