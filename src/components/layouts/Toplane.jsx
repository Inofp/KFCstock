import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react'
import Link from 'next/link';

const Toplane = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Добавьте здесь обработчик для отправки запроса поиска на сервер
  };

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/catalog')
  }

  return (
      <div className='flex items-center justify-center'>
        <Link href="/home"><Image src="/logo.svg" alt='logo-pic' width={135} height={100} /></Link>

        <button className='bg-red-500 text-white p-[11px] pr-[22px] rounded-xl flex justify-center items-center ml-6 font-medium text-base' onClick={handleClick}>
          <GiHamburgerMenu /> <span className='ml-2 '>Каталог</span>
        </button>

        <form onSubmit={handleSearchSubmit} className='bg-[#f4f4f4] font-medium w-full max-w-[600px] rounded-xl px-2 py-2 ml-4 flex justify-start border-transparent border-solid border-2 hover:border-gray-500 transition border-color duration-200 ease-in-out'>
          <button
            type="submit"
            className=" text-[28px] text-[#9b9b9c]"
          >
            <AiOutlineSearch />
          </button>

          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-[#f4f4f4] pl-2 text-lg focus:outline-none w-full"
          />

        </form>

        <div className='flex justify-between items-center '>
          <div className='px-3 flex flex-col items-center justify-center cursor-pointer'>
            <div className='text-2xl'><BiUser /></div>
            <span>Серёга</span>
          </div>

          <div className='px-3 flex flex-col items-center justify-center cursor-pointer'>
            <div className='text-2xl'><MdOutlineFavoriteBorder /></div>
            <span>Избранное</span>
          </div>

          <div className='px-3 flex flex-col items-center justify-center cursor-pointer'>
            <div className='text-2xl'><FiShoppingCart /></div>
            <span>Корзина</span>
          </div>

        </div>

    </div>
  );
};

export default Toplane;