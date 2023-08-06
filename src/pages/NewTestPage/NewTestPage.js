import React, { useEffect, useState } from 'react';
import MainInfo from '../../components/NewTest/MainInfo/MainInfo';
import Question from '../../components/NewTest/ListQuestions/Question/Question';
import ListQuestions from '../../components/NewTest/ListQuestions/ListQuestions';
import { instanceLogged } from '../../axios';

const NewTestPage = () => {
  // const [testData, setTestData] = useState([]);
  // const [questions, setQuestions] = useState([]);
  const [mainInfo, setMainInfo] = useState({});

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

  const addTest = async () => {
    console.log(mainInfo);

    const postMainInfo = await instanceLogged.post('quizzes/', mainInfo);
    console.log(postMainInfo.data)
  };

  return (
    <div className='px-22 flex flex-col'>
      <span className='font-sans-bold text-32 mb-5 text-black'>Новый тест</span>
      <MainInfo setMainInfo={setMainInfo} />
      <ListQuestions />
      {/* <span className='font-sans-regular text-base w-80'>Вы создали тест теперь вы можете его опубликовать или оставить для редактирования</span> */}
      <div className='flex flex-col'>
        <button className='btn-main mb-2'>Предпросмотр теста</button>
        <button className='btn-additional mb-28' onClick={() => addTest()}>
          Сохранить как черновик
        </button>
      </div>
    </div>
  );
};

export default NewTestPage;
