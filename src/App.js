import React, {
	Component
} from 'react';
import axios from 'axios';
import './App.scss';
import Search from './components/Search/Search';

class App extends Component {

	state = {
		artistSearch: '',
		artistResult: ''
	};

	// updates our state with the artist to search from user input
	searchHandler = (event) => {
		const newSearchTerm = event.target.value;
		this.setState({
			artistSearch: newSearchTerm,
		});
	}

	// calls API and stores results in state
	submitHandler = e => {
		e.preventDefault();
		const artistURL = `https://theaudiodb.com/api/v1/json/195003/search.php?s=${this.state.artistSearch}`;
		let searchResult;
		const state = this;
		
		axios.get(artistURL).then((result) => {
			console.log('response.JSON:', {
				message: 'Request received',
				data: result.data.artists
			})
			searchResult =  result.data.artists;
			state.setState({
				artistResult: searchResult
			})
		})
	};

	render() {
		return ( 
			<div className = "App" >
				<h1>ARTISTA</h1>
				<Search searchHandler={this.searchHandler} submitHandler={this.submitHandler}/>
				<p>Click on the search button, or just hit enter. <span role="img" aria-label="SickNasty">😎</span></p>
			</div>
		)
	}
}

export default App;
