import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <div className="movie-p">
        <div className="container  grid grid-4-col">
          {movie?.map((curMoivie) => {
            const { id, title, poster_path } = curMoivie;
            const movie_n = title.substring(0, 15);
            return (
              <NavLink key={id} to={`/movie/${id}`}>
                <div className="card">
                  <div className="card-i">
                    <p style={{ wordBreak: "break-all" ,margin:0,fontSize:"12px"}}>
                      {movie_n.length >= 15 ? `${movie_n}...` : movie_n}
                    </p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={title}
                      width={"60px"}
                    />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
