const initalState: object = {
	loading: false,
	videos: undefined,
	videosTag: undefined,
	error: ""
}

export const reducer = (state: any = initalState, action: any) => {
	switch (action.type) {
		case "FETCH_VIDEOS_REQUEST":
			return {
				...state,
				videos: undefined,
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
				videos: undefined,
				error: action.payload
			}

		case "TAG_VIDEOS_REQUEST":
			return {
				...state,
				videosTag: undefined,
				loading: true
			}

		case "TAG_VIDEOS_SUCCESS":
			return {
				loading: false,
				videosTag:action.payload
			}

		case "TAG_VIDEOS_FAILURE":
			return {
				loading: false,
				videosTag: undefined,
				error: action.payload
			}

		default:
			return state
	}
}