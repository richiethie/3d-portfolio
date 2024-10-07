import { Suspense, useEffect, useState } from 'react'
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { FBXLoader } from "jsm/loaders/FBXLoader.js";
import { Canvas } from '@react-three/fiber'
import getLayer from '../../libs/getLayer'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Astronauts = ({ isMobile }) => {
  const astronaut = useGLTF('./astronaut2/scene.gltf')
  console.log(astronaut)

  const w = window.innerWidth;
  const h = window.innerHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
  camera.position.z = 5;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.05;


  const manager = new THREE.LoadingManager()
  const loader = new GLTFLoader(manager)
  const path = '../../public/astronaut2/scene.gltf'
  let character
  const sceneData = {
    character: null,
    animations: [],
  }
  loader.load(path, (fbx) => {
    function getMaterial() {
      const material = new THREE.MeshMatcapMaterial({
        matcap: TextureLoader.load("../../public/astronaut2/textures/material_2_diffuse.png")
      })
      return material
    }

    function initCharacter(fbx) {
      const char = fbx;
      char.scale.setScalar(0.02);
      char.position.set(0, -1.5, 0);
      char.traverse((c) => {
        if (c.isMesh) {
          if (c.material.name === "Alpha_Body_MAT") {
            // c.material.color = new THREE.Color(0x994400);
            c.material = getMaterial();
          }
          c.castShadow = true;
        }
      });
      const mixer = new THREE.AnimationMixer(char);
      const update = (t) => {
        mixer.update(0.02);
      };
      char.userData = { mixer, update };
      return char;
    }

    character = initCharacter(fbx);
    sceneData.character = character;
  })

  const animations = [
    "Floating",
    "Drunk Walk",
    "Being Electrocuted",
    "Idle",
    "Joyful Jump",
    "Kneeling Pointing",
    "Low Crawl",
    "Male Dance Pose",
    "Neutral Idle",
    "Reaction",
    "Spat In Face",
    "Stand To Roll",
    "Standard Walk",
    "Swimming",
    "Thriller Part 3",
    "Treading Water",
    "Walking",
    "Waving",
  ];

  const apath = "../../animations/";
  manager.onLoad = () => initScene(sceneData);
  animations.forEach((name) => {
    loader.load(`${apath}${name}.fbx`, (fbx) => {
      let anim = fbx.animations[0];
      anim.name = name;
      sceneData.animations.push(anim);
    });
  });

  function setupActions(character, animations) {
    const actions = [];
    animations.forEach((anim) => {
      let action = character.userData.mixer.clipAction(anim);
      actions.push(action);
    });
    return actions;
  }

  function initScene(sceneData) {
    const { character, animations } = sceneData;
    const actions = setupActions(character, animations);
    scene.add(character);
  
    const radius = 10;
    const geometry = new THREE.CircleGeometry(radius, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x001020,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI * -0.5;
    plane.receiveShadow = true;
    plane.position.y = -1.5;
    scene.add(plane);
  
    const sunLight = new THREE.DirectionalLight(0xffffff, 5);
    sunLight.position.set(2, 4, 3);
    sunLight.castShadow = true;
    scene.add(sunLight);
  
    // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    // scene.add(hemiLight);
  
    // Sprites BG
    const sprites = getLayer({
      hue: 0.58,
      numSprites: 8,
      opacity: 0.2,
      radius: 10,
      size: 24,
      z: -10.5,
    });
    scene.add(sprites);
  
    let timeElapsed = 0;
    function animate(t = 0) {
      timeElapsed += 0.01;
      requestAnimationFrame(animate);
  
      character?.userData.update(timeElapsed);
      renderer.render(scene, camera);
      controls.update();
    }
    let index = 2;
    let previousAction;
    playRandomAnimationClip();
    animate();
  
    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize, false);
  
    function playRandomAnimationClip() {
  
      const action = actions[index];
      if (action !== previousAction) {
        previousAction?.fadeOut(1);
        action.reset();
        action.fadeIn(1);
        action.play();
        previousAction = action;
      }
      // index += 1;
      // if (index >= actions.length) {
      //   index = 0;
      // }
     index = Math.floor(Math.random() * actions.length);
    }
    // window.addEventListener("keydown", (e) => {
    //   if (e.key === " ") {
    //     playRandomAnimationClip();
    //   }
    // });
  }



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
        scale={isMobile ? 0.35 : 1.50}
        position={isMobile ? [0, -1.9, -.2] : [0, -3, 0]} // 0, -3.25, -1.5
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