import Image from "next/image";
import React from "react";
import Toplane from "./Toplane";
import Bread from "./Bread";
import Breadcrumb from "./Breadcrumb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Botlane from "./Botlane";
import { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { title, description, imgUrl } = product || {};

  const { addToCart, cartItems, changeQuantity, makeTest } = useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    const newQuantity = item.quantity + 1;
    changeQuantity(item, newQuantity);
  };

  const handleDecreaseQuantity = (item) => {
    const newQuantity = item.quantity - 1;
    changeQuantity(item, newQuantity);
  };

  if (!product) {
    return (
      <div>
        <h1>Информации о товаре нет!</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-full flex justify-center max-sm:pb-44">
      <div className="w-[1200px] max-lg:w-[600px] max-sm:w-[350px] ">
        <div className=" max-lg:flex max-lg:flex-col max-lg:mb-28 max-lg:justify-center max-lg:items-center">
          <div className="mt-3">
            <Toplane />
            <Bread />
          </div>

          <div>
            <Breadcrumb category={description} />
          </div>

          <h2 className="font-bold mt-4">{title}</h2>

          <div className="flex max-lg:flex-col max-lg:items-center">
            <div><Image src={imgUrl} alt="product pic" width={430} height={430} /></div>

            <div className="flex-col mt-3 mx-6">
              <div className="mb-2">
                <span className="font-medium">Описание продукта</span>
              </div>
              <div>
                <p>Текст описания описывает продукт хыхы</p>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#02b875] transition-colors duration-200 no-underline hover:text-[#07652d]"
                >
                  Перейти к полному описанию продукта
                </a>
              </div>
              <div className="mb-2 mt-6">
                <span className="font-medium">
                  Какая-то там характеристика:
                </span>
              </div>
              <div>
                <p>Текст описания описывает продукт хыхы</p>
              </div>
              <div>
                <p>Текст описания описывает продукт хыхы</p>
              </div>
              <div>
                <p>Текст описания описывает продукт хыхы</p>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#02b875] transition-colors duration-200 no-underline hover:text-[#07652d]"
                >
                  Перейти к характеристикам
                </a>
              </div>
            </div>

            <div className="flex-col lg:ml-20  max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:flex">
              <div className="flex">
                <div className="max-lg:my-4 flex items-center justify-center text-[#b5b5b8] hover:text-inherit transition-colors duration-200 cursor-pointer mr-7">
                  <div className="text-2xl pr-1">
                    <MdOutlineFavoriteBorder />
                  </div>{" "}
                  <span>В избранное</span>
                </div>
                <div className="flex items-center justify-center text-[#b5b5b8] hover:text-inherit transition-colors duration-200 cursor-pointer">
                  <div className="text-2xl pr-1">
                    <TbBrandGoogleAnalytics />
                  </div>{" "}
                  <span>В сравнение</span>
                </div>
              </div>

              <div className="shadow-md p-[20px] rounded-md flex-col items-center justify-center mt-4 max-lg:w-[300px]">
                <h5>Малиновка</h5>

                {cartItems.find(cartItem => cartItem.id === product.id) ? (
                  cartItems.map((cartItem) => {
                    if (cartItem.id === product.id) {
                      return (
                        <div className='flex h-[34px] justify-between items-center mb-0 shadow-md runded-xl z-10000'>
                          <button className='text-2xl hover:shadow-xl p-[0.3rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center' onClick={() => handleDecreaseQuantity(product)}><AiOutlineMinus /></button>
                          <div className='w-full flex justify-center'>{cartItem.quantity}</div>
                          <button className='text-2xl hover:shadow-xl p-[0.3rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center' onClick={() => handleIncreaseQuantity(product)}><AiOutlinePlus /></button>
                        </div>
                      )
                    } else {
                      return null
                    }
                  })
                ) : (
                  <button className="bg-red-500 text-white p-[12px] px-[31px] mt-4 rounded-xl flex justify-center items-center font-medium text-base" onClick={() => addToCart(product)}>
                    <span className="ml-2 font-medium">Добавить в корзину</span>
                  </button>
                )}
              </div>


            </div>
          </div>
        </div>
      </div>
      <Botlane full={true} />
    </div>
  );
};

export default Product;
