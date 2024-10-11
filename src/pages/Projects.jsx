import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { Navbar, StarsCanvas, AllProjects, Footer } from '../components'
import RocketCanvas from '../components/canvas/Rocket'
import { allProjects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

const Projects = () => {


    return (
        <div className='relative z-0 bg-primary'>
            <Navbar />
            <StarsCanvas />
            <div className='absolute z-10'>
                <RocketCanvas />
            </div>
            <AllProjects />
            <Footer />
        </div>
    )
}

export default Projects