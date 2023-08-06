import { instanceLogged } from '../../../../axios';
// import {allTestsSlice} from '../../store/slices/allTests';

export const postQuestion = async (questionData) => {
  //   console.log(len)
  //   if (len > 0) {
  //     return;
  //   }
  try {
    //Get courses
    // dispatch(coursesSlice.actions.startLoading());
    // console.log('check',questionData)

    const postAnswer1 = await instanceLogged.post(
      'quizzes/questions/answers/',
      { answer: questionData.answer1 }
    );
    const postAnswer2 = await instanceLogged.post(
      'quizzes/questions/answers/',
      { answer: questionData.answer2 }
    );
    const postAnswer3 = await instanceLogged.post(
      'quizzes/questions/answers/',
      { answer: questionData.answer3 }
    );
    const postAnswer4 = await instanceLogged.post(
      'quizzes/questions/answers/',
      { answer: questionData.answer4 }
    );
    const answersId = [
      postAnswer1.data.id,
      postAnswer2.data.id,
      postAnswer3.data.id,
      postAnswer4.data.id,
    ];
    console.log(answersId);

    const postQuestion = await instanceLogged.post(
        'api/quizzes/questions/',
        { answer: questionData.answer3 }
      );
    // dispatch(coursesSlice.actions.successLoading(getCourses.data));

    // console.log(getCourses.data);
  } catch (e) {
    console.log(e);
    // dispatch(coursesSlice.actions.failLoading());
    return e;
  }
};
