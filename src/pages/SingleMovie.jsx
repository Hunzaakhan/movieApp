

import React, { useEffect, useState } from 'react';
import {NavLink, useParams } from 'react-router-dom';
import { useGlobalContext } from './context';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, getMovies, movie } = useGlobalContext();
  const [singleMovie, setSingleMovie] = useState({})

  useEffect(() => {
    getMovies();
  }, []);

  
  useEffect(() => {
    const singleMovie = movie.find((current) => current.id == id);
    console.log(singleMovie, "new world");
    if (singleMovie) {
      setSingleMovie(singleMovie);
    }
  }, [movie, id]);

  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  console.log("singleMovie:", singleMovie);
  return (
    <section className="movie-section">
     
      <div className="movie-card">
       
      <figure>
      
      <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt={singleMovie.title} />

        </figure>
      </div>
      <div className="card-content">
          <p className="title">{singleMovie.title}</p>
          <p className="card-text">Released: {singleMovie.release_date}</p>
          <p className="card-text">Genre: {singleMovie.genre_ids && singleMovie.genre_ids.join(', ')}</p>
          <p className="card-text">Rating: {movie.vote_average} / 10</p>
         
          <p className="card-text">Overview: {singleMovie.overview}</p>
          <NavLink to="/home" className="back-btn">
            Go Back
          </NavLink>
        </div>



    </section>




  );
};

export default SingleMovie;



