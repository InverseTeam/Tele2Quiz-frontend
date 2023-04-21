import React, { useEffect, useState } from 'react';
import MainInfo from '../../components/NewTest/MainInfo/MainInfo';
import Question from '../../components/NewTest/ListQuestions/Question/Question';
import ListQuestions from '../../components/NewTest/ListQuestions/ListQuestions';

const NewTestPage = () => {
  const [questions, setQuestions] = useState([]);

  // const addQuestion = (newQuestion) => {
  //   questions.push(newQuestion);
  //   setQuestions(questions);
  //   // console.log(questions);
  //   // root.render(element);
  // };
  // const element = <Question addQuestion={addQuestion} />;

  // console.log(questions.length);

  // useEffect(() => {
  //   console.log('gjgghs');
  // }, [questions.length]);

  return (
    <div className='px-22 flex flex-col'>
      <span className='font-sans-bold text-32 mb-5 text-black'>Новый тест</span>
      <MainInfo />
      <ListQuestions />
      <span className='font-sans-regular text-base '>Вы создали тест теперь вы можете его опубликовать или оставить для редактирования</span>
      <div className='flex flex-col'>
        <button className='btn-main mb-2'>Предпросмотр теста</button>
        <button className='btn-additional mb-28'>Сохранить как черновик</button>
      </div>
    </div>
  );
};

export default NewTestPage;
