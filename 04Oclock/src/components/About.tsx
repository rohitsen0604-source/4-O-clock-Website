import { MindsBehind } from "./MindsBehind";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me" style={{ marginBottom: "40px" }}>
        <h3 className="title">About Us</h3>
        <p className="para">
          04 O'Clock Technologies is a modern technology partner specializing in web applications, scalable software architectures, digital products, and intelligent AI solutions. We focus on zero technical debt, high availability, clean code architecture, and long-term enterprise partnerships.
        </p>
      </div>

      <MindsBehind />
    </div>
  );
};

export default About;
