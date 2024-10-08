import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Astronauts = ({ isMobile }) => {
  const { nodes, animations } = useGLTF('./astronaut2/scene.gltf');  // Load GLTF model
  const astronautRef = useRef();  // Create a reference for the astronaut mesh
  const { actions } = useAnimations(animations, astronautRef);  // Bind the animations to the model
  
  useEffect(() => {
    if (actions.Animation) {  // Ensure the "Animation" clip exists
      actions.Animation.setLoop(THREE.LoopRepeat, Infinity);  // Set the animation to loop indefinitely
      actions.Animation.play();  // Play the animation
    } else {
      console.warn("Animation not found!");
    }

    return () => {
      actions.Animation?.stop();  // Stop the animation when the component unmounts
    };
  }, [actions]);

  return (
    <group> 
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        ref={astronautRef}  // Bind the reference to the primitive
        object={nodes.Sketchfab_Scene}  // Use the loaded model
        scale={isMobile ? 0.35 : 1.30}  // Scale based on mobile
        position={isMobile ? [0, -1.9, -.2] : [2, -2.5, 0]} // Position the model
        rotation={[0, 0.2, 0]}
      />
    </group>
  );
}

const AstronautsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always' // Changed from 'demand' to 'always' for continuous updates
      shadows
      camera={{ position: [20, 10, 20], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> 
        <Astronauts isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default AstronautsCanvas;
