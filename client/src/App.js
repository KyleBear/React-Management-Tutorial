import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';
//3개의 클래스 임포트//App.js는 javascript들의 기본 클래스, 스크립트 등을 정의// App.css 스타일링  
const styles = {
  root: {
  width: "100%",
  marginTop : createSpacing.unit*3,
  overflowX: "auto"
  
  },
  table: {
  minWidth: 1080
  }
  }; //style 변수만듬

const customers = [{// 변수 
  'id' : 1, // id = 주소값으로 접근= 상수로 정의 , 문자열 x 
  'image' : 'http://placeimg.com/64/64/1', // 랜덤으로 이미지 보여줌. 
  'name': '김정호',
  'birthday' : '951225',
  'gender' : '남자',
  'job' : '대학생'

},
{
  'id' : 2, // id = 주소값으로 접근= 상수로 정의 , 문자열 x 
  'image' : 'http://placeimg.com/64/64/2', // 랜덤으로 이미지 보여줌. 
  'name': '개붕이',
  'birthday' : '951226',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : 3, // id = 주소값으로 접근= 상수로 정의 , 문자열 x 
  'image' : 'http://placeimg.com/64/64/3', // 랜덤으로 이미지 보여줌. 
  'name': '흑운장',
  'birthday' : '951227',
  'gender' : '남자',
  'job' : '프로게이머'
}] // 배열로 바꿈 변수 customers 로 바꿈.

//Customer클래스를 import 햇음.그리고 그안의 customer의 변수설정
class App extends Component{
  render() { 
    const { classes } = this.props;
// 앱 랜더링할때 classes변수를 지역변수로.

    return (
      //위쪽은 테이블의 속성을 출력 //바디는 내용읠 출력(컴포넌트)
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
        </TableHead>
      <TableBody>
        {customers.map(c =>
     { //고객 컴포넌트를 만듬 
       //특정변수에 접근해서 각 원소를 어떻게 처리 return하겟다 라고 처리.
       return (
       // 각 원소를 c 로 순회하도록 만듬. c라는 한명의 customer는 어떻게 출력되나?
       <Customer 
      key={c.id} //map을 이용해 접근할때는 key라는 값을 이용해야됨.(설정해야됨)
      id={c.id}
       image={c.image}
       name={c.name}
       birthday={c.birthday}
       gender={c.gender}
       job={c.job}
       />
         );
     }
     )
    }
        </TableBody>
      </Table>
      </Paper> // 컴포넌트의 외부를 감싸기 위해 불러오는 컴포넌트.
   ); // 커스터머 클래스 불러옴. 커스터머 클래스의 name, job 등을 앱 컴포넌트로 재정의
}
}
export default withStyles(styles)(App);//withStyles 임포트됫음. 현재 스크롤바
