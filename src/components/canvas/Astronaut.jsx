import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Import useFrame
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Astronauts = ({ isMobile }) => {
  const { nodes, animations } = useGLTF('./astronaut2/scene.gltf', (loader) => {
    loader.manager.onError = (url) => {
      console.error('Error loading:', url);
    };
  });  // Load GLTF model

  useEffect(() => {
    if (nodes) {
      nodes.Sketchfab_Scene.traverse((child) => {
        if (child.isMesh) {
          // Optionally log mesh names
          // console.log("Mesh Name:", child.name);
        }
      });
      replaceTextures(nodes.Sketchfab_Scene); // Call the texture replacement function
    }
  }, [nodes]);

  const astronautRef = useRef();  // Create a reference for the astronaut mesh
  const { actions } = useAnimations(animations, astronautRef);  // Bind the animations to the model

  const replaceTextures = (model) => {
    const textureLoader = new THREE.TextureLoader();
  
    model.traverse((child) => {
        if (child.isMesh) {
            console.log("Child Name:", child.name); // Log the mesh name for debugging
  
            // Create a base material for other objects (if necessary)
            const baseMaterial = new THREE.MeshStandardMaterial({
                map: textureLoader.load('./astronaut2/textures/material_2_diffuse.png'),
                normalMap: textureLoader.load('./astronaut2/textures/material_2_normal.png'),
                roughnessMap: textureLoader.load('./astronaut2/textures/material_2_occlusion.png'),
                metalnessMap: textureLoader.load('./astronaut2/textures/material_2_specularGlossiness.png'),
                roughness: 0.3, // Default roughness
                metalness: 0.8, // Default metalness
            });
  
            switch (child.name) {
                case 'Object_99':
                case 'Object_100':
                case 'Object_103':
                case 'Object_106': // Apply the special material to the mask
                    child.material = baseMaterial;
                    break;
                default:
                    console.warn(`No texture applied for mesh: ${child.name}`);
                    break;
            }
  
            child.material.needsUpdate = true; // Update material
        }
    });
  };

  // Animate the astronaut flying in from the distance
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (astronautRef.current) {
      // Adjust these values for speed and position
      const startZ = -3; // Starting position
      const endZ = isMobile ? 0 : -2;    // Final resting position in the frame (adjust as necessary)

      // Move towards the camera
      astronautRef.current.position.z = THREE.MathUtils.lerp(startZ, endZ, Math.min(elapsedTime / 2, 1));

      // Scale from smaller to original size (adjust 0.5 as needed for initial size)
      const startScale = 0.01; // Initial scale
      const endScale = isMobile ? 1.35 : 1.8; // Final scale
      astronautRef.current.scale.set(
        THREE.MathUtils.lerp(startScale, endScale, Math.min(elapsedTime / 2, 1)),
        THREE.MathUtils.lerp(startScale, endScale, Math.min(elapsedTime / 2, 1)),
        THREE.MathUtils.lerp(startScale, endScale, Math.min(elapsedTime / 2, 1))
      );
    }
  });

  useEffect(() => {
    if (nodes) {
      replaceTextures(nodes.Sketchfab_Scene); // Call the texture replacement function
    }
  }, [nodes]);

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
      <pointLight
        position={isMobile ? [0, 1.6, 1.4] : [1.2, 2.5, 0]}
        intensity={isMobile ? 4 : 3} 
      />
      <spotLight
        position={[-5, 5, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        ref={astronautRef}  // Bind the reference to the primitive
        object={nodes.Sketchfab_Scene}  // Use the loaded model
        scale={isMobile ? 1.35 : 1.70}  // Scale based on mobile
        position={isMobile ? [0, -4.3, -10] : [1, -4.2, -3]} // Start position further back (Z-axis)
        rotation={[0.1, 0.8, 0]}
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
        {/* <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />  */}
        <Astronauts isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default AstronautsCanvas;
