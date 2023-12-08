import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetail";
import "./Movie.css"; // 스타일 파일 import

function Movie({ moviecd, title, audiCnt, rank }) {
  const [showDetails, setShowDetails] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  const handleShowDetails = () => {
    setPreviousPage(window.location.pathname); // 현재 페이지 경로를 저장
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
    setPreviousPage(null);
  };

  useEffect(() => {
    const handlePopState = () => {
      if (showDetails && previousPage) {
        setShowDetails(false);
        setPreviousPage(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showDetails, previousPage]);

  return (
    <div className={`movie-container ${showDetails ? 'details-open' : ''}`}>
      {showDetails ? (
        <MovieDetails movieId={moviecd} />
      ) : (
        <>
          <h2>영화제목: {title} {moviecd}</h2>
          <h4>관객수: {audiCnt}, 일간 박스오피스 랭킹: {rank}</h4>
          <button className='button' onClick={handleShowDetails}>상세정보</button><br/>
        </>
      )}

      {showDetails && (
        <button className='button' onClick={handleGoBack}>뒤로가기</button>
      )}
    </div>
  );
}

export default Movie;
