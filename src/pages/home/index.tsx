import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="min-h-dvh w-screen p-4">
			<ul className="list-disc ml-4">
				<li>
					<Link className="underline" to={"/color-gussing"}>
						Color gussing
					</Link>
				</li>
				<li>
					<Link className="underline" to={"/synonym-finder"}>
						Synonyms finder
					</Link>
				</li>
				<li>
					<Link className="underline" to={"/synonym-finder"}>
						Sudoku Solver
					</Link>
				</li>
				<li>
					<Link className="underline" to={"/place-bubble"}>
						Place Bubble
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;

