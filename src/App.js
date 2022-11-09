import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MovieList from './Components/MovieList.js';
import Movie from './Components/Movie.js';
import Filter from './Components/Filter.js';
import AddMovie from './Components/AddMovie.js';

const initMovies = [
  {
    id: 1,
    title: "The House of Gaunt",
    description: "Short Movie",
    posterUrl: "https://media-cache.cinematerial.com/p/500x/iegql2nv/the-house-of-gaunt-international-movie-poster.jpg?v=1612943017",
    rating: "9.3/10",
    trailer: "https://www.youtube.com/embed/ubRz72gCzKI"
  },
  {
    id: 2,
    title: "Supernatural",
    description: "Supernatural, Horror American Drama",
    posterUrl: "https://m.media-amazon.com/images/I/51sBiWAAPmL._AC_.jpg",
    rating: "8.4/10",
    trailer: "https://www.youtube.com/embed/t-775JyzDTk"
  },
  {
    id: 3,
    title: "Teen Wolf",
    description: "Supernatural, Horror American Drama",
    posterUrl: "https://m.media-amazon.com/images/I/81wCYrs1o3L._AC_SL1500_.jpg",
    rating: "7.6/10",
    trailer: "https://www.youtube.com/embed/1rCYDbefnmA"
  },
  {
    id: 4,
    title: "Gran Hotel",
    description: "Spanish Drama",
    posterUrl: "https://static.tvtropes.org/pmwiki/pub/images/84f33fb99c99b4756b2bce7476a3ac14.jpg",
    rating: "8.4/10",
    trailer: "https://www.youtube.com/embed/h_6KL7RY3pg"
  },
  {
    id: 5,
    title: "Merlin",
    description: "Drama",
    posterUrl: "https://m.media-amazon.com/images/I/91w3r4YEgHL._AC_SY679_.jpg",
    rating: "7.9/10",
    trailer: "https://www.youtube.com/embed/01rxgwVmxx0"
  },
  {
    id: 6,
    title: "Rick and Morty",
    description: "Sitcom",
    posterUrl: "https://m.media-amazon.com/images/I/81LBzgzf0iL._AC_SY741_.jpg",
    rating: "9.2/10",
    trailer: "https://www.youtube.com/embed/_uUcMwsR5hg"
  },
  {
    id: 7,
    title: "The Umbrella Academy",
    description: "Drama",
    posterUrl: "https://ghostwriter121.files.wordpress.com/2020/08/ua_s2_vertical_main_rgb_en-us-1.jpg",
    rating: "8/10",
    trailer: "https://www.youtube.com/embed/0DAmWHxeoKw"
  },
  {
    id: 8,
    title: "How to Get Away with Murder",
    description: "Drama",
    posterUrl: "https://i.redd.it/fkxt3x7llkkz.jpg",
    rating: "8.1/10",
    trailer: "https://www.youtube.com/embed/dkb-aBaxkVk"
  }
];

const App = () => {
  const [movies, setMovies] = useState(initMovies);

  const addMovies = (movieTitle, movieDesc, moviePoster, movieRating, movieTrailer) => {
    // setMovies(m => [...m, {
    //   title: movieTitle,
    //   description: movieDesc,
    //   posterUrl: moviePoster
    // }]);  

    let movieID = movies.length + 1;
    initMovies.push({
      id: movieID,
      title: movieTitle,
      description: movieDesc,
      posterUrl: moviePoster,
      rating: movieRating,
      trailer: movieTrailer
    });
    setMovies(initMovies);
    console.log("added: ", movies, initMovies);
  }

  const resetState = () => {
    setMovies(initMovies);
  }

  const filterRate = (rate) => {
    //filter movies based on rate value
    setMovies(initMovies.filter(movie => movie.rating && (parseInt((movie.rating.split('/'))[0]) >= rate)));
  }

  const filterSearch = (movieName) => {
    //filter movies based on title
    setMovies(initMovies.filter(movie => (movie.title.toLowerCase().includes(movieName.toLowerCase()))));
  }

  const filter = (rate, name) => {
    const filteredArr = initMovies.filter(m => ( (parseInt((m.rating.split('/'))[0]) >= rate)  ) && ( (m.title.toLowerCase().includes(name.toLowerCase()))  ));
    console.log(filteredArr);
    setMovies(filteredArr);
  }

  return (
    <div className="container">
      <Route exact path="/" >
        <Filter movies={movies} initMovies={initMovies} filter={filter} filterRate={filterRate} filterSearch={filterSearch} reset={resetState}/>
        <MovieList movies={movies} />
        <AddMovie movies={movies} addMovies={addMovies}/>
      </Route>
      {/* <Route path="/:id" render={({match}) => <Movie movie={movies.find(m => m.id === match.params.id)} />} /> */}
      <Route path="/:id" render={(props) => <Movie {...props} movies={movies} />} />
    </div>
  );
}

export default App;
