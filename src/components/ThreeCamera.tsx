import { useThree } from "react-three-fiber"

export const ThreeCamera = () => {
    const {camera} = useThree()

	camera.position.x = -5

    return null
}