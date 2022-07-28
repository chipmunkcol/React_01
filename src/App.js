/* eslint-disable */

import { useEffect, useState } from 'react';
import './App.css';
import Input from './input/Input';
import Working from './Working/Working';
import Done from './Done/Done';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

let[제목, set제목] = useState(['리액트 공부하기'])
let[내용, set내용] = useState(['리액트 기초를 공부해봅시다.'])
let[d제목, setd제목] = useState(['Done리액트 공부하기'])
let[d내용, setd내용] = useState(['Done리액트 기초를 공부해봅시다.'])
let[input제목, setInput제목] = useState('');
let[input내용, setInput내용] = useState('');




  return (
    <div className="App">
      <div className='title'>
        <div style={{width: '100%'}}>My Todo List</div>
        <div style={{width: '100%', textAlignLast: 'end'}}>React</div>
      </div>

      <div className='container_input'>
       
          <Input 제목={제목} 내용={내용} set제목={set제목} set내용={set내용} input제목={input제목} input내용={input내용} setInput제목={setInput제목} setInput내용={setInput내용} ></Input>
      
      </div>

      <h2 style={{marginLeft:'20px'}}>Working..🔥</h2>

      <Row md={3} style={{display:'flex'}}>
        
          <Working 제목={제목} 내용={내용} set제목={set제목} set내용={set내용} d제목={d제목} d내용={d내용} setd제목={setd제목} setd내용={setd내용}></Working>
        
      </Row>

      <h2 style={{marginLeft:'20px'}}>Done..!🎉</h2>
    
      <Row md={3} style={{display:'flex'}}>

          <Done 제목={제목} 내용={내용} set제목={set제목} set내용={set내용} d제목={d제목} d내용={d내용} setd제목={setd제목} setd내용={setd내용}></Done>
        
      </Row>
      
      
    </div>
  );
}





export default App;
