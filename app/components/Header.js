// app/components/Header.js
"use client";

import AnimatedContainer from "./AnimatedContainer";

const Header = () => (
  <AnimatedContainer>
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1>Nikita Sindhi</h1>
      <p>Business Development Executive</p>
      <div>
        <a
          href="mailto:nikitasindhi5499@gmail.com"
          style={{ textDecoration: "none" }}
        >
          📧
          <span>nikitasindhi5499@gmail.com</span>
        </a>
      </div>
      <p>📍 Ahmedabad, Gujarat, India</p>
      <a
        href="https://www.linkedin.com/in/nikitasindhi/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </header>
  </AnimatedContainer>
);

export default Header;
