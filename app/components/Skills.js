// app/components/Skills.js
"use client";

import AnimatedContainer from "./AnimatedContainer";

const skills = [
  "HubSpot",
  "Zendesk Sell",
  "Pipedrive",
  "Orum",
  "Nooks",
  "Aircall",
  "Sales Strategy",
  "Client Relationship Management",
  "Market Analysis",
  "Negotiation",
  "Lead Generation",
  "Business Development",
  "Communication",
];

const Skills = () => (
  <AnimatedContainer>
    <section style={{ padding: "20px" }}>
      <h2>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              padding: "8px",
              border: "1px solid #333",
              borderRadius: "5px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  </AnimatedContainer>
);

export default Skills;
