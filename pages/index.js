import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import React, { useState } from 'react';

export default function Home(props) {
	const [color, setColor] = useState('bg-blue-900');
	// const bgColor = props.bgColor;

	const onChangeBackground = (newColor) => {
		setColor(newColor);
	};

	return (
		<div className={`h-screen ${color} font-['Josefin_Sans']`}>
			{/* Header */}
			<Header color={color} onChangeBackground={onChangeBackground} />
			{/* Main */}
			<Main />
			{/* Footer */}
			<Footer />
		</div>
	);
}

// line-through on item onClick of checkbox
// change background color based on onClick of icon
