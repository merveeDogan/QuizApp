import { useMemo, useState } from 'react';
import './index.css';
import Timer from './Components/Timer';
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOver, setTimeOver] = useState(false);
  const moneyTree = useMemo(
    () =>
      [
        { questionNo: 1, amount: " $ 500" },
        { questionNo: 2, amount: " $ 1.000" },
        { questionNo: 3, amount: " $ 2.000" },
        { questionNo: 4, amount: " $ 3.000" },
        { questionNo: 5, amount: " $ 5.000" },
        { questionNo: 6, amount: " $ 7.500" },
        { questionNo: 7, amount: " $ 15.000" },
        { questionNo: 8, amount: " $ 30.000" },
        { questionNo: 9, amount: " $ 60.000" },
        { questionNo: 10, amount: " $ 125.000" },
        { questionNo: 11, amount: " $ 250.000" },
        { questionNo: 12, amount: " $ 1.000.000" }

      ].reverse()
  )
  const data = [
    {
      questionNumber: 1,
      question: "Bilgisayar biliminde 'HTML' kısaltması neyi temsil eder?",
      answers: [
        {
          text: "Hiper Text Markup Language",
          correct: true,
        },
        {
          text: "High Tech Main Language",
          correct: false,
        },
        {
          text: "Hyperlink and Text Management Language",
          correct: false,
        },
        {
          text: "Home Tool Making Language",
          correct: false,
        },
      ],
    },
    {
      questionNumber: 2,
      question: "Bir bilgisayarın temel işlem birimi nedir?",
      answers: [
        {
          text: "Monitör",
          correct: false,
        },
        {
          text: "Klavye",
          correct: false,
        },
        {
          text: "CPU",
          correct: true,
        },
        {
          text: "Fare",
          correct: false,
        },
      ],
    },
    {
      questionNumber: 3,
      question: "Bir dizi elemanını ekrana yazdırmak için genellikle hangi döngü yapısı kullanılır?",
      answers: [
        {
          text: "If-Else",
          correct: false,
        },
        {
          text: "For",
          correct: true,
        },
        {
          text: "While",
          correct: false,
        },
        {
          text: "Switch",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Bir fonksiyonun içinde tanımlanan değişkene ne ad verilir?",
      answers: [
        {
          text: "Global değişken",
          correct: false,
        },
        {
          text: "Dahili değişken",
          correct: false,
        },
        {
          text: "Yerel değişken",
          correct: true,
        },
        {
          text: "Statik değişken",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Bir SQL veritabanı sorgusunda 'SELECT' ifadesinin amacı nedir?",
      answers: [
        {
          text: "Veritabanı oluşturmak",
          correct: false,
        },
        {
          text: "Veritabanını güncellemek",
          correct: false,
        },
        {
          text: "Veritabanından veri seçmek",
          correct: true,
        },
        {
          text: "Veritabanını silmek",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Bir bilgisayarın belleğinde geçici olarak veri saklamak için hangi kavram kullanılır?",
      answers: [
        {
          text: "Cache",
          correct: true,
        },
        {
          text: "Database",
          correct: false,
        },
        {
          text: "Server",
          correct: false,
        },
        {
          text: "API",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Bir yazılım geliştirme sürecinde 'Agile' metodolojisi ne anlama gelir?",
      answers: [
        {
          text: "Yazılımın hızlıca geliştirilmesi",
          correct: false,
        },
        {
          text: "Yazılımın robotlar tarafından geliştirilmesi",
          correct: false,
        },
        {
          text: "Esnek ve işbirlikçi bir yaklaşım ile yazılım geliştirme",
          correct: true,
        },
        {
          text: "Yazılımın tamamen otomatik olarak geliştirilmesi",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Bir döngünün tamamlanma sayısıyla ilgilenmeden, belirli bir koşulu sağladığında çalışmasını sağlamak için hangi döngü yapısı kullanılır?",
      answers: [
        {
          text: "for döngüsü",
          correct: false,
        },
        {
          text: "while döngüsü",
          correct: true,
        },
        {
          text: "do-while döngüsü",
          correct: false,
        },
        {
          text: "foreach döngüsü",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Bir veritabanı sorgusunda birden fazla tabloyu birleştirmek için hangi anahtar kelime kullanılır?",
      answers: [
        {
          text: "CONNECT",
          correct: false,
        },
        {
          text: "JOIN",
          correct: true,
        },
        {
          text: "MERGE",
          correct: false,
        },
        {
          text: "COMBINE",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Bir programlama dilinde 'thread' terimi ne anlama gelir?",
      answers: [
        {
          text: "Bir döngü türü",
          correct: false,
        },
        {
          text: "Bir veri yapısı",
          correct: false,
        },
        {
          text: "Bir iş parçacığı",
          correct: true,
        },
        {
          text: "Bir dizi",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Bir programlama dilinde 'pointer' terimi ne anlama gelir?",
      answers: [
        {
          text: "Bir değişkenin türü",
          correct: false,
        },
        {
          text: "Bir döngü türü",
          correct: false,
        },
        {
          text: "Bir bellek adresi",
          correct: true,
        },
        {
          text: "Bir metot çağrısı",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Bir Unix tabanlı işletim sisteminde, bir dosya veya dizinin sahibi, sahibin grubu ve diğer kullanıcılar arasında erişim izinlerini ayarlamak için kullanılan komut nedir?",
      answers: [
        {
          text: "mv",
          correct: false,
        },
        {
          text: "cp",
          correct: false,
        },
        {
          text: "chown",
          correct: true,
        },
        {
          text: "chmod",
          correct: false,
        },
      ],
    }








  ]
  return (
    <div className="App">
      <div className='MainStage'>Stage </div>
      <div className='Timer'>
        <Timer setTimeOver={setTimeOver}
          questionNumber={questionNumber} />
      </div>
      <div className='Questions'>
        <ul className='Tree' >
          {moneyTree.map((m) => (
            <li className={
              questionNumber === m.questionNo
                ? "TreeListItem active"
                : "TreeListItem"
            }>
              <span className='QuestionNumItem'>{m.questionNo}</span>
              <span className='QuestionMoneyItem'>{m.amount}</span>
            </li>

          ))}
        </ul>
      </div>
      <div></div>

    </div>
  );
}

export default App;
