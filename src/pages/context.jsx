
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [movieName, setMovieName] = useState('Batman');

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();

      if (data.Error) {
        setIsLoading(false);
        setIsError({ show: true, msg: data.Error });
      } else {
        setIsLoading(false);
        setMovie(data.results);
        setIsError({ show: false, msg: '' });
      }
    } catch (error) {
      console.error('API Error:', error);
      setIsError({ show: true, msg: error.message });
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (movieName.trim() !== '') {
        getMovies();
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [movieName]);

  const contextValue = { movie, isLoading, isError, movieName, setMovieName, getMovies };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };




