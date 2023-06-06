import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { BiUser } from 'react-icons/bi';
import { AuthContext } from '../contexts/AuthContext'; // Импортируйте свой контекст AuthContext

const MyPopup = ({ data, title }) => {
  const [isHovered, setHovered] = useState(false);
  const { logout } = useContext(AuthContext); // Добавьте logout из вашего AuthContext

  return (
    <div
      className='px-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none relative ari'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='text-2xl'><BiUser /></div>
      <span>{title}</span>
      {isHovered && (
        <div className='absolute top-full w-48 py-2 bg-white rounded-lg shadow-xl z-50'>
          <div className='absolute top-full w-48 py-2 bg-white rounded-lg shadow-xl z-50'>
            {data.map((item, index) => {
              if (item === 'Выйти') {
                return (
                  <button
                    key={index}
                    onClick={logout}
                    className='block w-full text-left px-4  py-2 text-black no-underline hover:bg-gray-200'
                  >
                    {item}
                  </button>
                )
              }
              return (
                <Link
                  key={index}
                  href='#'
                  className='block w-full px-4  font-normal  py-2 text-left text-black no-underline hover:bg-gray-200'
                >
                  {item}
                </Link>
              )
            })}
          </div>
        </div>
      )}
      <style jsx>{`
        .ari:before {
          content: '';
          position: absolute;
          top: -15px;
          height: 15px;
          left: 0;
          right: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default MyPopup;
