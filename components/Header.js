import Image from 'next/image';
import React from 'react';

function Header() {
	function hello() {
		alert('Hello');
	}
	// make this to change style of page
	return (
		<div className="">
			{/* <img src="./images/bg-mobile-dark.jpg" alt="background-dark" /> */}
			<div className="h-56 w-screen relative">
				<Image
					src="/bg-mobile-dark.jpg"
					alt="background-dark"
					objectFit="cover"
					layout="fill"
				/>
			</div>

			<p className="text-white font-bold absolute top-10 left-5 text-2xl tracking-widest">
				NOT TO DO
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
					src="/icon-sun.svg"
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
