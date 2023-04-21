import React, { useState } from 'react';
import './LoginPage.scss';
import Login from '../../components/Login/Login';

const LoginPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='h-screen w-screen'>
      <Login setModal={setModalIsOpen} />
      {modalIsOpen && (
        <div className='modal-layout'>
          <div className='modal'>
            <span className='font-mont-bold text-2xl text-black mb-1'>
              Восстановление пароля
            </span>
            <span className='font-sans-regular text-xl text-darkGrey text-center mb-5'>
              Для смены пароля нужно обратиться к администратору
            </span>
            <button className='btn-main' onClick={() => setModalIsOpen(false)}>
              Хорошо
            </button>
          </div>
          <div className='background' onClick={() => setModalIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
