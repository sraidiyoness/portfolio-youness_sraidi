import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes récentes <strong className="purple">Travaux </strong>
        </h1>
        <p style={{ color: "white" }}>
        Très prochainement je présenterai mes projets. </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gestion Des Utilisateurs"
              description="Ce projet de gestion des utilisateurs développé avec Laravel permet d’administrer efficacement les utilisateurs grâce à un système de rôles et de permissions divisé en 6 parties principales. Il englobe l’authentification, l’interface de création, modification et suppression d’un utilisateur et la gestion de l’assignation des permissions, le tout sous une interface fiable et particulièrement simple."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Todo-List"
              description="Ce projet de liste de tâches utilisant Laravel permet aux utilisateurs d'ajouter, modifier, marquer comme complet et supprimer des tâches. Il facilite la gestion des tâches grâce à une interface facile à utiliser et une expérience utilisateur sans faille."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce"
              description="Ce projet e-commerce a été conçu avec WordPress et Elementor pour offrir une boutique en ligne moderne et responsive. Il inclut une gestion complète des produits, un système de panier et de paiement sécurisé, ainsi qu’une interface personnalisable et optimisée pour une expérience utilisateur fluide."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Location De Voiture"
              description="Le projet de location de voiture Laravel permet une réservation de véhicule sans effort par les utilisateurs. Il comprend une gestion des réservations, une administration des véhicules, ainsi qu'une authentification et un ensemble de rôles pour une expérience sécurisée et intuitive. L'interface utilisateur est fluide avec un design optimisé pour une navigation efficace."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Wether API"
              description="Ce projet d'API Météo est créé avec Laravel, permettant d'afficher les prévisions météorologiques en temps réel en intégrant une API externe. Les utilisateurs peuvent rechercher la météo d'une ville spécifique et obtenir des détails tels que sa température, son humidité et ses conditions climatiques, le tout avec une interface simple et réactive."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
