import React, { useState, useEffect } from "react";
import { movieDetailGetFetch } from "./apis/movieDetailGetFetch";

const Detail = ({ movieId }) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [showExtraInfo, setShowExtraInfo] = useState(false); // 추가 정보를 표시할지 여부를 관리하는 상태

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
    setShowExtraInfo(!showExtraInfo); // 추가 정보를 표시할지 여부를 반전시킴
  };

  return loading ? (
    <div>로딩중입니다..</div>
  ) : (
    <div>
      <div>
        <h1>
          {movieNm} ({movieNmEn})
        </h1> 
        <div>
          <div>감독: {directors?.map((director, i) => (
              <span key={i}>{director.peopleNm} </span>
            ))}
            </div>
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
        <div>장르:{genres?.map((genre, i) => ( 
         <div key={i}>{genre.genreNm}</div>
          ))}
          </div>
      </div>

      {showExtraInfo && ( // 추가 정보를 표시할 때만 아래 내용을 렌더링
        <div>
          <div>
            <h3>배우들</h3>
            <ul style={{ listStyle: "none" }}>
              {actors?.map((actor, i) => (
                <li key={i}>
                  <div>
                    이름: {actor.peopleNm} 배역: {actor.cast}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>영화 유형: {typeNm}</div>
        </div>
      )}

      <button id="plusbutton" onClick={handleToggleExtraInfo}>
        {showExtraInfo ? "추가 정보 닫기" : "더보기"}
      </button>
    </div>
  );
};

export default Detail;
