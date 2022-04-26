
import { Html, MeshDistortMaterial, RoundedBox, Sphere } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";

import Helpers from "./components/helpers/helpers";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={Loading}>

        <Helpers />
        <OrbitControls />

        <Sphere args={[1, 50, 100]} scale={1}>
          <MeshDistortMaterial 
            wireframe={false}
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0} />
        </Sphere>

        <ambientLight args={[0xffffff]} intensity={0.1} />
        <directionalLight position={[1, 2, 5]} intensity={1} />        

      </Suspense>
    </Canvas>
  );
}

