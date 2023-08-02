import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swami Goluguri </span>
            from <span className="purple"> Atlanta, USA.</span>
            <br /> I am a final year student pursuing an Masters
            in Computer Science with intrests in Marketting at Georgia State University.
            <br />
           

Additionally a seasoned marketing professional with a strong background in web development. With 6 years of experience, I excel in creating impactful marketing strategies while building user-friendly websites that enhance the user experience. My unique skill set allows me to deliver results-driven campaigns and cutting-edge digital solutions to drive growth and success for businesses..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Swami Goluguri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
