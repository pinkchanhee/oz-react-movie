import React from 'react';
import { useParams } from 'react-router-dom';
import movieDetailData from './data/movieDetailData.json';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieDetailData.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
          <p>평점: {movie.vote_average}</p>
          <p>장르: {movie.genres.join(', ')}</p>
          <p>줄거리: {movie.overview}</p>
        </>
      ) : (
        <p>영화 정보를 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default MovieDetail;