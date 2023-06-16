import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Common/Header/Header";
import TeamMemberCard from "./Components/TeamMemberCard";

import React from "react";

function About() {
  const admins = [
    { name: "Ivanna Sugliano" },
    { name: "Esteban Castañeira" },
    { name: "Lorena Rincón" },
    { name: "Nicolás Martínez Latorraca" },
    { name: "Victoria Perera" },
  ];
  return (
    <>
      <Header />
      <div className="container-fluid text-center">
        <Row className="white-row"></Row>
        <div className="row">
          <div className="col-12 col-lg-6 about-card about-card-one">
            <h3>TECHNOLOGIES</h3>
            
          </div>
          <div className="col-12 col-lg-6 about-card about-card-two">
            <h3>PROJECT ORGANIZATION - MER</h3>
          </div>
          <div className="col-12 col-lg-6 about-card about-card-three">
            <h3>PRODUCT DESIGN</h3>
          </div>
          <div className="col-12 col-lg-6 about-card about-card-four">
            <h3>ADMIN DASHBOARD</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <h3>OUR TEAM</h3>
        </div>
        <div className="row">
          {admins.map((admin) => (
            <TeamMemberCard admin={admin}></TeamMemberCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
