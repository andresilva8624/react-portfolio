import React, { useState } from 'react';
import Project from "../Project";
import img1 from "../../assets/images/toxicity.gif";
import img2 from "../../assets/images/ecommerce.gif";
import img3 from "../../assets/images/team.gif";
import img4 from "../../assets/images/note.gif";
import img5 from "../../assets/images/employee.gif"

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const projects = [
    {
      name: 'Toxicity App',
      description: 'HTML/JavaScript/Node/Handlebars/MySQL/CSS',
      link: "https://toxicity2000.herokuapp.com/",
      repo: "https://github.com/andresilva8624/toxicity",
      img: img1
    },
    {
      name: 'E-Commerce App',
      description: 'Node/JavaScript/Express/Insomnia',
      link: "https://andresilva8624.github.io/E-Commerce-App/",
      repo: "https://andresilva8624.github.io/E-Commerce-App/",
      img: img2
    },
    {
      name: 'Team Generator',
      description: 'HTML/Node/JavaScript/CSS',
      link: "https://github.com/andresilva8624/Team-Generator",
      repo: "https://github.com",
      img: img3
    },
    {
      name: 'Note Taker',
      description: 'HTML/Node/JavaScript/CSS',
      link: "https://andres-note-taker.herokuapp.com/",
      repo: "https://github.com/andres-note-taker/",
      img: img4
    },
    {
      name: 'Employee Tracker',
      description: 'MySQL/Node/JavaScript',
      link: "https://andresilva8624.github.io/Employee-Tracker/",
      repo: "https://github.com",
      img: img5
    },
  ];

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
