import React from 'react';
import "./Wrapper.css";

const Wrapper = props => 
	<div className = "game">
		<div className = "score-wrapper">
			<p><span id = "score">Score: {props.score}</span><span id = "max-score">Maximum Score: {props.maximum}</span></p>
		</div>
		<div className = "header">
			<h1>Emoji Memorizer</h1>
			<h2>Click on all 12 emojis without repeating yourself!</h2> 
		</div>
		<div className="wrapper">{props.children}</div>
	</div>

export default Wrapper;