import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Assume these are defined in your project:
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"; // Each project should have a unique id, image, name, description, live_site, etc.
import { fadeIn, textVariant } from "../utils/motion";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'

// -------------------
// ProjectCard Component
// -------------------
const ProjectCard = ({ project, index, onSelect }) => {
  return (
    <motion.div
      layoutId={`card-container-${index}`}
      onClick={() => onSelect({ ...project, index })}
      className="bg-tertiary p-5 rounded-2xl w-full cursor-pointer"
    >
      <motion.div className="relative w-full h-[200px] md:h-[330px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <motion.img
          layoutId={`card-image-${index}`}
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <motion.div className="absolute inset-0 flex justify-start items-start bg-gray-900/40">
          <div className="flex justify-between items-center w-full mt-2 mx-2">
            <p className={`text-[14px] tracking-wider bg-tertiary/80 border ${project.color.bg} ${project.color.border} rounded-lg p-2`}>
              {project.name}
            </p>
            {project.capstone && (
              <>
                <BiSolidBadgeCheck 
                  className="text-3xl text-[#915eff]" 
                  data-tooltip-place="top"
                  data-tooltip-id="capstone"
                  data-tooltip-content="Capstone"
                />
                <Tooltip id="capstone" />
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// -------------------
// Works Component
// -------------------
const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <LayoutGroup>
      {/* Title & Description */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <motion.div className="w-full flex flex-col" variants={fadeIn("", "", 0.1, 1)}>
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
        <Link to="/projects">
          <button className="bg-[#915eff] mt-5 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            View all
          </button>
        </Link>
      </motion.div>

      {/* Two-row grid for exactly 4 projects */}
      <div className="mt-20 space-y-7">
        {/* Top Row: 45% left, 55% right */}
        <div className="grid grid-cols-1 sm:grid-cols-[45%_55%] gap-7">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
        {/* Bottom Row: 55% left, 45% right */}
        <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] gap-7">
          {projects.slice(2, 4).map((project, index) => (
            <ProjectCard
              key={index + 2}
              index={index + 2}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Overlay for selected project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Container for the lifted project card */}
            <motion.div
              layoutId={`card-container-${selectedProject.index}`}
              className="bg-tertiary p-5 rounded-2xl max-w-4xl w-[80%] md:w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`card-image-${selectedProject.index}`}
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
              {/* Animated description below the image */}
              <motion.div
                className="mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold text-[24px]">
                    {selectedProject.name}
                  </h3>
                  <div
                    onClick={() => window.open(selectedProject.source_code_link, "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <img 
                      src={github}
                      alt="github"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <p className="mt-2 text-secondary text-[14px]">
                  {selectedProject.description}
                </p>
                <button
                  onClick={() => window.open(selectedProject.live_site, "_blank")}
                  className="bg-[#915eff] mt-5 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                >
                  Check it out
                </button>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.filter(tag => tag.name).map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default SectionWrapper(Works, "projects");