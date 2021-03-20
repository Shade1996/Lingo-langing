import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
//@ts-ignore
import planet from './scene.gltf'
export default function Planet() {
    const gltf =useLoader(GLTFLoader, planet)
    if (Array.isArray(gltf))
        throw new Error("unexpected glb data")
    return  <primitive object={gltf} scale={[0.005, 0.005, 0.005]} position={[0, 0, 0]} />
}
