import { useFrame, useThree } from "@react-three/fiber";
import {
  WebGLCubeRenderTarget,
  RGBAFormat,
  LinearMipmapLinearFilter,
} from "three";
import React from "react";
import { CubeCamera } from "three";

function Sphere(props) {
  const { scene, gl } = useThree();
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBAFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });

  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <directionalLight intensity={0.9} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.02}
        metalness={1}
      />
    </mesh>
  );
}

export default Sphere;
