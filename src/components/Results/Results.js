import React from 'react';
import Artist from '../Artist/Artist';

const Results = (props) => {
    let searchInitiated = props.searchInitiated;
    let artistResult = props.artistResult;
    let artistDiscog = props.artistDiscog;
    let closeHandler = props.closeHandler;

    if (searchInitiated && artistResult === null) {
        return(
            <p>Sorry, artist not found. <span role="img" aria-label="OhShit">😵</span> Try searching another.</p>
        );
    }
    if ( searchInitiated === true && artistResult != null) {
        return(
            <Artist
                closeHandler={closeHandler}
                artistResult={artistResult}
				artistDiscog={artistDiscog}
            />
        );
    }
    if ( searchInitiated === false ) {
        return(
            <p>Click <span role="img" aria-label="search">&#128270;</span>, or hit enter. <span role="img" aria-label="CoolBro">😎</span></p>
        );
    }
    else {
        console.log('Error in Results Component.')
        return null;
    }
}

export default Results;