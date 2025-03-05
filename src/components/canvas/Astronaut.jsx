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

  // Track scroll position and update astronaut movement
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (astronautRef.current) {
  //       // Get scroll value and normalize it
  //       const scrollY = window.scrollY || window.pageYOffset;
  //       const scrollFactor = scrollY / window.innerHeight;  // Normalize scroll (0 to 1 range)

  //       // Adjust these values to move the astronaut accordingly
  //       // ADD TERNERY FOR MOBILE
  //       const startY = isMobile ? -4.2 : -4.2;  // Initial Y position
  //       const endY = startY - scrollFactor * 200;  // Y-axis movement

  //       const startZ = isMobile ? 0 : -2;  // Initial Z position
  //       const endZ = startZ - scrollFactor * 350;  // Z-axis movement (moves backward as scroll increases)

  //       const startX = isMobile ? 0 : 1;  // Initial X position
  //       const endX = startX - scrollFactor * 300;  // X-axis movement (moves left as scroll increases)

  //       // Adjust rotation values (rotating around the Y-axis)
  //       const startRotationX = 0.1;  // Initial Y-axis rotation
  //       const endRotationX = startRotationX + scrollFactor * Math.PI;
  //       const startRotationY = 0.8;  // Initial Y-axis rotation
  //       const endRotationY = startRotationY + scrollFactor * Math.PI * 2;

  //       // Update the astronaut's position
  //       astronautRef.current.position.set(
  //         endX,  // X position (moves left)
  //         endY,  // Y position (moves up)
  //         endZ   // Z position (moves backward)
  //       );
  //       astronautRef.current.rotation.set(endRotationX, endRotationY, 0);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight
        position={isMobile ? [0.5, 1, 1.7] : [1.4, 2.5, 0]}
        intensity={isMobile ? 10 : 10} 
      />
      <spotLight
        position={[-5, 5, 10]}
        angle={0.05}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        ref={astronautRef}  // Bind the reference to the primitive
        object={nodes.Sketchfab_Scene}  // Use the loaded model
        scale={isMobile ? 1.35 : 1.70}  // Scale based on mobile
        position={isMobile ? [0, -4.3, 0] : [1, -4.2, -2]} // Start position further back (Z-axis)
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
