import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext, useState } from 'react'
import Link from 'next/link';
import { CartContext } from "../contexts/CartContext";
import Cookies from 'js-cookie';

const Toplane = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartItems } = useContext(CartContext);


  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

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
    <div className='flex items-center justify-center max-lg:flex-col'>
      <Link href="/home" className='max-lg:my-5'><Image src="/logo.svg" alt='logo-pic' width={135} height={100} /></Link>

      <button className='max-lg:hidden bg-red-500 text-white p-[11px] pr-[22px] rounded-xl flex justify-center items-center ml-6 font-medium text-base' onClick={handleClick}>
        <GiHamburgerMenu /> <span className='ml-2 '>Каталог</span>
      </button>

      <form onSubmit={handleSearchSubmit} className=' bg-[#f4f4f4] font-medium w-full max-w-[600px] rounded-xl px-2 py-1 ml-4 flex justify-start border-transparent border-solid border-2 hover:border-gray-500 transition border-color duration-200 ease-in-out'>
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
          className="bg-[#f4f4f4] pl-2 text-md font-normal focus:outline-none w-full"
        />

      </form>

      <div className='flex justify-between items-center ml-1 max-lg:hidden'>
        <div className='px-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none'>
          <div className='text-2xl'><BiUser /></div>
          <span>Серёга</span>
        </div>

        <div className='px-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none'>
          <div className='text-2xl'><MdOutlineFavoriteBorder /></div>
          <span>Избранное</span>
        </div>

        <Link href='/cart' className='text-decoration-none text-inherit hover:text-inherit'>
          <div className='px-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl relative select-none'>
            <div className='text-2xl' >
            <div className={`${totalQuantity === 0 ? 'hidden' : 'absolute text -top-3 z-1000 right-5 bg-[#ff3b30] text-[0.7rem] font-medium h-[20px] text-white flex justify-center items-center px-[6.3px] rounded-full'}`}>

              {totalQuantity}
              </div>
              <FiShoppingCart />
            </div>
            <span >Корзина</span>
            
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Toplane;