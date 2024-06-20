export type TFile = {
	name: string;
} & ({ type: "File" } | { type: "Dir"; children?: Array<TFile> });

const tree: TFile[] = [
	{
		type: "File",
		name: "README.md",
	},
	{
		type: "File",
		name: "index.html",
	},
	{
		type: "File",
		name: "package-lock.json",
	},
	{
		type: "File",
		name: "package.json",
	},
	{
		type: "File",
		name: "postcss.config.js",
	},
	{
		type: "Dir",
		name: "public",
		children: [
			{
				type: "File",
				name: "vite.svg",
			},
		],
	},
	{
		type: "Dir",
		name: "src",
		children: [
			{
				type: "File",
				name: "App.tsx",
			},
			{
				type: "Dir",
				name: "assets",
				children: [
					{
						type: "File",
						name: "react.svg",
					},
				],
			},
			{
				type: "File",
				name: "index.css",
			},
			{
				type: "File",
				name: "main.tsx",
			},
			{
				type: "Dir",
				name: "pages",
				children: [
					{
						type: "Dir",
						name: "ColorGussing",
						children: [
							{
								type: "File",
								name: "index.tsx",
							},
						],
					},
					{
						type: "Dir",
						name: "PlaceBubble",
						children: [
							{
								type: "File",
								name: "index.tsx",
							},
						],
					},
					{
						type: "Dir",
						name: "Synonym",
						children: [
							{
								type: "File",
								name: "index.tsx",
							},
						],
					},
					{
						type: "Dir",
						name: "home",
						children: [
							{
								type: "File",
								name: "index.tsx",
							},
						],
					},
				],
			},
			{
				type: "File",
				name: "routes.tsx",
			},
			{
				type: "Dir",
				name: "utils",
				children: [
					{
						type: "File",
						name: "genRandomColor.ts",
					},
				],
			},
			{
				type: "File",
				name: "vite-env.d.ts",
			},
		],
	},
	{
		type: "File",
		name: "tailwind.config.js",
	},
	{
		type: "File",
		name: "tsconfig.json",
	},
	{
		type: "File",
		name: "tsconfig.node.json",
	},
	{
		type: "File",
		name: "vite.config.ts",
	},
];

export default tree;
