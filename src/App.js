import React, { Component } from 'react';
import List from "./List";
import './materialize.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainBool: false,
            date: "20040101",
            inputdate: "",
            movpage: "1",
        }
        console.log("1. constructor Call");
    };

    mainBoolHandlerTrue = () => {
        this.setState({ mainBool: true });
        console.log("mainBoolHandlerTrue Call")
    };

    mainBoolHandlerFalse = () => {
        this.setState({ mainBool: false });
        console.log("mainBoolHandlerFalse Call")
    };

    onChangeValue = (e) => {
        let CalendarDate = e.target.value
        console.log("onChangeValue 실행, 입력된 달력값: " + CalendarDate);

        let result1 = CalendarDate.slice(0, 4);
        let result2 = CalendarDate.slice(5, 7);
        let result3 = CalendarDate.slice(8, 10);
        CalendarDate = result1 + result2 + result3;

        this.setState({
            inputdate: CalendarDate,
        });
        console.log("onChangeValue 실행, 변경된 달력값: " + CalendarDate);
        console.log(this.state.inputdate);
    };

    setDate = () => {
        this.state.inputdate == "" ? this.setState({ date: "20040101" }) : this.setState({ date: this.state.inputdate }); //input이 비어있는 경우 default값 20120101로 date 설정
        console.log("setDate 실행");
        console.log("inputdate :" + this.state.inputdate);
        console.log("date :" + this.state.date);
    };


    Div1Invisible = () => {
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        if (div1.style.display === 'none') {
            div1.style.display = 'block';
        } else {
            div1.style.display = 'none';
        }
        if (div2.style.display === 'none') {
            div2.style.display = 'block';
        } else {
            div2.style.display = 'none';
        }
    }

    Search = () => {
        this.setDate();
        this.mainBoolHandlerTrue();
        this.Div1Invisible();
    }

    Reload = () => {
        window.location.reload();
    }

    table1 = () => {
        return (
            <table class='centered highlight'>
                <thead> <tr> <th>순위</th> <th>포스터</th ><th>영화명</th> <th>매출액(원)</th> <th>관객수</th > <th>개봉일</th> </tr> </thead>
                <tbody>
                    <tr> <td><b>1</b></td> <td><img className="2023mov1" alt="Test" src="img/mov1.png" /></td> <td><b>범죄도시3</b></td> <td><b>104,687,737,771</b></td> <td><b>10,682,813</b></td> <td><b>2023-05-31</b></td> </tr>
                    <tr> <td>2</td> <td><img className="2023mov2" alt="Test" src="img/mov2.png" /></td> <td>엘리멘탈</td> <td>71,114,121,540</td> <td>7,237,796</td> <td>2023-06-14</td> </tr>
                    <tr> <td>3</td> <td><img className="2023mov3" alt="Test" src="img/mov3.png" /></td> <td>서울의 봄</td> <td>61,338,908,193</td> <td>6,387,789</td> <td>2023-11-22</td> </tr>
                    <tr> <td>4</td> <td></td> <td>스즈메의 문단속</td> <td>57,098,035,481</td> <td>5,573,657</td> <td>2023-03-08</td> </tr>
                    <tr> <td>5</td> <td></td> <td>밀수</td> <td>49,685,009,003</td> <td>5,143,219</td> <td>2023-07-26</td> </tr>
                    <tr> <td>6</td> <td></td> <td>더 퍼스트 슬램덩크</td> <td>49,816,843,033</td> <td>4,770,487</td> <td>2023-01-04</td> </tr>
                    <tr> <td>7</td> <td></td> <td>가디언즈 오브 갤럭시: Volume 3</td> <td>44,357,156,661</td> <td>4,209,118</td> <td>2023-05-03</td> </tr>
                    <tr> <td>8</td> <td></td> <td>미션 임파서블: 데드 레코닝 PART ONE</td> <td>40,428,788,113</td> <td>4,022,072</td> <td>2023-07-12</td> </tr>
                    <tr> <td>9</td> <td></td> <td>콘크리트 유토피아</td> <td>37,412,802,232</td> <td>3,849,242</td> <td>2023-08-09</td> </tr>
                    <tr> <td>10</td> <td></td> <td>아바타: 물의 길</td> <td>47,350,863,697</td> <td>3,491,916</td> <td>2022-12-14</td> </tr>
                </tbody>
            </table>
        );
    }

    table2 = () => {
        return (
            <table class='centered highlight '>
                <thead> <tr> <th>순위</th> <th>포스터</th ><th>영화명</th> <th>매출액(원)</th> <th>관객수</th > <th>개봉일</th> </tr> </thead>
                <tbody>
                    <tr> <td>11</td> <td></td> <td>오펜하이머</td> <td>34,336,232,551</td> <td>3,230,388</td> <td>2023-08-15</td> </tr>
                    <tr> <td>12</td> <td></td> <td>슈퍼 마리오 브라더스</td> <td>23,558,580,482	</td> <td>2,395,468</td> <td>2023-04-26</td> </tr>
                    <tr> <td>13</td> <td></td> <td>30일</td> <td>21,255,443,814</td> <td>2,165,138</td> <td>2023-10-03</td> </tr>
                    <tr> <td>14</td> <td></td> <td>그대들은 어떻게 살 것인가</td> <td>19,371,554,671</td> <td>1,988,641</td> <td>2023-10-25</td> </tr>
                    <tr> <td>15</td> <td></td> <td>존 윅 4</td> <td>19,956,652,129</td> <td>1,924,768</td> <td>2023-04-12</td> </tr>
                    <tr> <td>16</td> <td></td> <td>천박사 퇴마 연구소: 설경의 비밀</td> <td>18,634,850,555</td> <td>1,916,335</td> <td>2023-09-27</td> </tr>
                    <tr> <td>17</td> <td></td> <td>영웅</td> <td>17,767,962,427</td> <td>1,787,344</td> <td>2022-12-21</td> </tr>
                    <tr> <td>18</td> <td></td> <td>분노의 질주: 라이드 오어 다이</td> <td>18,474,198,210</td> <td>1,773,424</td> <td>2023-05-17</td> </tr>
                    <tr> <td>19</td> <td></td> <td>교섭</td> <td>17,460,908,740</td> <td>1,721,100</td> <td>2023-01-18</td> </tr>
                    <tr> <td>20</td> <td></td> <td>앤트맨과 와스프: 퀀텀매니아</td> <td>16,346,738,806</td> <td>1,551,129</td> <td>2023-02-15</td> </tr>
                </tbody>
            </table>
        );
    }

    table3 = () => {
        return (
            <table class='centered highlight '>
                <thead> <tr> <th>순위</th> <th>포스터</th ><th>영화명</th> <th>매출액(원)</th> <th>관객수</th > <th>개봉일</th> </tr> </thead>
                <tbody>
                    <tr> <td>21</td> <td></td> <td>잠</td> <td>13,894,258,933</td> <td>1,470,359</td> <td>2023-09-06</td> </tr>
                    <tr> <td>22</td> <td></td> <td>달짝지근해: 7510</td> <td>13,443,692,901</td> <td>1,388,104</td> <td>2023-08-15</td> </tr>
                    <tr> <td>23</td> <td></td> <td>드림</td> <td>10,821,044,597</td> <td>1,128,375</td> <td>2023-04-26</td> </tr>
                    <tr> <td>24</td> <td></td> <td>비공식작전</td> <td>10,192,841,216</td> <td>1,058,745</td> <td>2023-08-02</td> </tr>
                    <tr> <td>25</td> <td></td> <td>1947 보스톤</td> <td>9,454,969,798</td> <td>1,025,683</td> <td>2023-09-27</td> </tr>
                    <tr> <td>26</td> <td></td> <td>스파이더맨: 어크로스 더 유니버스</td> <td>9,492,413,667</td> <td>920,169</td> <td>2023-06-21</td> </tr>
                    <tr> <td>27</td> <td></td> <td>인디아나 존스: 운명의 다이얼</td> <td>8,504,251,466</td> <td>860,470</td> <td>2023-06-28</td> </tr>
                    <tr> <td>28</td> <td></td> <td>장화신은 고양이: 끝내주는 모험</td> <td>7,872,245,363</td> <td>831,209</td> <td>2023-01-04</td> </tr>
                    <tr> <td>29</td> <td></td> <td>명탐정코난: 흑철의 어영</td> <td>7,689,127,005</td> <td>799,938</td> <td>2023-07-20</td> </tr>
                    <tr> <td>30</td> <td></td> <td>트랜스포머: 비스트의 서막</td> <td>7,786,907,316</td> <td>769,993</td> <td>2023-06-06</td> </tr>
                </tbody>
            </table>
        );
    }

    setpage1 = () => {
        this.setState({ movpage: "1" });
    }
    setpage2 = () => {
        this.setState({ movpage: "2" });
    }
    setpage3 = () => {
        this.setState({ movpage: "3" });
    }

    render() {
        console.log("3. render Call")
        const { mainBool, date, movpage } = this.state;
        return (
            <div align='center'>
                <div id='div1'>
                    <nav class="nav-extended">
                        <div class="nav-wrapper">
                            <a href="#" class="brand-logo center" onClick={this.Reload}><i class="material-icons md-48">local_movies</i>FilmMatch</a>
                        </div>
                        <div class="nav-content row">
                            <h5 class="card-panel red lighten-1 col s12"> 메인화면 </h5>
                        </div>
                    </nav> </div>

                <div class="row" align='center' id='div2'>
                    <div class="col s4"></div>
                    <div class="col s4">
                        <div class="card blue-grey darken-1" align='center'>
                            <div class="card-content white-text">
                                <span class="card-title">날짜를 선택하세요.</span>
                                <div class="input-field inline">
                                    <p> <input type="date" id="date" name="Cdate" min="2004-01-01" max="2023-12-31" onChange={this.onChangeValue} /> </p>
                                </div>
                                <p> ※ 기본값 : 2004년 01월 01일 ※ </p>
                            </div>
                            <div class="card-action">
                                <a href="#" onClick={this.Search}><span class="material-icons md-18">search 일별 박스오피스 검색</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {mainBool ? <List date={date} mainBoolHandlerFalse={this.mainBoolHandlerFalse} Div1Invisible={this.Div1Invisible} Reload={this.Reload} /> :
                    <div> <hr /> <h4> <i class="material-icons md-36">movie</i> 2023년도 박스오피스 TOP 30(11월 기준) <i class="material-icons md-36">movie</i></h4>
                        {(movpage == "1") ? this.table1() : ''}
                        {(movpage == "2") ? this.table2() : ''}
                        {(movpage == "3") ? this.table3() : ''}

                        <ul class="pagination">
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li> <button onClick={this.setpage1}> 1 </button></li>
                            <li> <button onClick={this.setpage2}> 2 </button></li>
                            <li> <button onClick={this.setpage3}> 3 </button></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>}
            </div>
        );
    }
}

export default App;