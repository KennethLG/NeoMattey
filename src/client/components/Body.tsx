import React from "react";
import ImgBody from "../assets/portada.jpg";
import {connect} from "react-redux";

const Body = (props:any) => {
	return(
		<div className="body">
			<img className="imageHome" src={ImgBody}></img>
			<div className="bigTitle">Lastest videos</div>
			<div style={{textAlign: "center"}}>
				{
					props.videos.length !== 0 && props.videos.data.map(item =>
						<div style={{textAlign: "center"}} key={item._id}>
							<iframe className={"video"} width="100%" height="100%"
						  	src={`http://www.youtube.com/embed/${item.videoId}?enablejsapi=1&origin=http://localhost:8000`}/>
						</div>
					)
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
  return {
  	videos: state.videos
  }
};

export default connect(mapStateToProps, null)(Body);