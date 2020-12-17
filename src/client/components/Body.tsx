import React from "react";
import ImgBody from "../assets/portada.jpg";
import Youtube from "react-youtube";

export const Body = () => {
	return(
		<div className="body">
			<img className="imageHome" src={ImgBody}></img>
			<div className="bigTitle">Lastest videos</div>
			<div style={{textAlign: "center"}}>
				<Youtube
					videoId={"ZNEqJUSRllM"}
					className={"video"}
				/>
			</div>
			
		</div>
	)
}

