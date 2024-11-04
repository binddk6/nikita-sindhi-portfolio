// app/page.js
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "../styles/global.css";
import Summary from "./components/Summery";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      <Summary />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}
