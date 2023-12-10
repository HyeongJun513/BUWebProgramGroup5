import React, { Component } from 'react';
import axios from 'axios';
import Movie from "./Movie";

class List extends Component {
    constructor(props) {
      super(props);
      // this.onMainBoolHandlerFalse = this.onMainBoolHandlerFalse.bind(this);
      // this.onDiv1Invisible = this.onDiv1Invisible.bind(this);
      this.onHandler = this.onHandler.bind(this); //넘겨받은 함수 바인드
      const {date} = this.props; //넘겨받은 date값 state로 지정
      this.state = {
        isSelect: true, //현재 로딩여부
        date: date, //App.js의 date값
        date2: "1234", //테스트용 date값
        inputdate : "", //임시저장 값
        movies: [], //영화리스트 저장
      }
      console.log("1. constructor Call");
    }
  
   isSelectHandlerTrue = () => {
    this.setState({isSelect: true });
    console.log("isSelectHandlerTrue Call");
  }
  
  isSelectHandlerFalse = () => {
    this.setState({isSelect: false });
    console.log("isSelectHandlerFalse Call");
  }

  onHandler () {  //전달받은 mainBoolHandlerFalse, Div1Invisible 동시실행
    const {mainBoolHandlerFalse} = this.props;
    const {Div1Invisible} = this.props;
    mainBoolHandlerFalse();
    Div1Invisible();
    console.log("onHandler 함수 실행");
  }


   getMovies = async () => { //오픈API 값 받기
    console.log("getMovies Call")
    const {date} = this.state;
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f6075493e17d4525078a94b31ec0ef70&targetDt="+date;
    
     const {data: { 
      boxOfficeResult: 
       {dailyBoxOfficeList}
      }
    }
      = await axios.get(url);
     console.log(dailyBoxOfficeList)
     this.setState({ movies: dailyBoxOfficeList});
     //this.setState({ movies: dailyBoxOfficeList, isSelect: false });
    //  this.isSelectHandlerTrue();
     this.isSelectHandlerFalse();
     console.log("state 변경")
   }
  
   componentDidMount() {
     this.getMovies();
     console.log("4. componentDidMount Call")
   }

   css_loading() { //로딩 동그라미
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

   render () {
    console.log("3. render Call")
     const {isSelect, movies, date, date2} = this.state;
     console.log("date값 : " + date);
     console.log("date2값 : " + date2);
     //div1
     return <div>  <div id='div1'>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center" onClick={this.Reload}><i class="large material-icons md-48">local_movies</i>FilmMatch(List.js)</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down"> <li><a onClick={this.onHandler}><i class="large material-icons">home메인화면</i></a></li></ul>
        </div>
        <div class="nav-content">
        <div class="row"> <h5 class="card-panel red lighten-1 white-text text-white col s12"> {date.slice(0,4)}년 {date.slice(4,6)}월 {date.slice(6,8)}일자 <br/> 박스오피스 순위 TOP 10 </h5> </div>
        </div>
      </nav>
      </div>
      { isSelect ? <div> <h2>로딩중입니다.</h2> {this.css_loading()} </div> : movies.map((movie) => {
       console.log(movie);
       return (
         <Movie
          key={movie.movieCd}
          moviecd={movie.movieCd}
          title={movie.movieNm}
          audiCnt={movie.audiCnt}
          rank={movie.rank}
          openDt={movie.openDt}
          />
       )
     })}</div>;
   }
  }

export default List;