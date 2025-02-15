import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Footer from "../Footer/Footer";
import "./ContactUs.css";

const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-description">
          Feel free to reach out to me via the platforms below. I’d love to
          connect!
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/kashaboina-kalyan-308495284/"
            className="contact-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/kalyankashaboina"
            className="contact-link github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            GitHub
          </a>
          <a
            href="mailto:kalyankashaboina007.com"
            className="contact-link email"
          >
            <FaEnvelope className="contact-icon" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
