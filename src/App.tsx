import React, { CSSProperties, Suspense, useEffect, useState } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
//@ts-ignore
import Logo from './assets/Logo.png'
import Cursor from './components/Cursor'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Box from './components/Box/Box'
import { ThreeCamera } from './components/ThreeCamera'
//@ts-ignore
import circleSrc from './assets/circle.gif'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'
import Torus from './components/Torus/Torus';
import {isMobile, isMobileOnly} from 'react-device-detect';
import MenuIcon from '@material-ui/icons/Menu';

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

const Intro:React.FC =({ children }) =>{
	return(
		<div className="container mx-auto w-full lg:h-96 overflow-hidden flex flex-col lg:flex-row mt-20" style={{height:"48rem"}}>
			{children}
		</div>
	)
}
const textArray =["P","l","a","y"]

const Page: React.FC<{ className?: string, style?:CSSProperties }> = ({ children, className, style }) => {
	return (
		<div className={`w-screen h-screen overflow-x-hidden `+className} style={style}>
			{children}
		</div>
	)
}

export default function App() {
	return (
		<>
			<SimpleBar style={{ height: "100vh" }}>
				<Page>
					<div className="relative inset-0 lg:mt-24  mt-36 p-10 text-white lg:text-9xl text-5xl lg:ml-24 space-y-10 z-50">
						<Slogan>C</Slogan>
						<Slogan>o</Slogan>
						<Slogan>d</Slogan>
						<Slogan>e</Slogan>
						<div className="lg:ml-36 ml-4">
							{textArray.map((char,i)=>(
								<Slogan key={i}>{char}</Slogan>
							))}
						</div>
						<div className="lg:ml-64 ml-8">
							<Slogan>C</Slogan>
							<Slogan>r</Slogan>
							<Slogan>e</Slogan>
							<Slogan>a</Slogan>
							<Slogan>t</Slogan>
							<Slogan>e</Slogan>
						</div>
						
					</div>
					<div className="absolute inset-0  w-full overflow-hidden flex justify-end z-0">
							<Canvas className="w-full">
								<ambientLight />
								<pointLight position={[10, 10, 10]} />
								{/* <Box position={[2, 0, 0]} /> */}
								{/* <Box position={[1.2, 0, 0]} /> */}
								<Torus position={[1,0,0]} />
								<EffectComposer>
									<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
								</EffectComposer>
							</Canvas>
					</div>
					
				</Page>
				<div className="flex flex-col mt-16 w-full">
					<Intro>
						<div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-center bg-cover" style={{
							backgroundImage:`url(https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)`
						}}/>
						<div className="py-8 px-16 text-white w-full lg:w-1/2 space-y-4">
							<div className="font-bold text-3xl lg:text-5xl">
								Lorem
							</div>
							<div className="text-xl lg:text-2xl">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vel nihil quaerat perspiciatis minima nam quasi incidunt, temporibus dolorum hic non magnam iste omnis id quam eveniet. Doloribus, cumque sit!
							</div>
						</div>
					</Intro>
					<Intro>
						<div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-center bg-cover" style={{
							backgroundImage:`url(https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)`
						}}/>
						<div className="py-8 px-16 text-white w-full lg:w-1/2 space-y-4">
							<div className="font-bold text-3xl lg:text-5xl">
								Lorem
							</div>
							<div className="text-xl lg:text-2xl">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vel nihil quaerat perspiciatis minima nam quasi incidunt, temporibus dolorum hic non magnam iste omnis id quam eveniet. Doloribus, cumque sit!
							</div>
						</div>
					</Intro>
					<Intro>
						<div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-center bg-cover" style={{
							backgroundImage:`url(https://images.unsplash.com/photo-1520583457224-aee11bad5112?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)`
						}}/>
						<div className="py-8 px-16 text-white w-full lg:w-1/2 space-y-4">
							<div className="font-bold text-3xl lg:text-5xl">
								Lorem
							</div>
							<div className="text-xl lg:text-2xl">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vel nihil quaerat perspiciatis minima nam quasi incidunt, temporibus dolorum hic non magnam iste omnis id quam eveniet. Doloribus, cumque sit!
							</div>
						</div>
					</Intro>
				</div>
				<footer className=" mt-16 text-center w-full h-24 bottom-0 text-white">
				上海薛来网络科技有限公司 © 2020 版权所有<br/>
				沪 ICP 备 19039915 号
				</footer>
			</SimpleBar>
			{
				isMobile ? <header className="w-full h-24 absolute top-0 flex items-center bg-black bg-opacity-80 text-white px-4">
					<div className="text-xl">LingoScript</div>
					<div className="w-full"/>
					<MenuIcon fontSize="large"/>
				</header>:<header className="w-full h-24 absolute top-0 flex bg-black bg-opacity-80 text-white">
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
			}
			{
				!isMobileOnly && <Cursor />
			}
			
			
		</>
  	)
}
