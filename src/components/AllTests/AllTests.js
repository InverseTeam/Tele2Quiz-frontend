import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTests } from './getAllTests';
import CardTest from '../CardTest/CardTest';

const AllTests = () => {
  const dispatch = useDispatch();

  // const isLoading =
  //   useSelector((state) => state.courses.status) === Statuses.inProgress;
  // console.log(isLoading);

  // const coursesData = useSelector((state) => state.courses.courses);
  // console.log(coursesData);

  // useEffect(() => {
  //   // getAllTests(dispatch, coursesData.length);
  //   getAllTests(dispatch);
  // }, []);

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  const testData = {
    text: 'Тест Кто проживает на дне океана?',
    annotation: "Гу́бка Боб Квадра́тные Штаны́», также известный как «Спанч Боб Сквэр Пэнтс» — американский мультипликационный сериал",
    category: 'Мультфильмы',
    point: 20,
    isPublish: false
  };

  return (
    <div className='flex justify-center flex-wrap'>
      <CardTest testData={testData}/>
    </div>
  );
};

export default AllTests;
