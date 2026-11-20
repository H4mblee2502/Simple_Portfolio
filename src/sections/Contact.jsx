import { useState } from "react";
import SectionWrapper from "../components/common/SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect Formspree, EmailJS, or a mailto fallback here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Contact Me">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        />

        <button type="submit">Send Message</button>
        {submitted && <p className="success-msg">Thanks! Your message has been sent.</p>}
      </form>
    </SectionWrapper>
  );
}