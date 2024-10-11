import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import RocketCanvas from './canvas/Rocket'
import { allProjects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

const ProjectCard = ( {index, name, description, tags, image, source_code_link, live_site} ) => {
    return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[400px] lg:w-[800px] w-full'
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl' 
            />
  
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              {/* add another div to live url of project */}
            </div>
          </div>
  
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary test-[14px]">{description}</p>
            <button 
              onClick={() => window.open(live_site, "_blank")}
              className='bg-[#915eff] mt-5 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              Check it out
            </button>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.filter(tag => tag.name).map((tag) => (
              <p key={tag.name} className={`text-14[px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
}

const AllProjects = () => {
    
    return (
      <div className='flex flex-col items-center pt-40 pb-20'>
        <div className=''>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>My Work</p>
              <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>

          <motion.div className="w-full flex flex-col" variants={fadeIn("", "", 0.1, 1)}>
              <motion.p
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
              >
              The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
              </motion.p>
          </motion.div>

          <div className="mt-20 flex flex-col items-center gap-7">
              {allProjects.map((project, index) => (
              <ProjectCard 
                  key={`project-${index}`}
                  index={index}
                  {...project} 
              />
              ))}
          </div>
        </div>
      </div>
    )
}

export default SectionWrapper(AllProjects, 'allprojects')