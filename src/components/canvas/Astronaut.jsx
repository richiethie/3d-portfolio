import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Astronauts = ({ isMobile }) => {
  const astronaut = useGLTF('./astronaut/scene.gltf')

  return (
    // lighting
    <mesh> 
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
      {/* object position */}
      <primitive 
        object={astronaut.scene}
        scale={isMobile ? 0.35 : 0.50}
        position={isMobile ? [0, -1.9, -.2] : [3, -.1, 0]} // 0, -3.25, -1.5
        rotation={[0, 0.2, 0]}
      />
    </mesh>
  )

}

const AstronautsCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)')
  
      setIsMobile(mediaQuery.matches)
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
  
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, [])
  
    return (
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 10, 20], fov: 15}}
        gl={{ preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI /2}
          /> 
          <Astronauts isMobile={isMobile} />
        </Suspense>
  
        <Preload all />
      </Canvas>
    )
  }
  
  export default AstronautsCanvas