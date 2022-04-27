import { useState, useEffect } from "react";

import { Suspense } from "react";

import { Html, MeshDistortMaterial, RoundedBox, Sphere } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Helpers from "./components/helpers/helpers";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  const MIN_DISTORT = 0.5
  const MAX_DISTORT = 1

  const [distort, setDistort] = useState(MIN_DISTORT) ;

  const incrementDistort = () => {
    (distort==MIN_DISTORT) ? setDistort(MAX_DISTORT) : setDistort(MIN_DISTORT);
  }

  useEffect(() => {
    console.log(distort)    
  }, [distort])


  return (
    <Canvas>
      <Suspense fallback={Loading}>

        <Helpers />
        <OrbitControls />

        <Sphere args={[1, 50, 100]} scale={1} onPointerDown={incrementDistort}>
          <MeshDistortMaterial 
            wireframe={false}
            color="#8352FD"
            attach="material"
            distort={distort}
            speed={1.5}
            roughness={0} />
        </Sphere>

        <ambientLight args={[0xffffff]} intensity={0.1} />
        <directionalLight position={[1, 2, 5]} intensity={1} />        

      </Suspense>
    </Canvas>
  );
}

