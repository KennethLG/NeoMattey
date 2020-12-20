import React from "react";
import {Route} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {Body} from "./components/Body";
import {Contact} from "./components/Contact";
import {Info} from "./components/Info";
import {Videos} from "./components/Videos";

export const App: any = (props: any) => {
	return (
		<div>
			<Navbar/>
			<Route path="/" exact>
				<Body/>
			</Route>
			<Route path="/contact" exact>
				<Contact/>
			</Route>
			<Route path="/videos" exact>
				<Videos/>
			</Route>
			<Info/>
		</div>
	)
}