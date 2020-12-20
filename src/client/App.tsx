import React from "react";
import {Route} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {Body} from "./components/Body";
import {Info} from "./components/Info";
import {Videos} from "./components/Videos";
import {About} from "./components/About";
import ImgBody from "./assets/portada.jpg";

export const App: any = (props: any) => {
	return (
		<div>
			<Navbar/>
			<img className="imageHome" src={ImgBody}></img>
			<Route path="/" exact>
				<Body/>
			</Route>
			<Route path="/videos" exact>
				<Videos/>
			</Route>
			<Route path="/about" exact>
				<About/>
			</Route>
			<Info/>
		</div>
	)
}