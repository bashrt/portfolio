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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TODO List Website"
              description="Welcome to our TODO List project your solution for staying organized and productive in today's fast-paced world. This digital TODO List offers a user-friendly interface and customizable features to help you manage tasks, set goals, and track progress effectively. With seamless integration across devices, it's your ultimate companion for streamlining tasks and fostering a mindset of productivity and intentionality. Join us on this journey towards achieving more with purpose and clarity, one task at a time.."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather forecast Website"
              description="Welcome to our Weather website, your one-stop destination for real-time weather updates, forecasts, and insights. With user-friendly navigation and comprehensive data, we aim to empower you to make informed decisions, whether you're planning your day or preparing for a journey. Join us as we explore the fascinating world of meteorology and provide you with the tools you need to stay safe, informed, and prepared in any weather condition."
              ghLink="https://github.com/bashrthussain/Weather-app.git"
              demoLink="https://bashrthussain.github.io/Weather-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Onu App"
              description="Onu App is a flagship product of Sophros Technologies Pvt. Ltd. We provide Free Digital solutins to schools, especially to them who can not afford such tools, with the aim to transform the Education sector."
              ghLink="https://github.com/Pranjalpatil17/ONU-APP-Educational-website-using-HTML-CSS-JAVASCRIPT.git"
              demoLink="https://pranjalpatil17.github.io/ONU-APP-Educational-website-using-HTML-CSS-JAVASCRIPT/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ABC"
              description="XYZ"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ABC"
              description="XYZ"
              ghLink="#"
              // demoLink=" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TITLE"
              description="XYZ"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
