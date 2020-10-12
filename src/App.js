import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//3개의 클래스 임포트
class App extends Component{
  render() {
    return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management</h2>
  </div>
);
}
}
export default App;
