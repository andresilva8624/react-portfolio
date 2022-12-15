import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/andresilva8624"
    },
    {
      name: "fab fa-linkedin",
      link: "https://linkedin.com/in/andresilva8624"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/19332349/andre-silva"
    }

  ]

  return (
    <footer className="flex-row px-1">
    <p>Andre Silva 2022 ©</p>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
      )}
        
    </footer>
    
  );
}

export default Footer;
