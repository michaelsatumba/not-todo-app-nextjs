import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import xSymbol from '../public/icon-cross.svg';

function Main(props) {
	const [items, setItems] = useState([
		{ Todo: '100 Push-ups', complete: false },
		{ Todo: '100 Sit-ups', complete: false },
		{ Todo: '100 Squats', complete: false },
		{ Todo: 'Run 10k', complete: false },
	]);
	const [Todo, setTodo] = useState('');
	// const [active, setActive] = useState('text-blue-500');
	// const [active1, setActive1] = useState('');
	// const [active2, setActive2] = useState('');

	const [display, setDisplay] = useState(items); //<-- this is the filtered array for mapping onto UI display based on displayType
	const [displayType, setDisplayType] = useState('ALL'); //<-- either "ALL" / true (for complete) / false (for active)

	const [allButton, setAllButton] = useState('text-blue-500');
	const [activeButton, setActiveButton] = useState('');
	const [completedButton, setCompletedButton] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const newTodo = { Todo: Todo, complete: false };
		if (newTodo.Todo == '') {
		} else {
			setItems((items) => {
				return [...items, newTodo];
			});
		}

		setTodo('');
	};

	const deleteItem = (index) => {
		const arr = items.filter((item, itemIndex) => itemIndex != index); // deletes the index
		setItems(arr);
	};

	const clear = () => {
		setItems([]); // sets array to empty
	};

	const crossOff = (index) => {
		// console.log('index', index);
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

	// const activate = () => {
	// 	// alert('activate');

	// 	if (active == 'text-blue-500') {
	// 		setActive('');
	// 		setItems((items) => {
	// 			return [...items];
	// 		});
	// 	} else {
	// 		setActive('text-blue-500');
	// 		setActive1('');
	// 		setActive2('');
	// 	}
	// };

	// const activate1 = () => {
	// 	// alert('activate');

	// 	if (active1 == '') {
	// 		setActive1('text-blue-500');
	// 		setActive('');
	// 		setActive2('');
	// 		const activeList = items.filter((item) => item.complete == false);
	// 		// console.log(activeList);
	// 		setItems(activeList);
	// 	} else {
	// 		setActive1('');
	// 	}
	// };

	// const activate2 = () => {
	// 	// alert('activate');

	// 	if (active2 == '') {
	// 		setActive2('text-blue-500');
	// 		setActive('');
	// 		setActive1('');
	// 		const result = items.filter((item) => item.complete == true);
	// 		// console.log(result.length);
	// 		if (result.length == 0) {
	// 			setItems([...items]);
	// 		} else {
	// 			setItems(result);
	// 		}
	// 	} else {
	// 		setActive2('');
	// 	}
	// };

	useEffect(() => {
		if (displayType === 'ALL') {
			return (
				setDisplay(items),
				setAllButton('text-blue-500'),
				setCompletedButton(''),
				setActiveButton('')
			);
		} else {
			return (
				setDisplay(items.filter((each) => each.complete === displayType)),
				setAllButton('')
			);
		}
	}, [displayType, items]);

	useEffect(() => {
		if (displayType === true) {
			setCompletedButton('text-blue-500');
			setActiveButton('');
			setAllButton('');
		} else if (displayType === false) {
			setActiveButton('text-blue-500');
			setAllButton('');
			setCompletedButton('');
		}
	});

	return (
		<div className="grid justify-items-center">
			{/* first */}
			<div
				className={`absolute top-24 border-none ${props.bgColor} px-20 py-3 rounded-lg`}
			>
				<form onSubmit={handleSubmit}>
					<div className="flex">
						<input
							type="checkbox"
							className="mt-2 w-6 h-6 rounded-full"
							onClick={handleSubmit}
						/>
						<div>
							<input
								type="text"
								placeholder="Create a new to-do..."
								className={`border-none ${props.bgColor} ${props.textColor}`}
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
					className={`${props.border} border-gray-200 ${props.bgColor} px-12 py-2 text-white rounded-lg`}
				>
					<div className="border-b-2">
						{display.map((element, index) => (
							<div
								className={`flex flex-row justify-between ${props.textColor} ${
									element.complete ? 'line-through' : 'none'
								}`}
								key={index}
							>
								<input
									type="checkbox"
									className="w-5 h-5 place-self-center rounded-full bg-gradient-radial from-purple-500 via-pink-500 to-red-500"
									onClick={() => crossOff(index)}
									defaultChecked={element.complete}
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
						<p>{display.length} items left</p>
						<button onClick={clear}>Clear Completed</button>
					</div>
				</div>

				<div className="mt-5">
					<div
						className={`${props.border} ${props.bgColor} flex justify-around text-gray-400 text-lg px-5 py-2`}
					>
						<button
							onClick={() => setDisplayType('ALL')}
							className={`${allButton}`}
						>
							<p>All</p>
						</button>
						<button
							onClick={() => setDisplayType(false)}
							className={`${activeButton}`}
						>
							<p>Active</p>
						</button>
						<button
							onClick={() => setDisplayType(true)}
							className={`${completedButton}`}
						>
							<p>Completed</p>
						</button>
					</div>
					<div className="mt-5 text-center text-gray-400">
						<p>Drag and drop to reorder list</p>
						{/* {JSON.stringify(items)} */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;

// to do
// drag and drop
