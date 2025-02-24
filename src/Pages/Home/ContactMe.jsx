import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Mail } from "react-feather"; // Import Mail icon

export default function ContactMe() {
  const form = useRef(null); // ✅ Explicitly initializing with null

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ohwqvl", // Replace with your EmailJS Service ID
        "template_grveuxa", // Replace with your EmailJS Template ID
        form.current,
        "n5bPYkAeg2ScNJdmB" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          if (form.current) {
            form.current.reset(); // ✅ Prevents accessing null
          }
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <p className="sub--title">Get In Touch</p>
        <Mail className="mail-icon" size={24} /> {/* ✅ Added Mail Icon */}
        <p className="text-lg">
          If you have any queries, feel free to contact me.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              name="first_name"
              className="contact--input text-md"
              placeholder="Enter First Name"
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              name="last_name"
              className="contact--input text-md"
              placeholder="Enter Last Name"
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              name="user_email"
              className="contact--input text-md"
              placeholder="Enter Email"
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              name="user_phone"
              className="contact--input text-md"
              placeholder="Enter Mobile Number"
              required
            />
          </label>
        </div>
        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            name="message"
            className="contact--input text-md"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
