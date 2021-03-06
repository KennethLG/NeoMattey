import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchState} from "../actions/index";

export const Body = () => {
	const dispatch = useDispatch();
	const videos = useSelector((state) => state.videos);

	useEffect(() => {
		if (!videos) dispatch(fetchState());
	}, [videos]);

	return(
		<div className="body">
			
			<div className="bigTitle">Latest videos</div>
			<div className="videos-container">
				{
					videos && videos.data.map(item => 
						<div className="video-container" key={item._id}>
							<iframe className="video"
						  	src={`https://www.youtube.com/embed/${item.videoId}?enablejsapi=1&origin=https://neomattey.herokuapp.com`}/>
						</div>
					)
				}
			</div>
		</div>
	)
}