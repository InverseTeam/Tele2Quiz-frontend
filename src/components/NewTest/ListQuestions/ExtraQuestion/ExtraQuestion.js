import React, { useEffect, useState } from 'react';

const ExtraQuestion = ({ setExtraQuestionData }) => {
  const [text, setText] = useState('');
  const [annotation, setAnnotation] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

  const [rightAnswer, setRightAnswer] = useState(1);
  const [neededTime, setNeededTime] = useState(3);
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

  const handleExtraSave = () => {
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

    console.log(right);
    if (
      (text + annotation + answer1 + answer2 + answer3 + answer4 + rightAnswer + neededTime)
        .length >= 8
    ) {
      // console.log('all');
      document.getElementById('extra-warn-question').style.display = 'none';

      setExtraQuestionData(questionData);
      setIsSave(true);
    } else {
      document.getElementById('extra-warn-question').style.display = 'flex';
    }
  };

  if (isSave) {
    document.getElementById('extra-btn-save').style.backgroundColor = '#A8AAAC';
    document.getElementById('extra-name').disabled = true;
    document.getElementById('extra-inp_type_range').disabled = true;
    document.getElementById('extra-annotation').disabled = true;
    document.getElementById('111').disabled = true;
    document.getElementById('extra-text-answer1').disabled = true;
    document.getElementById('222').disabled = true;
    document.getElementById('extra-text-answer2').disabled = true;
    document.getElementById('333').disabled = true;
    document.getElementById('extra-text-answer3').disabled = true;
    document.getElementById('444').disabled = true;
    document.getElementById('extra-text-answer4').disabled = true;
  }

  return (
    <div className='flex flex-col my-16 '>
      <div className='flex justify-between'>
        <span className='font-sans-bold text-2xl text-black mb-4'>
          Доподнительный вопрос
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
            id='extra-name'
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
            id='extra-annotation'
            onChange={(e) => {
              setAnnotation(e.target.value);
            }}
          />
          <span className='font-sans-regular text-base text-darkGray mb-3 mx-3'>
            Время необходимое для получения дополнительного вопроса, {neededTime} минуты
          </span>
          <input
            type='range'
            min='0'
            max='6'
            step='1'
            id='extra-inp_type_range'
            value={neededTime}
            valueasnumber={neededTime}
            onChange={(e) => setNeededTime(e.target.value)}
          />
          <div className='flex justify-between mb-4'>
            <span className='font-sans-regular text-sm text-darkGray'>0</span>
            <span className='font-sans-regular text-sm text-darkGray'>6</span>
          </div>
          <button
            id='extra-btn-save'
            className='font-sans-bold btn-main'
            onClick={() => handleExtraSave()}
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
                <input type='radio' id='111' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 1'
                  id='extra-text-answer1'
                  value={answer1}
                  onChange={(e) => {
                    setAnswer1(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='222' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 2'
                  value={answer2}
                  id='extra-text-answer2'
                  onChange={(e) => {
                    setAnswer2(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='333' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 3'
                  value={answer3}
                  id='extra-text-answer3'
                  onChange={(e) => {
                    setAnswer3(e.target.value);
                  }}
                />
              </li>
              <li>
                <input type='radio' id='444' name='answer' className='mr-3' />
                <input
                  className='input-text mb-2'
                  placeholder='Ответ 4'
                  value={answer4}
                  id='extra-text-answer4'
                  onChange={(e) => {
                    setAnswer4(e.target.value);
                  }}
                />
              </li>
            </ul>
            <span id='extra-warn-question' className='text-warnRed hidden'>
              Нужно заполнить все поля и сохранить вопрос
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraQuestion;
