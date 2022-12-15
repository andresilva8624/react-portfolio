import React from 'react';
import Image from '../../assets/cover/avatar2.JPG';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
      
        <div className="profile-img my-5">
        <img src={Image} alt="wooden background"></img>
        </div>
        <p>
        Born and raised in Porto Alegre, Brazil, I moved to Los Angeles in 2006 looking to pursue a career in music. I've been playing guitar for over 20 years but also have I've worked on many different
                    industries.
                    I have a passion for working hard and making a difference on the community. I live with my
                    girlfriend and my dog Django in the City Of Angels. I love to travel and have a good time with my
                    friends.
        </p>
       
        <p>
        I'm
                    currently studying software and web development at UCLA Bootcamp. Very excited to learn this new
                    skill.
                    I'm highly motivated and exceptionally professional having lead many teams throughout my journey.

                    I looking forward to learn as much as possible as a software/web/app developer and apply my
                    knowledge to make a difference.        </p>
      </div>
    </section>
  );
}

export default About;
