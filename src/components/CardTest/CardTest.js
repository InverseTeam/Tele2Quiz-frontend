import React from 'react';
import './CardTest.scss';

const CardTest = ({ testData }) => {
  return (
    <div className='h-64 w-[425px] shadow-xl rounded-2xl p-6 flex flex-col justify-center items-center'>
      <span className='font-sans-bold text-black text-2xl mb-1'>
        {testData.text}
      </span>
      <span className='font-sans-regular text-black text-base mb-6'>
        {testData.annotation}
      </span>
      <div className='w-full flex justify-around'>
        <span className='small-box border-pink font-sans-regular text-pink'>
          {testData.category}
        </span>
        <span className='small-box border-mainBlue font-sans-regular text-mainBlue'>
          {testData.point} баллов
        </span>
        <span className='small-box border-purple font-sans-regular text-purple'>
          {testData.isPublish ? 'Опубликовано' : 'Черновик'}
        </span>
      </div>
    </div>
  );
};

export default CardTest;
