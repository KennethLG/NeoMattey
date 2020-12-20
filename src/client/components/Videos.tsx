import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideosTag} from "../actions/index";

import ImgBody from "../assets/portada.jpg";

export const Videos = () => {

	const dispatch = useDispatch();
	const videos:any = useSelector((state) => state.videosTag); 

	const getDanceVideos = () => void dispatch(getVideosTag("dance"));

	const getGameplayVideos = () => void dispatch(getVideosTag("gameplay"));

	console.log(videos);

	return (
		<div className="body">
			<img className="imageHome" src={ImgBody}></img>
			<div className="bigTitle">All videos</div>
			<div className="socials" style={{marginTop: "32px", marginBottom: "32px"}}>
				<button className="buttonTag" onClick={getDanceVideos}><h1>Dance</h1></button>
				<button className="buttonTag" onClick={getGameplayVideos}><h1>Gameplays</h1></button>
			</div>
			<div className="videos-container">
				{
					videos && videos.data.map(item => 
						<div className="video-container" key={item._id}>
							<iframe className="video"
						  	src={`https://www.youtube.com/embed/${item.videoId}?enablejsapi=1&origin=https://localhost:5000`}/>
						</div>
					)
				}
			</div>
		</div>
	)
}