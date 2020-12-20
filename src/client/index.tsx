import React from "react";
import {render} from "react-dom";
import {App} from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import axios from "axios";
import {reducer} from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import {fetchVideosRequest, fetchVideosFailure, fetchVideosSucces} from "./actions/index";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>
,document.getElementById("root"));