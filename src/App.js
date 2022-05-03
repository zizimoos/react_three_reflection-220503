import { Canvas } from "@react-three/fiber";
import SkyBox from "./components/SkyBox";
import Sphere from "./components/Sphere";
import styled from "styled-components";
import CameraControls from "./components/CameraControls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Canvas>
        <CameraControls></CameraControls>
        {/* <ambientLight /> */}
        <Sphere></Sphere>
        <SkyBox></SkyBox>
      </Canvas>
    </Container>
  );
}

export default App;
