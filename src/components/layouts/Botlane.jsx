import Link from "next/link";
import { MdOutlineFavoriteBorder, MdManageSearch } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi"
import { FaHome } from "react-icons/fa"


const Botlane = () => {
  return (
    <div className="fixed bottom-0 z-1000 w-full lg:hidden">
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

      <div className="flex pt-2 justify-around items-center bg-white">
        <div className="px-3 flex text-[#9b9b9c] flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
          <div className="text-2xl">
            <FaHome />
          </div>
          <span>Главная</span>
              </div>
              
        <div className="px-3 flex text-[#9b9b9c]  flex-col items-center justify-center cursor-pointer hover:shadow-md rounded-xl select-none">
          <div className="text-3xl">
            <MdManageSearch />
          </div>
          <span>Каталог</span>
        </div>
              

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
