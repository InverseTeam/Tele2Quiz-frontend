import React from 'react';
import title from '../../img/title.svg';
import { Link } from 'react-router-dom';
import logout from '../../img/logout.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className='px-22 py-4 flex justify-between items-center'>
      <img src={title} className='h-10' />
      <div className='flex items-center'>
        <Link to='/tests' className='font-sans-bold mx-8'>Все тесты</Link>
        <Link to='/new-test'>
          <button className='font-sans-bold btn-new-test'>Новый тест</button>
        </Link>
        <button className='btn-logout mx-2'>
          <img src={logout} />
        </button>
      </div>
    </div>
  );
};

export default Header;
