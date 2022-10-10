import React from "react";
import { useState } from "react"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import videoEth from "../assets/eth.mp4";
import styles, { layout } from "../style";

const Contact = () => {
  const [ sent, setSent ] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqwq189', 'template_yoaku6d', form.current, 'hgA6eU5_bi7kSp9QJ')
      .then((result) => {
          setSent(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  }
  return (
    <section id="contact" className={`contact ${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
      <video src={videoEth} autoPlay loop muted />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label>First Name</label>
                  <input type="text" name="first_name" required="required"/>
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" name="last_name" required="required"/>
                  </div>
              </div>
                
                <label>Email</label>
                <input type="email" name="user_email" required="required"/>
               
                
                  <label>Phone No.</label>
                  <input type="TEL" name="phone" required="required"/>
                
                  <label>Message</label>
                  <textarea rows="6" name="message" required="required"/>
                  {!sent ? (
                    <button type="submit"><span>Send</span></button>
                  ) : (
                    <h1 className="px-1">Email Sent &#x2728;</h1>
                  )}
            </form>
            </div>
    </section>
  );
  };

export default Contact;
