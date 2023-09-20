import React, { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Cubed from './Cubed';

const CanvasWrapper = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enableRotate={false} autoRotate />
      <directionalLight intensity={1} position={[55, 10, 20]} />

      <PerspectiveCamera makeDefault position={[15, 23, 0]} fov={15}>
        <directionalLight intensity={1} position={[0, 0, 1]} />
      </PerspectiveCamera>

      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Cubed scale={[5, 3, 5]} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
