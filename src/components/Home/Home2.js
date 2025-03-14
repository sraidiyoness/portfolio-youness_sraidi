import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            laissez-moi<span className="purple"> PRESENTER </span>moi-même
            </h1>
            <p className="home-about-body">
             Je suis tombé amoureux de la programmation et j'ai au moins appris quelque chose, je pense... 🤷‍♂️
              <br />
              <br />Je parle couramment des classiques tels que
              <i>
                <b className="purple"> Laravel, ReactJS, Woordpress et sql. </b>
              </i>
              <br />
              <br />
              Mes centres d'intérêt sont la création &nbsp;
              <i>
                <b className="purple">Technologies et produits Web </b> ainsi que dans des domaines liés à la{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, je mets également à profit ma passion pour le développement de produits avec des <b className="purple">Node.js</b> ou
              <i>
                <b className="purple">
                  {" "}
                  Bibliothèque et frameworks Javascript modernes 
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js ou Vue.js</b>
              </i>
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
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
            N'hésitez pas à <span className="purple">connecter </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sraidiyoness"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/youness-sraidi-964124294/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/youness_sraidi91/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
