import { Col } from 'react-bootstrap';

function Working(props){
return(
    props.제목.map((val,i)=>{
        return(
          <Col>
            <div className='todo_list'>
              <h3 style={{marginLeft:'10px'}}>{props.제목[i]}</h3>
              <p style={{marginLeft:'10px'}}>{props.내용[i]}</p>
              <button className='btn_delete' onClick={(e)=>{
                let copy = [...props.제목];
                let copy2 = [...props.내용];
                copy.splice(i,1);
                copy2.splice(i,1);
                props.set제목(copy);
                props.set내용(copy2);
              }}>삭제하기</button>
              <button className='btn_complete' onClick={(e)=>{
                let copy = [...props.제목];
                let copy2 = [...props.내용];
                let copy3 = [...props.d제목];
                let copy4 = [...props.d내용];
                
                copy3.push(copy[i]);
                copy4.push(copy2[i]);
                copy.splice(i,1);
                copy2.splice(i,1);
                props.set제목(copy);
                props.set내용(copy2);
                props.setd제목(copy3);
                props.setd내용(copy4);
                
              }}>완료</button>
            </div>
          </Col>
        );
      })
    );
}

export default Working;