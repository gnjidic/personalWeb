import React from 'react'; 
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 

const Skills = ({skill, link}) => {
    const icon = {
        Instagram: <FaInstagram/>,
        Github : <FaGithub/>,
        Mail : <MdEmail/>,
        LinkedIn : <FaLinkedin/>,
        X: <FaTwitter/>
    }
    
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={skill} className='SkillBox'>
            {icon[skill]}
        </a>
  )
}

export default Skills
