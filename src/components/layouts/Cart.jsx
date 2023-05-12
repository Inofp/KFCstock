import React, { useState } from 'react';
import MyDropDown from '../UI/MyDropDown';
import Link from 'next/link';

const Cart = () => {
    const [selectedTu, setSelectedTu] = useState(null);
    const tus = ['Арнольд', 'Хельга', 'Семён'];

    const [selectedSklad, setSelectedSklad] = useState(null);
    const Sklades = ['Малиновка', 'Грушевка', 'Уручье'];

    const [selectedRest, setSelectedRest] = useState(null);
    const Rests = ['Центральный', 'Восточный', 'Звёздный'];



    return (
        <div className="w-full min-h-full flex justify-center">

            <div className='flex justify-center'>
                <div className="w-[1200px]">
                    <div className='my-4'>
                        <Link href="/catalog" className='text-[14px] text-decoration-none text-[#777778] hover:text-inherit'>Вернуться в каталог</Link>
                    </div>

                    <div>
                        <h1>Корзина</h1>
                    </div>

                    <div className="bg-red-400 w-full h-[150px] mt-2"></div>

                    <div className='flex justify-center'>
                        <div className='flex-col w-1/3'>
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
    );
};

export default Cart;
