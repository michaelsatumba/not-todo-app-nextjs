import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import React, { useState } from 'react';

export default function Home(props) {
	const [color, setColor] = useState('bg-slate-900');

	const onChangeBackground = (newColor) => {
		setColor(newColor);
	};

	const [bgColor, setbgColor] = useState('bg-slate-700');

	const onChangeBg = (newColor) => {
		setbgColor(newColor);
	};

	const [textColor, setTextColor] = useState('text-gray-300');

	const onChangeTextColor = (newColor) => {
		setTextColor(newColor);
	};

	const [border, setBorder] = useState('border-none');

	const onChangeBorder = (newBorder) => {
		setBorder(newBorder);
	};

	return (
		<div className={`h-screen ${color} font-['Josefin_Sans']`}>
			{/* Header */}
			<Header
				color={color}
				onChangeBackground={onChangeBackground}
				bgColor={bgColor}
				onChangeBg={onChangeBg}
				textColor={textColor}
				onChangeTextColor={onChangeTextColor}
				border={border}
				onChangeBorder={onChangeBorder}
			/>
			{/* Main */}
			<Main bgColor={bgColor} textColor={textColor} border={border} />
			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}

// line-through on item onClick of checkbox
// change background color based on onClick of icon
