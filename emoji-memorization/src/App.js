import React from 'react';
import EmojiCard from "./components/EmojiCard/EmojiCard";
import Wrapper from "./components/Wrapper/Wrapper";
import emojis from "./emoji.json";
import './App.css';

class App extends React.Component {
	state = {
		emojis,
		selected: [],
		score: 0,
		maximumScore: 0
	}

	reArrange = (index) => {
		let copyEmojisArray = this.state.emojis;
		let copySelectedArray = this.state.selected;
		let copyScore = this.state.score;
		let copyMaximumScore = this.state.maximumScore;

		for(let i = 1; i < copyEmojisArray.length; i++) {
			let random = Math.floor(Math.random() * (i + 1));
			if(random !== i) {
				let dummy = copyEmojisArray[random];
				copyEmojisArray[random] = copyEmojisArray[i];
				copyEmojisArray[i] = dummy;
			}
		};

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
		this.setState({emojis: copyEmojisArray, selected: copySelectedArray, score: copyScore, maximumScore: copyMaximumScore});
	}

	render() {
    	return (
	      	<Wrapper score = {this.state.score} maximum = {this.state.maximumScore}>
	        	<EmojiCard emojis = {this.state.emojis} shuffle = {this.reArrange}/>
	      	</Wrapper>
    	);
  	}
}

export default App;
