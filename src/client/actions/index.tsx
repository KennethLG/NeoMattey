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