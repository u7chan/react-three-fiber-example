import { FC, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from './Box';

export const Scene: FC = (props) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    // Initial Camera
    camera.lookAt(new Vector3(0, 0, 0));
    camera.position.set(2, 2, 2);
    // Setup Camera Controller
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 10;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
};
