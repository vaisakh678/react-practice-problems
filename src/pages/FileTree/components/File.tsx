import React, { useState } from "react";
import { TFile } from "../../../constants/file_tree";
import { IoMdArrowDropright } from "react-icons/io";

interface IFileProps {
	file: TFile;
	depth: number;
}

const File: React.FC<IFileProps> = ({ file, depth }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		if (file.type !== "Dir") return;
		setIsOpen((prev) => !prev);
	};
	return (
		<li>
			<div
				className="min-w-52 hover:bg-slate-200 cursor-pointer px-2 flex items-center rounded"
				onClick={handleOpen}
				style={{ marginLeft: depth * (file.type === "Dir" ? 10 : 20) + "px" }}
			>
				{file.type === "Dir" ? <IoMdArrowDropright className={`${isOpen ? "rotate-90 " : ""} mr-1`} /> : null}
				<p>{file.name}</p>
			</div>

			{file.type === "Dir" && isOpen ? (
				<ul>
					{file.children?.map((file: TFile) => (
						<File depth={depth + 1} file={file} key={crypto.randomUUID()} />
					))}
				</ul>
			) : null}
		</li>
	);
};

export default File;

