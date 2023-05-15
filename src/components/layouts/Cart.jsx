import React, { useState } from 'react';
import MyDropDown from '../UI/MyDropDown';
import Link from 'next/link';
import { CartContext } from "../contexts/CartContext";
import { useContext } from 'react';
import Image from 'next/image';
import Toplane from './Toplane';


const Cart = () => {
    const [selectedTu, setSelectedTu] = useState(null);
    const tus = ['Арнольд', 'Хельга', 'Семён'];

    const [selectedSklad, setSelectedSklad] = useState(null);
    const Sklades = ['Малиновка', 'Грушевка', 'Уручье'];

    const [selectedRest, setSelectedRest] = useState(null);
    const Rests = ['Центральный', 'Восточный', 'Звёздный'];

    const { cartItems, makeTest } = useContext(CartContext);



    return (
        <div className="w-full min-h-full flex-col justify-center">
            <div className='py-4'>
                <Toplane />
            </div>
            <div className='flex justify-center items-center bg-gray-100 min-h-full'>
                <div className="w-[1200px]">
                    <div className='my-4'>
                        <Link href="/catalog" className='text-[14px] text-decoration-none text-[#777778] hover:text-inherit'>Вернуться в каталог</Link>
                    </div>

                    <div className='flex mb-4 min-h-full '>
                        <div className='bg-white w-3/4 rounded-2xl'>
                            <div className='p-4'>
                                <div className='flex'>
                                    <h1 className='font-semibold text-[24px] leading-[28px]'>Корзина</h1>
                                    <span className='ml-2 text-[#777778]'>{cartItems.length} товара</span>
                                </div>

                                <div className='flex items-center py-3'>
                                    <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                    </div>

                                    <div className='cursor-pointer select-none'>
                                        Выбрать всё
                                    </div>

                                    <div className='ml-6 text-[14px]'>
                                        Удалить выбранное
                                    </div>
                                </div>

                                <div className="flex-col w-full h-[150px] mt-2">
                                    {cartItems.map((item) => (
                                        <div className='flex py-4 border-t-[1px]'>
                                            <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                                            <div className=''><Image src={item.imgUrl} alt='banner' width={80} height={80} /></div>
                                            <div className='ml-6'>{item.title}</div>
                                            <div className='ml-6'>{item.quantity}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex-col ml-6 bg-white justify-center w=1/4 rounded-2xl'>

                            <div className='p-4'>
                                <div>
                                    <h4>Контактная информация</h4>
                                </div>

                                <div>
                                    <input type="text" placeholder="Получатель" className="border border-gray-300 rounded-md p-2 w-full focus:outline-slate-300" />
                                </div>
                                <div className='my-4'>
                                    <input type="text" placeholder="Телефон" className="border border-gray-300 rounded-md p-2 w-full focus:outline-slate-300" />
                                </div>


                                <div className="my-4 w-full">
                                    <MyDropDown
                                        text="Выберите склад:"
                                        data={Sklades}
                                        onSelect={setSelectedSklad}
                                        selected={selectedSklad}

                                    />
                                </div>

                                <div className="my-4 w-full">
                                    <MyDropDown
                                        text="Выберите управляющего tu:"
                                        data={tus}
                                        onSelect={setSelectedTu}
                                        selected={selectedTu}
                                    />
                                </div>

                                <div className="my-4 w-full">
                                    <MyDropDown
                                        text="Адресс ресторана получателя:"
                                        data={Rests}
                                        onSelect={setSelectedRest}
                                        selected={selectedRest}
                                    />
                                </div>

                                <div className='mt-4 relative'>
                                    <textarea placeholder="Комментарии" className="border border-gray-300 rounded-md p-2 w-full min-h-[150px] focus:outline-slate-300" />
                                </div>

                                <div className='flex justify-end'>
                                    <button className='bg-red-500 text-white p-[12px] px-[31px] mt-4 rounded-xl flex justify-center items-center font-medium text-base'>
                                        <span className='ml-2 font-medium'>Оформить заказ</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Cart;
