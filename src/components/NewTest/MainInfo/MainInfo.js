import React, { useState } from 'react';

const MainInfo = ({ setMainInfo }) => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [ageCategory, setAgeCategory] = useState();
  const [point, setPoint] = useState(25);
  const [time, setTime] = useState(45);

  const inps = document.querySelectorAll('input[name="cetegory"]');
  for (const cat of inps) {
    if (cat.checked) {
      // console.log(cat.id);
    }
  }

  const testData = {
    name,
    description,
    question_points: point,
    question_time: time,
    questions: [22],
    category: 1,
    age_category: 1,
    quiz_type: 2,
    additional_question: 23,
    is_published: true,
  };

  // setMainInfo(testData)

  // console.log(testData)

  return (
    <div className='flex justify-between mb-6'>
      <div className='flex flex-col'>
        <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
          Название
        </span>
        <input
          className='input-text mb-2'
          placeholder='Название викторины'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
          Тема
        </span>
        <input
          className='input-text mb-2'
          placeholder='Тема викторины'
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
          Краткое описание
        </span>
        <input
          className='input-text mb-2'
          placeholder='Краткое описание викторины'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className='btn-main' onClick={() => setMainInfo(testData)}>
          Сохранить
        </button>
      </div>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col w-111'>
          <span className='font-sans-regular text-base text-darkGray mb-3 mx-3'>
            {point} баллов за тест
          </span>
          <input
            type='range'
            min='0'
            max='50'
            step='5'
            id='inp_type_range'
            value={point}
            valueasnumber={point}
            onChange={(e) => setPoint(e.target.value)}
          />
          <div className='flex justify-between mb-8'>
            <span className='font-sans-regular text-sm text-darkGray'>0</span>
            <span className='font-sans-regular text-sm text-darkGray'>50</span>
          </div>

          <span className='font-sans-regular text-base text-darkGray mb-3 mx-3'>
            Время на ответ {time} секунд
          </span>
          <input
            type='range'
            min='0'
            max='60'
            step='5'
            id='inp_type_range'
            value={time}
            valueasnumber={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <div className='flex justify-between mb-8'>
            <span className='font-sans-regular text-sm text-darkGray'>0</span>
            <span className='font-sans-regular text-sm text-darkGray'>60</span>
          </div>
          <span className='font-sans-regular text-base text-darkGray mb-1 mx-3'>
            Возрастная категория
          </span>
          <ul>
            <li className='mb-2'>
              <input type='radio' id='1' name='cetegory' className='mr-3' />
              <label
                className='font-sans-regular text-xl text-black'
                htmlFor='1'
              >
                11 - 13 лет
              </label>
            </li>
            <li className='mb-3'>
              <input type='radio' id='2' name='cetegory' className='mr-3' />
              <label
                className='font-sans-regular text-xl text-black'
                htmlFor='2'
              >
                14 - 16 лет
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
