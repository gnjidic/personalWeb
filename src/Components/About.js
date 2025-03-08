import React from 'react';
import Skills from './Skills.js';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to know me!</h1>
          <p>
          I am Damjan, and my journey into engineering started with a strong passion for mathematics and physics. During high school,
          I participated in numerous national-level competitions, where I honed my problem-solving skills and developed a deep interest
          in analytical thinking. This passion naturally led me to the Mechanical Faculty of Belgrade University, where I immersed myself
          in the world of mechanics and fluid dynamics. Fascinated by the theoretical foundations of engineering, I pursued a specialization
          in Applied Mechanics during my master’s studies, with a strong focus on Computational Fluid Dynamics (CFD) using OpenFOAM.
          <p/>
          <p>
          My professional career began as a CFD and FEA engineer, where I combined numerical simulations with mechanical design to solve
          real-world engineering challenges. Working across industries such as aerospace and mining, I implemented simulation workflows that
          optimized performance while leveraging the power of open-source tools. Over the years, I expanded my expertise beyond just simulations,
          integrating CAD, meshing techniques, and automation to streamline engineering processes.
          </p>
          <p>
          After six years of working in diverse engineering fields, I transitioned into the railway industry, focusing on HVAC simulations for
          ultra-luxury train compartments. This role allowed me to push the boundaries of thermal and fluid analysis, ensuring optimal comfort
          and efficiency in high-end transportation systems.
          </p>
          Now, my focus has shifted towards business, self-development, and family. I am building my own path in the engineering software space,
          working on innovative CAE tools that make simulation workflows more accessible and efficient. At the same time, I am actively building
          my personal brand in the CAE space, sharing knowledge, insights, and experiences to connect with like-minded engineers and businesses.
          </p>
        </div>  
      </div>
      
      <h1 className='SkillsHeading'>Social Media and Contact</h1>
      <div className='skills'>
        
        <Skills skill='LinkedIn' link="https://www.linkedin.com/in/damjangnjidic/" />
        <Skills skill='X' link="https://www.x.com/damjangnjidic/" />
        <Skills skill='Github' link="https://www.github.com/gnjidic/" />
        <Skills skill='Instagram' link="https://www.instagram.com/damjangnjidic/" />
        <Skills skill='Mail' link="mailto:info@damjangnjidic.com"/>
        
      </div>
    </>
  )
}

export default About