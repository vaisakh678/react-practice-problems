import React, { MouseEvent, useState } from "react";

interface IBubble {
	x: number;
	y: number;
}

const PlaceBubble: React.FC = () => {
	const [bubbles, setBubbles] = useState<Array<IBubble>>([]);
	const [popped, setPopped] = useState<Array<IBubble>>([]);

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target !== event.currentTarget) return;
		const { clientX: x, clientY: y } = event;
		setBubbles((prev) => [...prev, { x, y }]);
		setPopped([]);
	};

	const handleUndo = () => {
		setBubbles((prev) => {
			const cpy = [...prev];
			const popped = cpy.pop();
			if (popped) setPopped((prevPopped) => [...prevPopped, popped]);
			return cpy;
		});
	};

	const handleRedo = () => {
		setPopped((prev) => {
			const cpy = [...prev];
			const popped = cpy.pop();
			if (popped !== undefined) {
				setBubbles((prevPopped) => [...prevPopped, popped]);
			}
			return cpy;
		});
	};

	return (
		<div className="min-h-svh w-screen" onClick={handleClick}>
			<div className="m-3 space-x-2">
				<button
					disabled={bubbles.length === 0}
					className="z-10 relative bg-black disabled:bg-gray-600 text-white p-1 rounded min-w-14"
					onClick={handleUndo}
				>
					Undo
				</button>
				<button
					disabled={popped.length === 0}
					className="z-10 relative bg-black disabled:bg-gray-600 text-white p-1 rounded min-w-14"
					onClick={handleRedo}
				>
					Redo
				</button>
			</div>
			{bubbles.map((bubble: IBubble, idx) => (
				<div
					key={idx}
					style={{ left: bubble.x, top: bubble.y, transform: "translate(-50%, -50%)" }}
					className="w-5 h-5 bg-blue-500 rounded-full absolute"
					//
				/>
			))}
		</div>
	);
};

export default PlaceBubble;

