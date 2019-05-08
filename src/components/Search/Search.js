import React from 'react';

const Search = (props) => {
    return(
        <form onSubmit={props.submitHandler} className="Search">
            <input 
                autocomplete="off"
                onChange={props.searchHandler} 
                type="text" 
                name="artistSearchField" 
                id="artistSearchField"
                placeholder="Enter an artist..."
                />
            <button type="submit"><span role="img" aria-label="search">&#128270;</span></button>
        </form>
    )
}

export default Search;