import Image from 'next/image';
import React, { useState } from 'react';
import Third from '../components/third';
import xSymbol from '../public/icon-cross.svg';

function Main() {
	const [items, setItems] = useState([]);
	const [notTodo, setNotTodo] = useState('');
	// const [cross, setCross] = useState(true);
	const complete = false ? 'line-through' : 'none';

	// const list = ['Watch TV', 'hello'];

	const handleSubmit = (event) => {
		event.preventDefault();
		// items.unshift(notTodo);
		// console.log(items);
		// console.log(notTodo);
		setItems(() => [...items, notTodo]); //idk what this does
		// console.log(items);
		setNotTodo('');
	};

	const deleteItem = (y) => {
		// setItems(() => [...items, notTodo]);
		console.log('delete ' + y);
		const arr = items.filter((item, itemIndex) => itemIndex != y); // deletes y and y is the index
		setItems(arr);
		// console.log(arr);
	};

	const crossOff = (y) => {
		// // console.log('crossOff');
		// console.log('crossOff ' + y);
		// const arr2 = items.filter((item, itemIndex) => itemIndex != y);
		// setItems(arr2);
		// const temporaryTodos = [...items];
		// temporaryTodos[y] = !temporaryTodos[y];
		// setItems(temporaryTodos);
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
						{items.map((e, y) => (
							<li
								className={`flex flex-row justify-between text-green-500 ${complete}`}
								key={y}
							>
								<input
									type="checkbox"
									className="w-5 h-5 place-self-center"
									onClick={() => crossOff(y)}
								/>
								{e}
								<button
									className="place-self-center"
									onClick={() => deleteItem(y)}
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
