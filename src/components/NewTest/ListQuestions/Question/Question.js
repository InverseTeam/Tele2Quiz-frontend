import React, { useEffect, useState } from 'react';
import { postQuestion } from './postQuestion';

const Question = ({ setQuestionData, index }) => {
  const [num, setNum] = useState();
  const [text, setText] = useState('');
  const [annotation, setAnnotation] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [rightAnswer, setRightAnswer] = useState(1);

  const [isSave, setIsSave] = useState(false);

  const questionData = {
    text,
    annotation,
    answer1,
    answer2,
    answer3,
    answer4,
    rightAnswer,
  };

  const handleSave = () => {
    const answers = document.querySelectorAll('input[name="answer"]');

    //Нужно подкоректировать ввод правильного ответа
    let right = 0;
    for (const ans of answers) {
      // console.log(ans);
      if (ans.checked) {
        setRightAnswer(ans.id);
        right = ans.id;
      }
    }

    // console.log(right);
    if (
      (text + annotation + answer1 + answer2 + answer3 + answer4 + rightAnswer)
        .length >= 7
    ) {
      // console.log('all');
      document.getElementById('warn-question').style.display = 'none';
      console.log(questionData)
      postQuestion(questionData);
      setQuestionData(questionData);
      setIsSave(true);
    } else {
      document.getElementById('warn-question').style.display = 'flex';
    }
  };

  if (isSave) {
    document.getElementById('btn-save').style.backgroundColor = '#A8AAAC';
    document.getElementById('name').disabled = true;
    document.getElementById('annotation').disabled = true;
    document.getElementById('11').disabled = true;
    document.getElementById('text-answer1').disabled = true;
    document.getElementById('22').disabled = true;
    document.getElementById('text-answer2').disabled = true;
    document.getElementById('33').disabled = true;
    document.getElementById('text-answer3').disabled = true;
    document.getElementById('44').disabled = true;
    document.getElementById('text-answer4').disabled = true;
  }

  return (
    <div className='flex flex-col my-4'>
      <div className='flex justify-between'>
        <span className='font-sans-bold text-2xl text-black mb-4'>
          Вопрос {index}
        </span>
      </div>
      <div className='flex justify-between '>
        <div className='flex flex-col'>
          <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
            Вопрос
          </span>
          <input
            className='input-text mb-2'
            placeholder='Текст вопроса'
            value={text}
            id='name'
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
            Пояснение ответа
          </span>
          <input
            className='input-text mb-4'
            placeholder='Пояснение правильного ответа'
            value={annotation}
            id='annotation'
            onChange={(e) => {
              setAnnotation(e.target.value);
            }}
          />
          <button
            id='btn-save'
            className='font-sans-bold btn-main'
            onClick={() => handleSave()}
          >
            Сохранить
          </button>
        </div>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col'>
            <span className='font-sans-regular text-base text-darkGray mb-1 mx-3 '>
              Варианты ответа
            </span>
            <ul>
              <li>
                <input type='radio' id='11' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 1'
                  id='text-answer1'
                  value={answer1}
                  onChange={(e) => {
                    setAnswer1(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='22' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 2'
                  value={answer2}
                  id='text-answer2'
                  onChange={(e) => {
                    setAnswer2(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='33' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 3'
                  value={answer3}
                  id='text-answer3'
                  onChange={(e) => {
                    setAnswer3(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='44' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 4'
                  value={answer4}
                  id='text-answer4'
                  onChange={(e) => {
                    setAnswer4(e.target.value);
                  }}
                />
              </li>
            </ul>
            <span id='warn-question' className='text-warnRed hidden'>
              Нужно заполнить все поля и сохранить вопрос
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
