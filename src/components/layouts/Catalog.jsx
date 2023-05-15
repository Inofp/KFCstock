import Toplane from './Toplane';
import Bread from './Bread';
import Link from 'next/link';
import styles from '@/styles/Catalog.module.scss'
import Image from 'next/image';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineInfoCircle, AiOutlineEye, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import userData from './data';
import { CartContext } from "../contexts/CartContext";
import { useContext } from 'react';



const Catalog = () => {
  const { addToCart, cartItems, changeQuantity, makeTest } = useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    const newQuantity = item.quantity + 1;
    changeQuantity(item, newQuantity);
  };

  const handleDecreaseQuantity = (item) => {
    const newQuantity = item.quantity - 1;
    changeQuantity(item, newQuantity);
  };

  return (
    <div className="w-full min-h-full flex justify-center overflow-auto">
      <div className="w-[1200px] max-lg:w-[650px] max-md:w-[510px] max-sm:w-[450px]">
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center'>
          <div className='mt-3'>
            <Toplane />
            <Bread />
          </div>

          <div className='max-lg:ml-12'>
            <h1>
              Каталог
            </h1>
          </div>

          <div className='flex max-lg:hidden'>
            <div className='flex pr-8'>
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500'>
                <h2 className='pr-16 '>ТОВАР</h2>
                <Image src="/depressed_cid.jpg" alt='banner' width={135} height={100} />
              </div>
            </div>

            <div className='flex pr-8'>
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500'>
                <h2 className='pr-16 '>ТОВАР</h2>
                <Image src="/depressed_cid.jpg" alt='banner' width={135} height={100} />
              </div>
            </div>

            <div className='flex'>
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500'>
                <h2 className='pr-16 '>ТОВАР</h2>
                <Image src="/depressed_cid.jpg" alt='banner' width={135} height={100} />
              </div>
            </div>

          </div>

          <div className='flex mt-6'>
            <div className='flex min-w-[212px] max-h-[306px]  pl-1 shadow-md max-lg:hidden'>
              <div className='w-full'>
                <div className='flex justify-between items-center'>
                  <span className='text-md font-semibold hover:text-[#5b5e67]'>Склад</span>
                  <MdExpandLess className='text-[30px] leading-[20px]' />
                </div>

                <div>
                  <form className='bg-[#f0eeee] font-medium w-full rounded-md px-1 mt-2 flex justify-start border-transparent border-solid border-2 hover:border-gray-500 transition border-color duration-200 ease-in-out'>
                    <input
                      type="text"
                      placeholder="Я ищу..."
                      className="bg-[#f0eeee] pl-2 text-md focus:outline-none w-full"
                    />

                    <button
                      type="submit"
                      className=" text-[20px] text-[#606061]"
                    >
                      <AiOutlineSearch />
                    </button>

                  </form>
                </div>

                <div className='mt-3'>
                  <div className='flex items-center py-1 '>
                    <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                    </div>
                    <span className='pl-3'>Малиновка</span>
                  </div>

                  <div className='flex items-center py-1'>
                  <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                    <span className='pl-3'>Восток</span>
                  </div>

                  <div className='flex items-center py-1'>
                  <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                    <span className='pl-3'>Уручье</span>
                  </div>

                  <div className='flex items-center py-1'>
                  <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                    <span className='pl-3'>Сева</span>
                  </div>

                  <div className='flex items-center py-1'>
                  <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                    <span className='pl-3'>Инста</span>
                  </div>

                  <div className='flex items-center py-1'>
                  <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'>
                                            </div>
                    <span className='pl-3'>Сити</span>
                  </div>

                </div>

                <div className='mb-2'>
                  <span className='text-[#0a84ff] text-[15px] font-normal hover:text-[#0058a6] cursor-pointer select-none'>Показать все</span>
                </div>


              </div>

            </div>

            <div>
              <div className='flex ml-8 flex-wrap'>
                {userData.items.map((item, index) => (
                  <div>
                    <div>

                      <div className={styles.catalog_item}>
                        <div key={item.title} className='flex-col w-[205px] h-[323px] hover:shadow-lg p-2 mb-4 mr-5'>
                          <Link href={`/products/${index}`} className='text-inherit no-underline hover:text-inherit hover:no-underline cursor-auto'><div className='relative flex items-center justify-center'>
                            <Image src={item.imgUrl} alt='banner' width={185} height={150} />
                            <div className={styles.eye}>
                              <AiOutlineEye />
                            </div>
                          </div>
                            <div className='cursor-pointer text-[15px] h-[35px] pt-2'><span>{item.title}</span></div>
                            <div className=' text-gray-700 pb-1 pt-4 text-[13px]'><span>{item.description}</span></div>
                          </Link>
                          <div className='mb-1'>
                            {cartItems.find(cartItem => cartItem.id === item.id) ? (
                              cartItems.map((cartItem) => {
                                if (cartItem.id === item.id) {
                                  return (
                                    <div key={cartItem.id} className='flex h-[37px] justify-between items-center mb-0 shadow-md rounded-xl z-10000 '>
                                      <div className='text-2xl hover:shadow-xl p-[0.45rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center select-none' onClick={() => handleDecreaseQuantity(cartItem)}>
                                        <div>
                                          <AiOutlineMinus />
                                        </div>
                                      </div>
                                      <div className='w-full flex justify-center'>{cartItem.quantity}</div>
                                      <div className='text-2xl hover:shadow-xl p-[0.45rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center select-none' onClick={() => handleIncreaseQuantity(cartItem)}>
                                        <div>
                                          <AiOutlinePlus />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                } else {
                                  return null
                                }
                              })
                            ) : (
                              <div className='flex h-[34px] justify-between mb-2'>
                                <button className='bg-red-400 rounded-md px-[15px] w-1/2 hover:bg-red-500 transition duration-300 ease-in-out' onClick={() => addToCart(item)}>
                                  <div className='flex flex-col items-center justify-center cursor-pointer'>
                                    <div className='text-2xl text-white'><FiShoppingCart fontSize="0.85em" /></div>
                                  </div>
                                </button>
                                <div className='px-3  flex'>
                                  <div className='text-2xl pr-4 text-[#b5b5b8] transition-colors duration-200 no-underline hover:text-inherit'><AiOutlineInfoCircle className='cursor-pointer' /></div>
                                  <div className='text-2xl text-[#b5b5b8] transition-colors duration-200 no-underline hover:text-inherit'><MdOutlineFavoriteBorder className='cursor-pointer' /></div>
                                </div>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>

                      {/* <button onClick={() => makeTest(item)}>
                        Test
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog