import React, { useState, useEffect } from "react";
import { movieDetailGetFetch } from "./apis/movieDetailGetFetch";

const Detail = ({ movieId }) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const {
          data: {
            movieInfoResult: { movieInfo },
          },
        } = await movieDetailGetFetch(movieId);

        setInfo({ ...movieInfo });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  const {
    actors,
    audits,
    directors,
    genres,
    movieNm,
    movieNmEn,
    prdtStatNm,
    openDt,
    typeNm,
  } = info;

  const handleToggleExtraInfo = () => {
    setShowExtraInfo(!showExtraInfo);
  };

  return loading ? (
    <div>로딩중입니다..</div>
  ) : (
    <div>
      <div>
        <h3 style={{ fontWeight: 'bold' }}>
          {movieNm} ({movieNmEn})
        </h3>
        <div>
          <div class='font'>감독: {directors?.map((director, i) => (
            <span key={i}>{director.peopleNm}<br /></span>
          ))}</div>
        </div>
        <div>
          {audits?.map((rule) => rule.watchGradeNm)}
        </div>
        <div>
          {openDt && (
            <>
              {openDt.substring(0, 4)}년 {openDt.substring(4, 6)}월 {openDt.substring(6, 8)}일 {prdtStatNm}
            </>
          )}
        </div>

      </div>

      <div>
        <div class='font'>장르</div>
        <div>
          {genres?.map((genre, i) => (
            <div key={i}>{genre.genreNm}</div>
          ))}
        </div>
      </div>

      <div class='font'>영화 유형</div>
      <div>{typeNm}</div>

      {showExtraInfo && (
        <div>
          <div className="actors-container">
            <div className="actors-title">배우들</div>
            <ul style={{ listStyle: "none" }}>
              {actors?.map((actor, i) => (
                <li className="actor-item" key={i}>
                  <div className="actor-info">
                    이름: {actor.peopleNm} 배역: {actor.cast}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>


      )}

      <button onClick={handleToggleExtraInfo}>
        {showExtraInfo ? "추가 정보 닫기" : "더보기"}
      </button>
    </div>
  );
};

export default Detail;
