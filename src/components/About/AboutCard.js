import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, j'suis <span className="purple">SRAIDI YOUNESS </span>
            Du <span className="purple"> Casablanca, Maroc.</span>
            <br />
            Je suis actuellement employé comme développeur de logiciels chez FGS-infos.
            <br />
            {/* J'ai terminé le MSc intégré (IMSc) en mathématiques et en informatique au BIT Mesra. */}
            <br />
            <br />
            En dehors du codage, voici quelques autres activités que j'aime faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Rédaction de blogs technologiques
            </li>
            <li className="about-activity">
              <ImPointRight /> langue étrangère
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          « Efforcez-vous de construire des choses qui font la différence ! »{" "}
          </p>
          <footer className="blockquote-footer">Sraidi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
