import { useMemo, useState } from 'react';
import './index.css';

function App() {
  const [questionNumber, setQuestionNumber]=useState(setQuestionNumber);
  const moneyTree= useMemo(
    ()=>
    [
      {questionNo:1, amount: " $ 500"},
      {questionNo:2, amount: " $ 1.000"},
      {questionNo:3, amount: " $ 2.000"},
      {questionNo:4, amount: " $ 3.000"},
      {questionNo:5, amount: " $ 5.000"},
      {questionNo:6, amount: " $ 7.500"},
      {questionNo:7, amount: " $ 15.000"},
      {questionNo:8, amount: " $ 30.000"},
      {questionNo:9, amount: " $ 60.000"},
      {questionNo:10, amount: " $ 125.000"},
      {questionNo:11, amount: " $ 250.000"},
      {questionNo:12, amount: " $ 1.000.000"}

    ].reverse()
  )

  return (
    <div className="App">
    <div className='MainStage'>Stage </div>
    <div className='Questions'>
    <ul >
    {moneyTree.map((m)=>(
  <li className='Question'>
<span className='QuestionNum'>{m.questionNo}</span>
<span className='QuestionMoney'>{m.amount}</span>
  </li>

    ))}
    </ul>


    </div>

    </div>
  );
}

export default App;
