import React, { useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import {TextureLoader} from 'three'
// import { TexturizedCube } from "./components/textured/TexturizedCube";
// import {LightingCube} from './components/animations/LightingCube'


function App(){
  return(
    // <Scene />
    <Canvas style={{background: "linear-gradient(to left, navy, blue)"}}>
      <pointLight intensity={4} position={[1, 2, 0]} />
      <OrbitControls />
    </Canvas>

  )
}

export default App;