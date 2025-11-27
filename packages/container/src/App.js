import React from "react";
import { MarketingApp } from "./components/MarketingApp";

export const App = () => {
	console.log("A");

	return (
		<div>
			<h1>Container</h1>
			<hr />
			<MarketingApp />
		</div>
	);
};
