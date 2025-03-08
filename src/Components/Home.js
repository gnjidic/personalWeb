import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import fea from '../images/fea.png';
import me from '../images/profile.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I am <b>Damjan Gnjidic</b></h1>
          <Typed/>   
        </div>

        
        <img className='illustration' src={me} alt="description" />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief introduction</h1>
          <p>
          I’m Damjan, a CAE Simulation Specialist with expertise in Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA),
          and thermal analysis. With a strong background in open-source tools like OpenFOAM, Elmer, and Code_Aster, I help engineers and
          businesses develop high-precision simulations across aerospace, automotive, and energy industries. My passion lies in bridging
          engineering and software development, optimizing workflows, and advancing meshing techniques for more efficient simulations.
          </p>
        </div>
        <Tilt>
          <img className='fea' src={fea} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home