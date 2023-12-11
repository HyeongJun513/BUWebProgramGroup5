import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetail";
import "./Movie.css"; // 스타일 파일 import

function Movie({ moviecd, title, audiCnt, rank, openDt }) {
  const [showDetails, setShowDetails] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  //------------------------------------------------------------------------------------------------------
  const moviediv = () => {
    return (
      <div class="card-content white-text">
      <span class="card-title"> <h4> {rank}위 <br/> {title} </h4></span>
      <table class="centered">
        <tbody>
           <tr>
            <td><b>개봉일</b></td> <td>{openDt}</td>
          </tr>
          <tr>
            <td><b>관객수</b></td> <td>{audiCnt}</td>
          </tr>
        </tbody>
       </table>
      <div class="card-action">
       <a class="waves-effect waves-light btn" onClick={handleShowDetails}><i class="material-icons left">movie</i>영화 상세정보</a>
      </div> </div>
    );
  }

  const moviediv2 = () => { //1위 영화의 경우 금색, 2위의 경우 은색, 3위의 경우 동색 카드 출력
    switch (rank){
      case '1' :
        return (
          <div class="card yellow darken-2" align='center'>
            {moviediv()}
          </div>)
      case '2' :
        return (
          <div class="card grey" align='center'>
            {moviediv()}
          </div>)
      case '3' :
        return (
          <div class="card brown" align='center'>
            {moviediv()}
          </div>)
      default : 
      return (
        <div class="card blue-grey darken-1" align='center'>
          {moviediv()}
        </div>)
    }
  }
  //------------------------------------------------------------------------------------------------------

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
          {/* <h2>영화제목: {title} {moviecd}</h2>
          <h4>관객수: {audiCnt}, 일간 박스오피스 랭킹: {rank}</h4>
          <button onClick={handleShowDetails}>상세정보</button>*/}

          <div class="row" align='center' id='div2'> 
            <div class="col s4"></div>
              <div class="col s4">
              {moviediv2()}
            </div>
          </div>
        </>
      )}

      {showDetails && (
        <button onClick={handleGoBack}>닫기</button>
      )}
    </div>
  );
}

export default Movie;
