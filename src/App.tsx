import { FC } from 'react';
import { Scene } from './Scene';
import { Canvas } from '@react-three/fiber';

const App: FC = () => {
  return (
    <>
      <div style={{ position: 'relative', width: 300, height: 300 }}>
        <Canvas>
          <color attach="background" args={['#87dfe9']} />
          <gridHelper />
          <Scene />
        </Canvas>
      </div>
      <div>react-three-fiber-example</div>
    </>
  );
};

export default App;
