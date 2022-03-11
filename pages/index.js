import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import React, { useState } from 'react';

export default function Home(props) {
	const [bgColor, setBgColor] = useState('bg-blue-900');
	// const bgColor = props.bgColor;

	return (
		<div className={`h-screen ${bgColor} font-['Josefin_Sans']`}>
			{/* Header */}
			<Header changeBgColor={(bgColor) => setBgColor(bgColor)} />
			{/* Main */}
			<Main />
			{/* Footer */}
			<Footer />
		</div>
	);
}
