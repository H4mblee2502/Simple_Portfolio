import { useState } from "react";
import SectionWrapper from "../components/common/SectionWrapper";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email" && error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    const trimmedEmail = formData.email.trim();

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address (for example, name@example.com).");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      // Replace this timeout with your real Formspree/EmailJS request when ready
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", {
        email: trimmedEmail,
        message: formData.message.trim(),
      });

      setSubmitted(true);
      setFormData({ email: "", message: "" });
    } catch {
      setError("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Contact Me">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "email-error" : undefined}
          className={error ? "input-error" : undefined}
          disabled={isSubmitting}
          required
        />

        {error && (
          <p id="email-error" className="error-msg" role="alert">
            {error}
          </p>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          disabled={isSubmitting}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Sending...</span>
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {submitted && (
          <p className="success-msg">Thanks! Your message has been sent.</p>
        )}
      </form>
    </SectionWrapper>
  );
}