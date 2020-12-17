import React from "react";
import ImgBody from "../assets/portada.jpg";
import Youtube from "react-youtube";
import {connect} from "react-redux";

const Body = (props:any) => {
	return(
		<div className="body">
			<img className="imageHome" src={ImgBody}></img>
			<div className="bigTitle">Lastest videos</div>
			<div style={{textAlign: "center"}}>

			</div>
		</div>
	)
}

const mapStateToProps = state => {
  return {
  	videos: state
  }
};

export default connect(mapStateToProps, null)(Body);