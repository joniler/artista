import React, {
	Component
} from 'react';
import axios from 'axios';
import './App.scss';
import Search from './components/Search/Search';
import Results from './components/Results/Results';

class App extends Component {

	state = {
		searchInitiated: false,
		artistSearch: null,
		artistResult: null,
		artistDiscog: null,
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
		const artistSearch = this.state.artistSearch;
		const artistURL = `https://theaudiodb.com/api/v1/json/195003/search.php?s=${artistSearch}`;
		const discogURL = `https://theaudiodb.com/api/v1/json/195003/discography.php?s=${artistSearch}`;
		let artistData;
		let discogData;
		const state = this;

		if ( artistSearch === null ) {
			console.log('You gotta type something dude...');
			this.setState({
				searchInitiated: true
			})
			setTimeout(() => {
				this.setState({
					searchInitiated: false
				})
			}, 5000);
		} else {
			axios.get(artistURL).then((result) => {
				artistData =  result.data.artists;
				state.setState({
					searchInitiated: true,
					artistResult: artistData
				})
			})
	
			axios.get(discogURL).then((result) => {
				discogData =  result.data;
				state.setState({
					searchInitiated: true,
					artistDiscog: discogData
				})
			})
		}
	};

	closeHandler = (e) => {
		this.setState({
			searchInitiated: false,
			artistResult: null,
			artistDiscog: null,
		})
	}

	render() {
		return ( 
			<div className = "App" >
				<h1>ARTISTA</h1>
				<Search searchHandler={this.searchHandler} submitHandler={this.submitHandler}/>
				<Results
					closeHandler={this.closeHandler}
					searchInitiated={this.state.searchInitiated}
					artistResult={this.state.artistResult}
					artistDiscog={this.state.artistDiscog}
				/>
			</div>
		)
	}
}

export default App;
