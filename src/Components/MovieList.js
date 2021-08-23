import React from 'react';
import MovieCard from './MovieCard.js';
import {Link} from 'react-router-dom';

const MovieList = (props) => {
    return(
        <div className="container">
            <div className="row">
                {props.movies.map((m) => <Link key={m.id} to={`/${m.id}`} className="card bg-light" style={{width: "18rem", margin: 10, border: "1px solid #000", textDecoration: 'none', color: '#000'}}><MovieCard movie={m} /></Link>)}
            </div>
        </div>
    );
};

export default MovieList;