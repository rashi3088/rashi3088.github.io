import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic-2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub, AiFillInstagram, AiFillMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started off my programming journey as a challenge, and seem to have fallen in love with it, and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Golang, Java and Python. </b>
              </i>
              <br />
              <br />
              Due to having a creative side, my primary field of interest is &nbsp;
              <i>
                <b className="purple">Front End Development</b> </i>although I have had pretty
                good exposure and proficiency in {" "}
                <i>
                <b className="purple">
                  Backend and REST API Development
                </b>
              </i>
              <br />
              <br />
              When I am not kicking ass building cool software stuff, I 
              also love to explore my passion for <b className="purple">dance</b> and music. I 
              even <b className="purple">play the ukulele</b>. I even aspire to visit all 50 states of the US, 
              and never miss an opportunity to <b className="purple">travel and explore</b> new places.
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rashi3088"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rashivarshney/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rashi_3097"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rashivarshney97@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
