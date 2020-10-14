import React from 'react'

class Customer extends React.Component {
    //일종의 클래스이자 라이브러리 리엑트 컴포넌트. APP.js인가?
    render(){ 
        return (
           
            // 렌더링 실행문 - ()매개변수 없어도 실행 단 리턴문 필요.
            //계층적으로 구성하기위해 Customer Profile과 Customer info를 사용하도록 만듬.
             
    <div>
<CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>        
 <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>      
    </div>
        //this가 가리키는것= Customer 클래스?  
        //prop가 가리키는것 - cost에서 전달받은 변수 customer의 객체값들을 반영. 

    // 주소값이 아닌 '객체값'을  계층적으로 전달하는 구조.
        )
}
}
class CustomerProfile extends React.Component{
    render() {
    return (
        <div>
            <img src={this.props.image} alt= "profile" />
            <h2>{this.props.name}({this.props.id})</h2>
        </div>
    ) // 렌더링의 리턴값 필수 // this 가 가리키는것 CustomerProfile인가 React.component 인가? 실행이 안될 시 alt값에 프로필 출력.
} // 
}
class CustomerInfo extends React.Component { //사용자정보
    render() {
        return (
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
            </div>
        )
    } 

}
export default Customer;