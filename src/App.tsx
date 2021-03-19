import React from 'react'
//@ts-ignore
import Logo from './assets/Logo.png'
import Cursor from './components/Cursor'
export default function App() {
	const Title:React.FC =({ children }) =>{
		return(
			<div className="text-md opacity-70 transition duration-500 ease-in-out  hover:bg-blue-600 rounded-xl p-2">
				{children}
			</div>
		)
	}
  return (
    <>
    	<header className="w-full h-24 flex bg-black bg-blur bg-opacity-80 text-white">
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
