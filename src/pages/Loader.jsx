import { useState, useEffect } from "react";
import { AstronautLogoPng } from "../assets";
import "../style/Loader.css";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount & resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust for mobile breakpoints
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Adjust timing as needed

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-primary z-30 flex flex-col ${isLoaded ? "split-screen" : ""}`}>
        <img 
            src={AstronautLogoPng} 
            className={`absolute top-1/2 left-1/2 bg-transparent transform -translate-x-1/2 -translate-y-1/2 z-30 h-20 md:h-40`} 
        />
        <MoonLoader 
          className="absolute z-30"
          size={isMobile ? 100 : 200}
          color="#aaa6c3"
          speedMultiplier={0.6}
        />
    </div>
  );
};

export default Loader;
