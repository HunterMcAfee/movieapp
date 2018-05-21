// Required Dependencies
import React, { Component } from 'react';

class Poster extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="col-sm-3">
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.poster} />
                <p>{this.props.movie.overview}</p>
            </div>
        )
    }
}

export default Poster;