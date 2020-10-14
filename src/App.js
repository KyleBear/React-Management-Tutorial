import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
//3개의 클래스 임포트
//App.js는 javascript들의 기본 클래스, 스크립트 등을 정의
// App.css 스타일링  
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
  'name': '김정호',
  'birthday' : '951226',
  'gender' : '남자',
  'job' : '프로그래머'


}] // 배열로 바꿈 변수 customers 로 바꿈.

//Customer클래스를 import 햇음.그리고 그안의 customer의 변수설정
class App extends Component{
  render() {
    return (
      <div>   {//map 을 만듬. 
     customers.map(c =>{ //특정변수에 접근해서 각 원소를 어떻게 처리 return하겟다 라고 처리.
       return (
       // 각 원소를 c 로 순회하도록 만듬. c라는 한명의 customer는 어떻게 출력되나?
       <Customer 
      key={c.id} //map을 이용해 접근할때는 key라는 값을 이용해야됨.(설정해야됨)
      id={c.id}
       image={c.image}
       name={c.name}
       birthday={c.name}
       gender={c.gender}
       job={c.job}
       />
         );
     })
   }
</div>
   ); // 커스터머 클래스 불러옴. 커스터머 클래스의 name, job 등을 앱 컴포넌트로 재정의
}
}
export default App;
