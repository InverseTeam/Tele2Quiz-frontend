import { instanceLogged } from '../../axios';
import {allTestsSlice} from '../../store/slices/allTests';

export const getAllTests = async (dispatch, len) => {
//   console.log(len)
//   if (len > 0) {
//     return;
//   }
  try {
    //Get courses
    // dispatch(coursesSlice.actions.startLoading());
    const getCourses = await instanceLogged.get('courses/');
    // dispatch(coursesSlice.actions.successLoading(getCourses.data));

    // console.log(getCourses.data);
  } catch (e) {
    console.log(e);
    // dispatch(coursesSlice.actions.failLoading());
    return e;
  }
};