// components/Experience.js
import AnimatedContainer from "./AnimatedContainer";

const experiences = [
  {
    title: "Business Development Executive",
    company: "Simform",
    location: "Ahmedabad, Gujarat, India",
    date: "02/2023 - Present",
    description: [
      "Managed diverse lead types including hot leads, cold leads, and campaign-based outreach by adapting strategies to optimize conversion rates.",
      "Collaborated with the data research team to create targeted campaigns, boosting lead generation",
      "Prospected in Europe and the USA, including the UK, Dubai, Netherlands, and other regions; tailored outreach strategies based on regional nuances.",
      "Targeted multiple industries such as Health Tech, FinTech, and Legal Tech; leveraged industry trends to position products effectively.",
      "Leveraged job portals like LinkedIn and Y Combinator for business development, identifying potential clients based on hiring trends and growth patterns. ",
      "Enhanced client engagement and satisfaction by proficiently using tools like HubSpot, Dialpad, and Aircall; streamlined communication and follow-ups.",
      "Utilized LinkedIn Sales Navigator proficiently to identify and connect with high-quality prospects, enhancing lead targeting accuracy.",
    ],
  },
  {
    title: "E-commerce Executive Intern",
    company: "Mishkon",
    location: "Ahmedabad, India",
    date: "05/2022 - 06/2022",
    description: [
      "Gained hands-on experience managing Amazon Seller and Vendor Central, optimizing advertising campaigns to boost visibility and drive sales.",
      "Conducted keyword research using Helium10 to identify competitive search terms, improving campaign performance and product discoverability.",
      "Audited client Amazon pages, ensuring accurate and effective product listings, and generated weekly progress reports for client updates.",
    ],
  },
];

const Experience = () => (
  <section style={{ padding: "20px" }}>
    <h2>Experience</h2>
    {experiences.map((exp, index) => (
      <AnimatedContainer key={index}>
        <div>
          <h3 style={{ color: "#f06c05" }}>
            {exp.title} at <span>{exp.company}</span>
          </h3>
          <p style={{ marginBottom: "10px" }}>
            {exp.date} | {exp.location}
          </p>
          <ul style={{ paddingLeft: "10px" }}>
            {exp.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </AnimatedContainer>
    ))}
  </section>
);

export default Experience;
