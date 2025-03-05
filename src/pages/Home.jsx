import { useEffect, useState } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from '../components'
import Loader from './Loader';
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2500); // Simulate async loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        {isLoading && <Loader />}
        <Navbar />
        <StarsCanvas />
        <motion.div
          variants={slideIn("up", "spring", 2.5, 0.75)}
          initial="hidden"
          animate="show"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 10
            }}
          >
            <Hero />
          </div>
        </motion.div>
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <div className="relative z-10">
        <Works />
        </div>
        <div className="relative z-0">
        <Feedbacks />
        <Contact />
        {/* <StarsCanvas /> */}
        </div>
        <Footer />
    </div>
  )
}

export default Home