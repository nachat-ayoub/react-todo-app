import React, { useState } from "react";

import "./Styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [from_name, setfrom_name] = useState("");
  const [message, setmessage] = useState("");
  const [user_email, setuser_email] = useState("");

  const [emailResponse, setEmailResponse] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: "Nachat Ayoub",
      appName: "Todo App",

      from_name: from_name,
      message: message,
      user_email: user_email,
      reply_to: user_email,
    };

    emailjs
      .send(
        "service_blwpwvb",
        "simple_template",
        templateParams,
        "user_HTx9oqFFUFBEfJElXFWn0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailResponse(true);
          alert("Email sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          setEmailResponse(false);
          alert("Failed to send email!");
        }
      );
  };

  return (
    <div className="Contact__Container">
      <form className="emailForm" onSubmit={sendEmail}>
        <div className="form_part">
          <label htmlFor="name">Full Name:</label>
          <input
            onChange={(e) => setfrom_name(e.target.value)}
            value={from_name}
            type="text"
            placeholder="Full Name..."
            name="from_name"
          />
        </div>
        <div className="form_part">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setuser_email(e.target.value)}
            value={user_email}
            type="email"
            placeholder="Your email..."
            name="user_email"
          />
        </div>

        <div className="form_part">
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            name="message"
            placeholder="Your message..."
            name="message"
          ></textarea>
        </div>
        <div className="form_part">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
