import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture(imgUrl);

  console.log(decal);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[20, 20, 5]} intensity={1.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronBufferGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div>s</div>
    // <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    //   {/* <ambientLight intensity={2.5} /> */}
    //   {/* <directionalLight position={[20, 20, 5]} intensity={1.5} /> */}
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls enableZoom={false} />
    //     <Ball imgUrl={icon} />
    //   </Suspense>
    // </Canvas>
  );
};

export default BallCanvas;
