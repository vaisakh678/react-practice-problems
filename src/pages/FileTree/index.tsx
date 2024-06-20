import React from "react";
import tree, { TFile } from "../../constants/file_tree";
import File from "./components/File";

const FileTree: React.FC = () => {
	return (
		<div className="min-h-svh w-screen">
			<ul className="w-[300px]">
				{tree.map((file: TFile) => (
					<File file={file} depth={0} key={crypto.randomUUID()} />
				))}
			</ul>
		</div>
	);
};

export default FileTree;

