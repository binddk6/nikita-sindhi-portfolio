// app/components/Education.js
"use client";

import AnimatedContainer from "./AnimatedContainer";

const education = [
  {
    degree: "Master of Business Administration (MBA) in Marketing",
    institution: "GLS University",
    date: "2021 - 2023",
    location: "Ahmedabad, India",
    gpa: "7.24 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ganpat University",
    date: "2017 - 2020",
    location: "Mehsana, Gujarat, India",
    gpa: "8.0 / 10",
  },
];

const Education = () => (
  <AnimatedContainer>
    <section style={{ padding: "20px" }}>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{edu.degree}</h3>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p>{edu.date}</p>
          <p>GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  </AnimatedContainer>
);

export default Education;
