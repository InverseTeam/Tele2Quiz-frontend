import React, { useState } from 'react';
import Question from './Question/Question';
import { render } from 'react-dom';
import plus from '../../../img/plus.svg';
import ExtraQuestion from './ExtraQuestion/ExtraQuestion';
import { useDispatch } from 'react-redux';
import { postQuestion } from './Question/postQuestion';

const ListQuestions = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const [questionsId, setquestionsId] = useState([]);

  const [questionData, setQuestionData] = useState({});
  const [extraQuestionData, setExtraQuestionData] = useState({});

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    // console.log(questions);
    // postQuestion(dispatch, );
  };

  const renderQuestions = () => {
    return (
      <div className='flex flex-col'>
        <Question setQuestionData={setQuestionData} index={1} />
        {questions.map((ques, index) => (
          <Question
            key={index}
            setQuestionData={setQuestionData}
            index={index + 2}
          />
        ))}
      </div>
    );
  };

  // console.log(questionData);
  // console.log(questions);

  return (
    <div className='flex flex-col'>
      {/* <button
        onClick={() => {
          setQuestions([...questions, 5]);
          //   console.log(que);
        }}
      >
        Add
      </button> */}
      {renderQuestions()}
      <div className='flex justify-end'>
        <button
          className='w-10 h-10 rounded-full shadow-xl flex justify-center items-center'
          onClick={() => {
            addQuestion(questionData);
            // console.log('questions');
          }}
        >
          <img src={plus} />
        </button>
      </div>
      <ExtraQuestion setExtraQuestionData={setExtraQuestionData} />
    </div>
  );
};

export default ListQuestions;
