import Link from "next/link";
import { MdOutlineFavoriteBorder, MdManageSearch } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Botlane = ({ full }) => {
  const cartItems = useSelector((state) => state.cart); 
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed bottom-0 z-50 w-full lg:hidden">
      {full && (
        <div className="flex justify-center items-center ">
          <div className="w-[90%]">
            <button className="text-[16px] w-full font-semibold leading-[21px] py-[15px] px-[31px] bg-[#02b875] text-white inline-flex justify-center items-center">
              Добавить в корзину
            </button>
          </div>

          <div className="flex">
            <div className="text-3xl px-3">
              <MdOutlineFavoriteBorder />
            </div>
            <div className="text-3xl px-3">
              <TbBrandGoogleAnalytics />
            </div>
          </div>
        </div>
      )}

      <div className="flex  justify-around items-center bg-white pt-2">
        <div className="px-3 flex text-[#9b9b9c] flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
          <div className="text-2xl">
            <FaHome />
          </div>
          <span>Главная</span>
        </div>

        <Link href={'/catalog'} className="no-underline">
          <div className="px-3 flex text-[#9b9b9c]  flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
            <div className="text-3xl">
              <MdManageSearch />
            </div>
            <span>Каталог</span>
          </div>
        </Link>


        <div className="px-3 flex text-[#9b9b9c]  flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
          <div className="text-2xl">
            <MdOutlineFavoriteBorder />
          </div>
          <span>Избранное</span>
        </div>

        <Link
          href="/cart"
          className="text-decoration-none text-inherit hover:text-inherit"
        >
          <div className="px-3 flex  text-[#9b9b9c] flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl relative select-none">
            <div className={`${totalQuantity === 0 ? 'hidden' : 'absolute text -top-3 z-1000 right-5 bg-[#ff3b30] text-[0.7rem] font-medium h-[20px] text-white flex justify-center items-center px-[6.3px] rounded-full'}`}>
              {totalQuantity}
            </div>
            <div className="text-2xl ">
              <FiShoppingCart />
            </div>
            <span>Корзина</span>
          </div>
        </Link>

        <div className="px-3 flex  text-[#9b9b9c] flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
          <div className="text-2xl">
            <BiUser />
          </div>
          <span>Серёга</span>
        </div>

      </div>
    </div>
  );
};

export default Botlane;
