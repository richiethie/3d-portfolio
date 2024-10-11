import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { styles } from '../styles'

const Footer = () => {


    return (
        <footer
            className={`${styles.paddingX} w-full flex flex-col items-center mt-20 py-8 bottom-0 z-20 bg-tertiary`}
        >
            <div className='flex'>
                <div className='p-2'>
                    <a 
                        href="https://www.linkedin.com/in/richiethie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='hover:text-secondary'
                    >
                        <BsLinkedin size={25}/>
                    </a>
                </div>
                <div className='p-2'>
                    <a 
                        href="mailto:richiethie@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='hover:text-secondary'
                    >
                        <MdOutlineMailOutline size={25} />
                    </a>
                </div>
                <div className='p-2'>
                    <a 
                        href="https://github.com/richiethie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='hover:text-secondary'
                    >
                        <FaGithub size={25} />
                    </a>
                </div>
            </div>
            <div className='flex items-center'>
                <FaRegCopyright />
                <p className='p-2'>2022-2024 - Richie Thiesfeldt</p>
            </div>
        </footer>
        
    )
}

export default Footer