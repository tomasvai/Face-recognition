import React from "react";
import "./FaceRecognition.css";


const FaceRecognition = ({imageUrl, box}) => (
	<div className="center ma">
	<div className="absolute mt2">

		<div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
		<img id="inputImage" alt="Img" src={imageUrl} width="500px" height="auto" />	
	</div>
</div>
)


export default FaceRecognition;