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

const fetchState = () => {
	return function(dispatch) {
		dispatch(fetchVideosRequest());
		axios.get("https://neomattey.herokuapp.com/api/videos")
		.then(res => {
			dispatch(fetchVideosSucces(res.data));
		}).catch(error => {
			fetchVideosFailure(error.message);
		});
	}
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
/*store.subscribe(() => {
	console.log(store.getState());
});*/
store.dispatch(fetchState());

render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>
,document.getElementById("root"));