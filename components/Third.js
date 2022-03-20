import React from 'react';

function Third(props) {
	return (
		<div
			className={`mt-5 w-3/4 border ${props.bgColor} flex justify-around text-gray-400`}
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
	);
}

export default Third;
