import { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../musics/play.mp3";
import correct from "../musics/correct.mp3";
import wrong from "../musics/wrong.mp3";
export default function Game({
  questionList,
  questionNumber,
  setQuestionNumber,
  setTimeOver,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  useEffect(() => {
    setQuestion(questionList[questionNumber - 1]);
  }, [questionList, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        delay(4000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        setClassName("answerrwrong");
        const correctAnswerIndex = question.answers.findIndex(
          (ans) => ans.correct
        );

        delay(2000, () => {
          setClassName("answerrcorrect");
          setSelectedAnswer(question.answers[correctAnswerIndex]);
        });

        delay(3000, () => {
          setClassName("answer");
          setTimeOver(true);
        });
      }
    });
  };
  return (
    <div className="Game">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
