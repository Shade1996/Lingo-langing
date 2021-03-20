import React, { Suspense, useEffect, useState } from 'react'
import { useCamera } from "@react-three/drei"
import { Canvas, useThree } from 'react-three-fiber'
//@ts-ignore
import Logo from './assets/Logo.png'
import Cursor from './components/Cursor'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Box from './components/Box/Box'
import { ThreeCamera } from './components/ThreeCamera'

export default function App() {
	const Title:React.FC =({ children }) =>{
		return(
			<div className="text-md opacity-70 transition duration-500 ease-in-out  hover:bg-blue-600 rounded-xl p-2">
				{children}
			</div>
		)
	}
	const Slogan:React.FC = ({ children }) =>{
		return(
			<div className="inline-block transition duration-500 ease-in-out transform select-none hover:scale-125">
				{children}
			</div>
		)
	}

	const textArray =["C","o","o","p","e","r","a","t","i","o","n"]

	const Page: React.FC = ({ children }) => {
		return (
			<div className="w-screen h-screen  overflow-x-hidden">
				{children}
			</div>
		)
	}
	
	return (
		<>
			
			<SimpleBar style={{ height: "100vh" }}>
				<Page>
					<div className="relative inset-0 mt-24 p-10 text-white text-9xl ml-24 space-y-10 z-50">
						<Slogan>C</Slogan>
						<Slogan>o</Slogan>
						<Slogan>d</Slogan>
						<Slogan>e</Slogan>
						<div className="ml-36">
							<Slogan>C</Slogan>
							<Slogan>r</Slogan>
							<Slogan>e</Slogan>
							<Slogan>a</Slogan>
							<Slogan>t</Slogan>
							<Slogan>e</Slogan>
						</div>
						<div className="ml-64">
							{textArray.map((char,i)=>(
								<Slogan key={i}>{char}</Slogan>
							))}
						</div>
						<div className="absolute inset-0  w-full overflow-hidden flex justify-end">
							<Canvas className="max-w-4xl" >
								{/* <ThreeCamera /> */}
								<ambientLight />
								<pointLight position={[10, 10, 10]} />
								<Box position={[0, 0, 0]} />
								{/* <Box position={[1.2, 0, 0]} /> */}
							</Canvas>
						</div>
					</div>
					
				</Page>
				<Page>

				</Page>
			</SimpleBar>
			<header className="w-full h-24 absolute top-0 flex bg-black bg-opacity-80 text-white">
					<img src={Logo} alt="Logo" className="h-full"/>
					<div className="h-full flex items-center text-xl text-gray-200">LingoScript</div>
					<div className="w-full" />
					<div className="flex items-center space-x-4 p-4">
						<Title >Document</Title>
						<Title >Learn</Title>
						<Title >Resource</Title>
						<Title >About</Title>
					</div>
			</header>
			<Cursor />
		</>
  	)
}
