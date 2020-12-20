import axios from "axios";

export const fetchVideosRequest = () => {
	return {
		type: "FETCH_VIDEOS_REQUEST"
	}
}

export const fetchVideosSucces = state => {
	return {
		type: "FETCH_VIDEOS_SUCCESS",
		payload: state
	}
}

export const fetchVideosFailure = error => {
	return {
		type: "FETCH_VIDEOS_FAILURE",
		payload: error
	}
}

export const tagVideosRequest = () => {
	return {
		type: "TAG_VIDEOS_REQUEST"
	}
}

export const tagVideosSucces = state => {
	return {
		type: "TAG_VIDEOS_SUCCESS",
		payload: state
	}
}

export const tagVideosFailure = error => {
	return {
		type: "TAG_VIDEOS_FAILURE",
		payload: error
	}
}

export const fetchState = () => {
	return dispatch => {
		dispatch(fetchVideosRequest());
		axios.get("http://localhost:5000/api/news")
		.then(res => {
			dispatch(fetchVideosSucces(res.data));
		}).catch(error => {
			fetchVideosFailure(error.message);
		});
	}
}

export const getVideosTag = (tag?:string) => {
	return dispatch => {
		const query = tag ? `?tag=${tag}` : "";
		dispatch(tagVideosRequest());
		axios.get(`http://localhost:5000/api/videos${query}`)
		.then(res => {
			dispatch(tagVideosSucces(res.data));
		}).catch(error => {
			tagVideosFailure(error.message);
		});
	}
}