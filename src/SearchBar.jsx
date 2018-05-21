import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        // If we want to use the current "this" inside of any method,
        // we need to "bind" current this, using the bind method
        this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    }

    // EVERY JS event gets the event obj
    handleMovieSubmit(event) {
        event.preventDefault();
        // console.log(event.target);
        const searchTerm = event.target[0].value;
        this.props.searchFunction(searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.handleMovieSubmit}>
                <input type="text" />
                <button type="submit" className="btn btn-primary">Movie Search</button>
            </form>
        )
    }
}

export default SearchBar;