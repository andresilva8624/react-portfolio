import React from 'react';
import Image from '../../assets/cover/avatar2.JPG';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
      
        <div className="profile-img my-5">
        <img src={Image} alt="wooden background"></img>
        </div>
        <p>        Personable and passionate Full Stack Web Developer with a background in sales and customer service to provide unique perspectives on how users interact with web applications and software platforms. Earned a Full Stack Web
Development certificate from UCLA. An articulate individual who enjoys connecting with co-workers and is passionate about building applications that assist people to make their lives easier. Looking to bring attention to detail and
technical skills to a company to grow and become a valuable asset. Strengths in work ethic, problem solving,
teamwork, creativity and building projects from ideation to execution.
       
        </p>
       
        <p>
    Born and raised in Porto Alegre, Brazil, moved to Los Angeles in 2006 looking for a new life and oportunities. 
                    Passioned about working hard and making a difference on the community. Currently lives with his
                    girlfriend and his dog Django in the City Of Angels. Loves to code, play guitar, travel and have a good time with his
                    friends.  </p>
      </div>
    </section>
  );
}

export default About;
