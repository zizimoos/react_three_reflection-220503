import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

function SkyBox(props) {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);

  scene.background = texture;
  return null;
}

export default SkyBox;
