import React from "react";
import {Route} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {Body} from "./components/Body";
import {Contact} from "./components/Contact";

export const App: any = () => {
	return (
		<div>
			<Route path="/" exact>
				<Navbar/>
				<Body/>
			</Route>
			<Route path="/contact" exact>
				<Contact/>
			</Route>
		</div>
	)
}