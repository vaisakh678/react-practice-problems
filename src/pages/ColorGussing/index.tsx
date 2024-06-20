import React, { useEffect, useState } from "react";
import genRandomColor from "../../utils/genRandomColor";

const ColorGussing: React.FC = () => {
	const [colors, setColors] = useState<string[]>();
	const [color, setColor] = useState("blue");
	const [result, setResult] = useState<"Correct answer" | "Wrong answer">();

	const setRandomColor = () => {
		const tmpColors = [genRandomColor(), genRandomColor(), genRandomColor()];
		setColors(tmpColors);
		setColor(tmpColors[Math.floor(Math.random() * tmpColors.length)]);
	};

	const validateResult = (_color: string) => {
		if (_color === color) {
			setResult("Correct answer");
			setRandomColor();
			return;
		}
		setResult("Wrong answer");
	};

	useEffect(() => {
		setRandomColor();
	}, []);

	return (
		<div className="min-h-svh w-screen flex flex-col justify-center items-center">
			<div className="w-[200px] rounded-sm h-[200px] mb-14" style={{ background: color }} />
			<div className="mb-3 flex flex-col sm:flex-row">
				{colors?.map((color, idx) => (
					<button key={idx} onClick={() => validateResult(color)} className="bg-black m-3 text-white py-1.5 px-3 rounded min-w-16">
						{color}
					</button>
				))}
			</div>
			<p className={result === "Correct answer" ? "text-green-500" : "text-red-500"}>{result}</p>
		</div>
	);
};

export default ColorGussing;

