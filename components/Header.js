import Image from 'next/image';
import React, { useState } from 'react';

function Header(props) {
	const [image, setImage] = useState('/bg-mobile-dark.jpg');
	const [icon, setIcon] = useState('/icon-sun.svg');

	const hello = () => {
		// alert('Hello');
		if (image == '/bg-mobile-dark.jpg') {
			setImage('/bg-mobile-light.jpg');
		} else {
			setImage('/bg-mobile-dark.jpg');
		}

		if (icon == '/icon-sun.svg') {
			setIcon('/icon-moon.svg');
		} else {
			setIcon('/icon-sun.svg');
		}

		if (props.color == 'bg-slate-900') {
			props.onChangeBackground('bg-white');
		} else {
			props.onChangeBackground('bg-slate-900');
		}

		// alert(props.bgColor);

		if (props.bgColor == 'bg-slate-700') {
			props.onChangeBg('bg-white');
		} else {
			props.onChangeBg('bg-slate-700');
		}
	};
	// make this to change style of page
	return (
		<div className="">
			<div className="h-56 w-screen relative">
				<Image
					src={image}
					alt="background-dark"
					objectFit="cover"
					layout="fill"
				/>
			</div>

			<p className="text-white font-bold absolute top-10 left-5 text-2xl tracking-[.35em]">
				TO DO
			</p>

			{/* <img
				className="absolute top-10 right-5"
				src="./images/icon-sun.svg"
				alt="sun"
				onClick={hello}
			/> */}
			{/* <div className="h-64 w-96 relative"> // "relative" is required; adjust sizes to your liking
  <Image
    src={img.img}
    alt="Picture of the author"
    layout="fill" // required
    objectFit="cover" // change to suit your needs
    className="rounded-full" // just an example
  />
</div> */}
			<div className="h-10 w-10 absolute top-10 right-5">
				<Image
					src={icon}
					alt="sun"
					objectFit="cover"
					// width="50"
					// height="50"
					layout="fill"
					onClick={hello}
				/>
			</div>
		</div>
	);
}

export default Header;
