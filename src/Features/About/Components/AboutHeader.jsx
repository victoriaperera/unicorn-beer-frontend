import "./styles.css";

import React from "react";

function AboutHeader() {
  return (
    <div className="about-header">
      <section className="p-5 text-center">
        <h2 className="mb-5">What is Unicorn Beer?</h2>
        <p className="">
          Unicorn Beer is an app developed using the MERN stack as the final project of a Coding
          Bootcamp at Hack Academy, an educational institution specializing in programming courses.
          The Bootcamp is an immersive and intensive full-time course that lasts for three months
          and requires a workload of 600 hours. Its goal is to prepare its students to be Junior
          Full Stack Developers.
          <hr className="border-0" />
          This final project aims to showcase the application of the diverse technologies learned
          throughout the Bootcamp. Unicorn Beer was developed over a period of three weeks by a team
          of five students, totaling approximately 700 hours of work.
        </p>
      </section>
    </div>
  );
}

export default AboutHeader;
