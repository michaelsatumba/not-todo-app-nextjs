import Image from 'next/image';
import React, { useState } from 'react';
import Third from '../components/Third';
import xSymbol from '../public/icon-cross.svg';

function Main(props) {
	const [items, setItems] = useState([
		{ Todo: 'hello', complete: false },
		{ Todo: 'world', complete: false },
	]);
	const [Todo, setTodo] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// items.unshift(Todo);
		// console.log(items);
		// console.log(Todo);
		// setItems(() => [...items, Todo]); //idk what this does
		// setNotTodo('');
		const newTodo = { Todo: Todo, complete: false };
		setItems((items) => {
			return [...items, newTodo];
		});
		setTodo('');
	};

	const deleteItem = (index) => {
		// setItems(() => [...items, Todo]);
		console.log('delete ' + index);
		const arr = items.filter((item, itemIndex) => itemIndex != index); // deletes the index
		setItems(arr);
	};

	const clear = () => {
		setItems([]); // sets array to empty
	};

	const crossOff = (index) => {
		console.log('index', index);
		setItems((prevList) => {
			//Then returning a new array with the spread out filteredAwayList and readding the updated item status
			return [
				...prevList.slice(0, index),
				{
					Todo: prevList[index].Todo,
					complete: !prevList[index].complete,
				},
				...prevList.slice(index + 1, prevList.length),
			];
		});
	};

	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div
				className={`absolute top-24 border-none ${props.bgColor} px-20 py-3 rounded-lg`}
			>
				<form onSubmit={handleSubmit}>
					<div className="flex space-x-3">
						<div>
							<input
								type="checkbox"
								className="w-6 h-6"
								onClick={handleSubmit}
							/>
						</div>

						<div>
							<input
								type="text"
								placeholder="Create a new to-do..."
								className={`${props.bgColor} ${props.textColor}`}
								value={Todo}
								onChange={(e) => setTodo(e.target.value)}
							/>
						</div>
					</div>
				</form>
			</div>

			{/* second */}
			<div className="absolute top-44">
				<div
					className={` border-none ${props.bgColor} px-12 py-2 text-white rounded-lg`}
				>
					<div className="border-b-2">
						{items.map((element, index) => (
							<div
								className={`flex flex-row justify-between ${props.textColor} ${
									element.complete ? 'line-through' : 'none'
								}`}
								key={index}
							>
								<input
									type="checkbox"
									className="w-5 h-5 place-self-center"
									onClick={() => crossOff(index)}
								/>
								{element.Todo}
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
							</div>
						))}
					</div>

					<div className="flex space-x-24 text-gray-400">
						<p>{items.length} items left</p>
						<button onClick={clear}>Clear Completed</button>
					</div>
				</div>

				<div className="mt-5">
					<div
						className={` border ${props.bgColor} flex justify-around text-gray-400`}
					>
						<button>
							<p>All</p>
						</button>
						<button>
							<p>Active</p>
						</button>
						<button>
							<p>Completed</p>
						</button>
					</div>
					<div className="mt-5 text-center text-gray-400">
						<p>Drag and drop to reorder list</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;

// to do
// how to apply style to specific item in array
