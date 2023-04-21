import React from 'react';
import AllTests from '../../components/AllTests/AllTests';

const AllTestPage = () => {
  return (
    <div className='px-22 flex flex-col'>
      <span className='font-sans-bold text-32 text-black'>Все тесты</span>
      <AllTests/>
    </div>
  );
};

export default AllTestPage;
