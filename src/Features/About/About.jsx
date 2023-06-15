import "./styles.css";
import Header from "../../Common/Header/Header";
import TeamMemberCard from "./Components/TeamMemberCard";

import React from "react";

function About() {
  const admins = [
    { name: "Ivanna Sugliero" },
    { name: "Esteban Castañeira" },
    { name: "Lorena Rincón" },
    { name: "Nicolás Martínez Latorraca" },
    { name: "Victoria Perera" },
  ];
  return (
    <>
      <Header />
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <div className="col-12 col-lg-6 about-card about-card-one">
            TECHNOLOGIES
          </div>
          <div className="col-12 col-lg-6 about-card about-card-two">
            PROJECT ORGANIZATION - MER
          </div>
          <div className="col-12 col-lg-6 about-card about-card-three">
            PRODUCT DESIGN
          </div>
          <div className="col-12 col-lg-6 about-card about-card-four">
            ADMIN DASHBOARD
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
