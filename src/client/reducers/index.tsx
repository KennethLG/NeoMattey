import axios from "axios";
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const initalState: object = {
	loading: false,
	data: [],
	error: ""
}

export const reducer = (state: any = initalState, action: any) => {
	switch (action.type) {
		case "FETCH_VIDEOS_REQUEST":
			return {
				...state,
				loading: true
			}

		case "FETCH_VIDEOS_SUCCESS":
			return {
				loading: false,
				videos:action.payload
			}

		case "FETCH_VIDEOS_FAILURE":
			return {
				loading: false,
				videos: [],
				error: action.payload
			}
	}
}