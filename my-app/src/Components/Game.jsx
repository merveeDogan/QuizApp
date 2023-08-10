import { useState } from "react";
export default function Game({
    questionList,
    questionNumber,
    setQuestionNumber,
    setTimeOver

})
const [question,setQuestion]= useState(null);
const[selectedAnswer, setSelectedAnswer]=useState(null);
const [answerStatus, setAnswerStatus]=useState("answer");
 const handleClick =(a) => {
    
 }