import { useState, useEffect } from "react";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import { Html, MeshDistortMaterial, MeshReflectorMaterial, MeshWobbleMaterial, Plane, RoundedBox, Sphere } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";

import Helpers from "./components/helpers/helpers";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  const MIN_DISTORT = 0.5
  const MAX_DISTORT = 1

  const [distort, setDistort] = useState(MIN_DISTORT);

  const incrementDistort = () => {
    distort == MIN_DISTORT ? setDistort(MAX_DISTORT) : setDistort(MIN_DISTORT);
  }

  useEffect(() => {
    console.log(distort)
  }, [distort])


  return (
    <Canvas>
      <Suspense fallback={Loading}>

        <Helpers />
        <OrbitControls />

        <Sphere args={[1, 50, 100]} scale={1} onClick={incrementDistort}>
          <MeshDistortMaterial
            wireframe={false}
            color="#8352FD"
            attach="material"
            distort={distort}
            speed={4}
            roughness={0} />
        </Sphere>

        <RoundedBox args={[1, 1, 1]} position={[2, 0, 0]}>
          <MeshWobbleMaterial
            color="#f752fd"
            factor={1}
            speed={1} />
        </RoundedBox>

        <Plane args={[10, 10]}
          position={[0, -2, 0]}
          rotation={[-1.57, 0, 0]}>
          <meshStandardMaterial color={"grey"} />
        </Plane>

        <ambientLight args={[0xffffff]} intensity={0.1} />
        <directionalLight position={[1, 2, 5]} intensity={1} />

      </Suspense>
    </Canvas>
  );
}

