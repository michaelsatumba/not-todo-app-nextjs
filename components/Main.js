import Image from 'next/image';
import React, { useState } from 'react';
import Third from '../components/Third';
import xSymbol from '../public/icon-cross.svg';

function Main() {
	const [items, setItems] = useState([
		'Watch Youtube',
		'Eat Ice Cream',
		'Procrastinate',
	]);
	const [notTodo, setNotTodo] = useState('');
	const [complete, setComplete] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		// items.unshift(notTodo);
		// console.log(items);
		// console.log(notTodo);
		setItems(() => [...items, notTodo]); //idk what this does
		// console.log(items);
		setNotTodo('');
	};

	const deleteItem = (index) => {
		// setItems(() => [...items, notTodo]);
		console.log('delete ' + index);
		const arr = items.filter((item, itemIndex) => itemIndex != index); // deletes the index
		setItems(arr);
	};

	const crossOff = (index) => {
		console.log('crossOff ' + index);
		const arr2 = items.filter((item, itemIndex) => itemIndex != index);
		// setItems(arr2);

		setComplete(false);

		// if (complete) {
		// 	setComplete(false);
		// } else {
		// 	setComplete(true);
		// }
	};

	const clear = () => {
		setItems([]); // sets array to empty
	};

	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div className="absolute top-24 border-none bg-slate-700 px-10">
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
								onChange={(e) => setNotTodo(e.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>

			{/* second */}
			<div className="flex flex-col border-none bg-slate-700 px-12 py-2 text-white">
				<div className="border-b-2">
					<ul className="flex flex-col">
						{items.map((element, index) => (
							<li
								className={`flex flex-row justify-between text-green-500 ${
									complete ? 'none' : 'line-through'
								}`}
								key={index}
							>
								<input
									type="checkbox"
									className="w-5 h-5 place-self-center"
									onClick={() => crossOff(index)}
								/>
								{element}
								<button
									className="place-self-center"
									onClick={() => deleteItem(index)}
								>
									<div className="h-5 w-5 relative">
										<Image
											src={xSymbol}
											alt="xSymbol"
											objectFit="cover"
											layout="fill"
										/>
									</div>
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="flex space-x-24 text-gray-400">
					<p>{items.length} items left</p>
					<button onClick={clear}>Clear Completed</button>
				</div>
			</div>

			{/* third */}
			<Third />
		</div>
	);
}

export default Main;
