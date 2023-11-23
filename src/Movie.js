import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, audiCnt, rank}) {
    return <div>
        <h2>영화제목 : {title}</h2>
        <h4> 관객수 : {audiCnt}, 일간 박스오피스 랭킹 : {rank}<br></br><br></br></h4>
        </div>;
}

Movie.propTypes = {
    title: PropTypes.string.isRequired
};

export default Movie;