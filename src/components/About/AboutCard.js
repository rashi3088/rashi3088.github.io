import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rashi Varshney</span>.
            <br/>
            I am currently employed as a <span className="purple">Software Developer</span>, working for the Offers 
            and Pricing team in Varis, a subsidiary of Office Depot Ltd.
            <br />
            I am currently residing in <span className="purple"> Downtown San Francisco, California</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing My Ukulele
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's only one way to find out - and that is to take a LEAP OF FAITH!"{" "}
          </p>
          <footer className="blockquote-footer">Rashi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
