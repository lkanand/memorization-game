import React from "react";
import "./EmojiCard.css";

const EmojiCard = props => props.emojis.map(x =>
	<div className = "emoji-container" key = {x.id} onClick = {() => props.shuffle(x.id)}>
		<img src= {x.img} />
	</div>
);

export default EmojiCard;