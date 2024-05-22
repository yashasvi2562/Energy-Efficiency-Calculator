import React from "react";
import "./Contact_us.css";
function Contact_us() {
  return (
    <div>
      <div className="contactUs">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="send">
          <div className="contact form">
            <h2>SEND A MESSAGE</h2>
            <form>
              <div className="formbox">
                <div className="row50">
                  <div className="inputbox">
                    <span>First Name</span>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="inputbox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputbox">
                    <span>Email Address</span>
                    <input type="text" placeholder="Enter your email address" />
                  </div>
                  <div className="inputbox">
                    <span>Contact Number</span>
                    <input
                      type="text"
                      placeholder="Enter your contact number"
                    />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputbox">
                    <span>Type the text ....</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputbox">
                    <input type="submit" value="send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infobox">
              <div className="add">
                <span>
                  <ion-icon name="location"></ion-icon>
                </span>
                <p>CHANDIGARH, PUNJAB INDIA</p>
              </div>
              <div className="add">
                <span>
                  <ion-icon name="mail"></ion-icon>
                </span>
                <p>
                  {" "}
                  <a href="mailto:EcoCal@gmail.com">EcoCal@gmail.com</a>
                </p>
              </div>
              <div className="add">
                <span>
                  <ion-icon name="call"></ion-icon>
                </span>
                <p>
                  <a href="tel:+91 98786-54321">+91 98786-54321</a>
                </p>
              </div>
              <ul className="sci">
                <li>
                  <a href="https://www.facebook.com">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.197454309!2d76.77071360000004!3d30.732280449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1708675674003!5m2!1sen!2sin"
              style={{ border: 10 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
