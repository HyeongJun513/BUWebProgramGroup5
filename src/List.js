import React, { Component } from 'react';
import axios from 'axios';
import Movie from "./Movie";

class List extends Component {
  constructor(props) {
    super(props);
    this.onHandler = this.onHandler.bind(this);
    this.Reload = this.Reload.bind(this);
    const { date } = this.props;
    this.state = {
      isSelect: true,
      date: date,
      movies: [],
    }
    console.log("1. constructor Call");
  }


  isSelectHandlerTrue = () => {
    this.setState({ isSelect: true });
    console.log("isSelectHandlerTrue Call");
  }

  isSelectHandlerFalse = () => {
    this.setState({ isSelect: false });
    console.log("isSelectHandlerFalse Call");
  }

  onHandler() {
    const { mainBoolHandlerFalse } = this.props;
    const { Div1Invisible } = this.props;
    mainBoolHandlerFalse();
    Div1Invisible();
    console.log("onHandler Call");
  }

  Reload = () => {
    const { Reload } = this.props;
    Reload();
    console.log("Reload Call");
  }

  getMovies = async () => {
    console.log("getMovies Call")
    const { date } = this.state;
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f6075493e17d4525078a94b31ec0ef70&targetDt=" + date;

    const { data: {
      boxOfficeResult:
      { dailyBoxOfficeList }
    }
    }
      = await axios.get(url);
    this.setState({ movies: dailyBoxOfficeList });
    this.isSelectHandlerFalse();
    console.log("state 변경")
  }

  componentDidMount() {
    this.getMovies();
    console.log("4. componentDidMount Call")
  }

  css_loading() {
    return (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div> </div> </div> </div>
    );
  }

  render() {
    console.log("3. render Call")
    const { isSelect, movies, date } = this.state;
    console.log("date값 : " + date);
    return <div>  <div id='div1'>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center" onClick={this.Reload}><i class="large material-icons md-48">local_movies</i>FilmMatch</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down"> <li><a onClick={this.onHandler}><i class="large material-icons">home메인화면</i></a></li></ul>
        </div>
        <div class="nav-content">
          <div class="row"> <h5 class="card-panel red lighten-1 white-text text-white col s12"> {date.slice(0, 4)}년 {date.slice(4, 6)}월 {date.slice(6, 8)}일자 <br /> 박스오피스 순위 TOP 10 </h5> </div>
        </div>
      </nav>
    </div>
      {isSelect ? <div> <h2>로딩중입니다.</h2> {this.css_loading()} </div> : movies.map((movie) => {
        return (
          <Movie
            key={movie.moviecd}
            moviecd={movie.movieCd}
            title={movie.movieNm}
            audiCnt={movie.audiCnt}
            audiAcc={movie.audiAcc}
            rank={movie.rank}
            openDt={movie.openDt}
            salesAmt={movie.salesAmt}
            salesAcc={movie.salesAcc}
          />
        )
      })}</div>;
  }
}

export default List;