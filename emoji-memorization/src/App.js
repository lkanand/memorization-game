import React from 'react';
import EmojiCard from "./components/EmojiCard/EmojiCard";
import Wrapper from "./components/Wrapper/Wrapper";
import emojis from "./emoji.json";
import './App.css';

let emojisCopy = emojis;

class App extends React.Component {
	state = {
		selected: [],
		score: 0,
		maximumScore: 0
	}

	shuffleArray = () => {
		for(let i = 1; i < emojisCopy.length; i++) {
			let random = Math.floor(Math.random() * (i + 1));
			if(random !== i) {
				let dummy = emojisCopy[random];
				emojisCopy[random] = emojisCopy[i];
				emojisCopy[i] = dummy;
			}
		};
	}

	processClick = (index) => {
		let copySelectedArray = this.state.selected;
		let copyScore = this.state.score;
		let copyMaximumScore = this.state.maximumScore;

		if(copySelectedArray.indexOf(index) === -1) {
			copySelectedArray.push(index);
			copyScore++;
			if(copyScore > copyMaximumScore)
				copyMaximumScore = copyScore;
		}
		else {
			copySelectedArray = [];
			copyScore = 0;
		}
		this.setState({selected: copySelectedArray, score: copyScore, maximumScore: copyMaximumScore});
	}

	render() {
		this.shuffleArray();
    	return (
	      	<Wrapper score = {this.state.score} maximum = {this.state.maximumScore}>
	        	<EmojiCard emojis = {emojis} processClick = {this.processClick}/>
	      	</Wrapper>
    	);
  	}
}

export default App;
