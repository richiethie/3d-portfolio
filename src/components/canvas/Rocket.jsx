import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Rocket = ({ scrollY }) => {
  const { scene } = useGLTF('/rocket/scene.gltf', (loader) => {
    loader.manager.onError = (url) => {
      console.error(`Error loading model at: ${url}`);
    };
  });

  // Ensure visibility of model
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = false;
          child.material.opacity = 1;
          child.visible = true;
        }
      });
    }
  }, [scene]);

  // Rotate the model around the Y-axis and adjust based on scroll
  useFrame(() => {
    if (scene) {
      // Calculate the rotation based on the scroll position
      const rotationFactor = Math.min(scrollY / 400, 1); // Limit rotation to max 1 (180 degrees)
      scene.rotation.y += 0.01; // Spin the rocket around the Y-axis
      scene.rotation.x = Math.PI * rotationFactor - 0.2; // Rotate to face down
    }
  });

  // Adjust scale and position to move down the left side based on scroll
  const rocketXPosition = 0 - scrollY / 12000; // Fixed position on the left side
  const yPosition = -scrollY / 650 + 1; // Move down based on scroll

  return <primitive object={scene} scale={0.5} position={[rocketXPosition, yPosition, 0]} />;
};

const RocketCanvas = () => {
  // State to track scroll position
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY with the current scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <>
      {/* Rocket Canvas taking the full length of the webpage */}
      <div style={{ width: '20%', height: '100vh', position: 'fixed' }}>
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 45 }} // Camera positioned to view the rocket
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Ensures the canvas covers the entire area
        >
          <Suspense fallback={<CanvasLoader />}>
            <Rocket scrollY={scrollY} /> {/* Pass scrollY to Rocket component */}
            {/* <OrbitControls enableZoom={false} /> Disable zooming */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default RocketCanvas;
