import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    //일종의 클래스이자 라이브러리 리엑트 컴포넌트. APP.js인가?
            // 렌더링 실행문 - ()매개변수 없어도 실행 단 리턴문 필요.
            //계층적으로 구성하기위해 Customer Profile과 Customer info를 사용하도록 만듬.
             
    render(){ 
        return (
           <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt="profile"/></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
               </TableRow>

        //this가 가리키는것= Customer 클래스?  
        //prop가 가리키는것 - cost에서 전달받은 변수 customer의 객체값들을 반영. 

    // 주소값이 아닌 '객체값'(실존하는 값)을  계층적으로 전달하는 구조.
        )
}
}
export default Customer;