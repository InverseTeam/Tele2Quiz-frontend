import React, { useState } from 'react';
import { handleLogin } from './HandleLogin';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses } from '../../constant/statuses';
// import title from '../../img/title.svg';
import { useAuth } from '../../hooks/useAuth';
import travler from '../../img/travler.svg';

import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = ({ setModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useAuth();

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const isLoading =
    useSelector((state) => state.user.status) === Statuses.inProgress;

  const usersData = useSelector((state) => state.user.user);
  // console.log(auth);
  if (auth) {
    navigate('/tests')
  }
  // console.log(isLoading);
  // console.log(usersData);

  // const mist = true;

  // const handleLogin = () => {
  //   // if (mist) {
  //   //   document.getElementById('warn').style.display = 'flex';
  //   //   document.getElementById('nickname').style.border = '1.33px solid #D97C7C';
  //   //   document.getElementById('pass').style.border = '1.33px solid #D97C7C';
  //   // }
  //   handleLogin();
  // };

  return (
    <div className='flex w-full h-full'>
      <div className='w-2/4 flex flex-col justify-center items-center'>
        <div className='data-layout'>
          <span className='font-sans-bold text-32 mb-4 text-black'>Вход</span>
          <input
            id='nickname'
            className='input-text mb-2'
            type='nickname'
            placeholder='Почта'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            id='pass'
            className='input-text'
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id='warn' className='text-warnRed hidden'>
            Неверный ник или пароль
          </span>
          {/* <button
            className='btn-main mb-4'
            onClick={() => handleLogin(dispatch, email, password)}
          > */}
          <button
            className='btn-main mb-4 mt-2'
            onClick={() => handleLogin(dispatch, nickname, password)}
          >
            Войти
          </button>
          <span
            className='font-sans-semibold text-xl mb-10 underline text-black w-full text-center cursor-pointer'
            onClick={() => setModal(true)}
          >
            Забыли пароль?
          </span>
        </div>
      </div>
      <div className='w-2/4 flex flex-col justify-center items-center'>
        {/* <img src={title} className='w-2/4 mb-8' /> */}
        <img src={travler} className='img-laptop' />
      </div>
    </div>
  );
};

export default Login;
