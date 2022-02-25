import Image from 'next/image';
import React, { useState } from 'react';
import Third from '../components/third';

function Main() {
	const [items, setItems] = useState([]);
	const [notTodo, setNotTodo] = useState('');

	// const list = ['Watch TV', 'hello'];

	const handleSubmit = (event) => {
		event.preventDefault();
		// items.unshift(notTodo);
		// console.log(items);
		setItems((arr) => [...arr, arr]);
	};

	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div className="absolute top-24 left-14 border-none bg-slate-700 px-10">
				<form onSubmit={handleSubmit}>
					<div className="flex space-x-3">
						<div>
							<input type="checkbox" className="" onClick={handleSubmit} />
						</div>

						<div>
							<input
								type="text"
								placeholder="Create a new not-to-do..."
								className="bg-slate-700 text-white"
								value={notTodo}
								onChange={(element) => setNotTodo(element.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>

			{/* second */}
			<div className="flex flex-col border-none bg-slate-700 px-12 py-2 text-white">
				<div className="flex space-x-3 border-b-2">
					{items.map((e) => (
						<div>{e}</div>
					))}
					{/* ugh want to give up! */}
					{/* <div>
						<input type="checkbox" className="" />
					</div> */}
					{/* <div>
						<p>{list[0]}</p>
					</div> */}
					{/* <div className="h-5 w-4 relative bg-red-600">
						<Image src="/icon-cross.svg" layout="fill" />
					</div> */}
				</div>

				<div className="flex justify-between text-gray-400">
					<p>5 items left</p>
					<p>Clear Completed</p>
				</div>
			</div>

			{/* third */}
			<Third />
		</div>
	);
}

export default Main;
