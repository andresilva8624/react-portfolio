import React from 'react';
import Project from "../Project";
import img1 from "../../assets/images/toxicity.gif";
import img2 from "../../assets/images/ecommerce.gif";
import img3 from "../../assets/images/team.gif";
import img4 from "../../assets/images/note.gif";
import img5 from "../../assets/images/employee.gif";
import img6 from "../../assets/images/fort.gif";
import img7 from "../../assets/images/quiz.gif";
import img8 from "../../assets/images/horiseon-project.gif";
import img9 from "../../assets/images/website.gif";
import img10 from "../../assets/images/website2.gif";
import img11 from "../../assets/images/blog.gif";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const projects = [
    {
      name: 'Andres Music Blog',
      description: 'MERN/React/GraphQL/HTML/CSS/Javascript/Bootstrap',
      link: "https://andre-tech-blog.herokuapp.com/",
      repo: "https://github.com/andresilva8624/andres-music-blog",
      img: img11
    },
    {
      name: 'Fortnite App Store',
      description: 'HTML/CSS/Javascript/JQuery/Bulma/FortniteTrackerAPI/FortniteAPI',
      link: "https://swyner97.github.io/fortnite-app/",
      repo: "https://github.com/swyner97/fortnite-app",
      img: img6
    },
    {
      name: 'Toxicity App',
      description: 'HTML/JavaScript/Node/Handlebars/MySQL/CSS',
      link: "https://toxicity2000.herokuapp.com/",
      repo: "https://github.com/andresilva8624/toxicity",
      img: img1
    },
    {
      name: 'Weather Dashboard',
      description: 'HTML/Node/JavaScript/CSS',
      link: "https://andresilva8624.github.io/Andre-Weather-Dashboard//",
      repo: "https://github.com/andresilva8624/Andre-Weather-Dashboard",
      img: img9
    },
    {
      name: 'JavaScript Quiz',
      description: 'HTML/CSS/JavaScript',
      link: "https://andresilva8624.github.io/Andre-JavaScript-Quiz/",
      repo: "https://github.com/andresilva8624/Andre-JavaScript-Quiz",
      img: img7
    },
    {
      name: 'Horiseon SEO',
      description: 'HTML/CSS/JavaScript',
      link: "https://andresilva8624.github.io/Horiseon-SEO/",
      repo: "https://github.com/andresilva8624/Horiseon-SEO",
      img: img8
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
    {
      name: 'Workday Schedule',
      description: 'HTML/CSS/JavaScript',
      link: "https://andresilva8624.github.io/Daily-Work-Schedule/",
      repo: "https://github.com/andresilva8624/Daily-Work-Schedule",
      img: img10
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
