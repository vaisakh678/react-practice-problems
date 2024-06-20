import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import Synonyn from "./pages/Synonym/index.tsx";
import PlaceBubble from "./pages/PlaceBubble/index.tsx";
const Home = lazy(() => import("./pages/home"));
const ColorGussing = lazy(() => import("./pages/ColorGussing/index.tsx"));

const routes = [
	{
		path: "/",
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<Home />
			</Suspense>
		),
	},
	{
		path: "/color-gussing",
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<ColorGussing />,
			</Suspense>
		),
	},
	{
		path: "/synonym-finder",
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<Synonyn />
			</Suspense>
		),
	},
	{
		path: "/place-bubble",
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<PlaceBubble />
			</Suspense>
		),
	},
] as Array<RouteObject>;

export default routes;

