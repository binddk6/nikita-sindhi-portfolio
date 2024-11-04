// app/components/Contact.js
"use client";

import AnimatedContainer from "./AnimatedContainer";

const Contact = () => (
  <AnimatedContainer>
    <section style={{ padding: "20px" }}>
      <h2>Contact</h2>
      <p>📞 Phone: +91-8469269979</p>
      <p>
        📧 Email:{" "}
        <a href="mailto:nikitasindhi5499@gmail.com">
          nikitasindhi5499@gmail.com
        </a>
      </p>
      <p>📍 Location: Ahmedabad, Gujarat, India</p>
      <a
        href="https://www.linkedin.com/in/nikitasindhi/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </section>
  </AnimatedContainer>
);

export default Contact;
