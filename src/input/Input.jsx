
function Input(props){
    return(
      <>
        <div className='container_input_1'>
          <div>제목 <input value={props.input제목} onChange={(e)=>{props.setInput제목(e.target.value); e.stopPropagation()}}/></div>
          <div style={{marginLeft:'10px'}}>
                내용 <input value={props.input내용} onChange={(e)=>{props.setInput내용(e.target.value); e.stopPropagation()}}/></div>
        </div>
        <div className='container_input_2'>
          <button style={{float: 'right'}} onClick={(e)=>{
            let copy = [...props.제목];
            let copy2 = [...props.내용];
            copy.push(props.input제목);
            copy2.push(props.input내용);
            props.set제목(copy);
            props.set내용(copy2);
            props.setInput제목('');
            props.setInput내용('');
          }}>추가하기</button>
        </div>
      </>
    );
  }

  export default Input;