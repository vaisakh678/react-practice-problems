import React, { FormEvent, useRef, useState } from "react";
const BASE_URL = "https://api.datamuse.com/words";

interface ISynonym {
	word: string;
	score: number;
}

const Synonyn: React.FC = () => {
	const [synonyms, setSynonyms] = useState<ISynonym[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const fetchSynonyms = async (word: string) => {
		if (buttonRef.current) buttonRef.current.disabled = true;
		const res = await fetch(`${BASE_URL}?rel_syn=${word.trim()}`);
		if (res.ok && res.status === 200) {
			const data = await res.json();
			setSynonyms(data);
			if (buttonRef.current) buttonRef.current.disabled = false;
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputRef.current) {
			fetchSynonyms(inputRef.current.value);
		}
	};

	const handleClick = (word: string) => {
		if (inputRef.current) inputRef.current.value = word;
		fetchSynonyms(word);
	};

	return (
		<div className="w-screen min-h-svh flex py-14 items-center justify-center">
			<div>
				<form onSubmit={handleSubmit} className="mb-4 flex-shrink-0">
					<input className="outline mr-2 p-0.5 px-2 rounded-sm" type="text" placeholder="enter a word" ref={inputRef} />
					<button ref={buttonRef} className="bg-black disabled:bg-gray-700 p-2 py-1 rounded text-white" type="submit">
						Submit
					</button>
				</form>
				<ul className="list-disc ml-4">
					{synonyms.map((syn, idx) => (
						<li className="cursor-pointer" onClick={() => handleClick(syn.word)} key={idx}>
							{syn.word}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Synonyn;

