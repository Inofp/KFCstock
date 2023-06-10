import Toplane from './Toplane';
import Bread from './Bread';
import Link from 'next/link';
import styles from '@/styles/Catalog.module.scss';
import Image from 'next/image';
import { AiOutlineInfoCircle, AiOutlineEye, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import userData from './data';
import MyFilter from '../UI/MyFilter';
import Botlane from "./Botlane";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../redux/favoritesSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites.favorites);

  const sklads = [
    { id: 1, name: "Малиновка" },
    { id: 2, name: "Восток" },
    { id: 3, name: "Уручье" },
    { id: 4, name: "Сева" },
    { id: 5, name: "Инста" },
    { id: 6, name: "Сити" }
  ];

  const catalogLinks = [
    { id: 1, name: 'Каплесборники' },
    { id: 2, name: 'Крышки' },
    { id: 3, name: 'Шейкеры' },
    { id: 4, name: 'Вентиляторы' },
    { id: 5, name: 'Ручки' },
    { id: 6, name: 'Трубки' },
    { id: 7, name: 'Платы' },
    { id: 8, name: 'Жаровни' },
    { id: 9, name: 'Панели' },
    { id: 10, name: 'Клапаны' },
    { id: 11, name: 'Термостаты' },
    { id: 12, name: 'Розетки' },
  ];

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  

  const makeTest = () => {
    console.log(cartItems);
  }

  return (
    <div className="w-full min-h-full flex justify-center overflow-auto max-lg:pb-24 max-sm:pb-44">
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
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500 '>
                <h3 className='pr-16 '>Техника</h3>
                <Image src="/star1.jpg" className='rounded-xl' alt='banner' width={135} height={100} />
              </div>
            </div>

            <div className='flex pr-8'>
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500'>
                <h3 className='pr-16 '>Наборы</h3>
                <Image src="/star2.jpg" alt='banner' width={135} height={100} />
              </div>
            </div>

            <div className='flex'>
              <div className='flex bg-gray-100 p-4 rounded-xl border-b-2 border-red-500'>
                <h3 className='pr-16 '>Сырьё</h3>
                <Image src="/depressed_cid.jpg" alt='banner' width={135} height={100} />
              </div>
            </div>

          </div>

          <div className='flex mt-6'>

            <div className='flex-col'>

              <MyFilter catalogLinks={catalogLinks} title='Категория' opened={true} />
              <MyFilter catalogLinks={sklads} title='Склад' opened={false} />

            </div>


            <div>
              <div className='flex max-lg:justify-center  lg:ml-8 flex-wrap'>
                {userData.items.map((item, index) => (
                  <div key={item.id}>
                    <div>

                      <div className={styles.catalog_item}>
                        <div key={item.title} className='flex-col w-[205px] h-[323px] hover:shadow-lg p-2 mb-4 lg:mr-5'>
                          <Link href={`/products/${index}`} className='w-[200px] h-[200px] text-inherit no-underline hover:text-inherit hover:no-underline cursor-auto'><div className='relative flex items-center justify-center'>
                            <Image src={item.imgUrl} alt={item.title} width={185} height={150} />
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
                                      {cartItem.quantity > 0 && (
                                        <div className='text-2xl hover:shadow-xl p-[0.45rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center select-none' onClick={() => handleDecreaseQuantity(cartItem)}>
                                          <div>
                                            <AiOutlineMinus />
                                          </div>
                                        </div>
                                      )}
                                      <div className='w-full flex justify-center'>{cartItem.quantity}</div>
                                      <div className='text-2xl hover:shadow-xl p-[0.45rem] rounded-md cursor-pointer hover:bg-[#f4f4f4] flex justify-center select-none' onClick={() => handleIncreaseQuantity(cartItem)}>
                                        <div>
                                          <AiOutlinePlus />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              })
                            ) : (
                              <div className='flex h-[34px] justify-between mb-2'>
                                <button className='bg-red-400 rounded-md px-[15px] w-1/2 hover:bg-red-500 transition duration-300 ease-in-out'
                                  onClick={() => dispatch(addToCart(item))}
                                >
                                  <div className='flex flex-col items-center justify-center cursor-pointer'>
                                    <div className='text-2xl text-white'><FiShoppingCart fontSize="0.85em" /></div>
                                  </div>
                                </button>
                                <div className='px-3  flex'>
                                  <div className='text-2xl pr-4 text-[#b5b5b8] transition-colors duration-200 no-underline hover:text-inherit'><AiOutlineInfoCircle className='cursor-pointer' /></div>
                                  <div onClick={() => {
                                    if (favorites?.includes(item.id)) {
                                      dispatch(removeFromFavorites(item.id));
                                    } else {
                                      dispatch(addToFavorites(item.id));
                                    }
                                  }} className='text-2xl text-[#b5b5b8] cursor-pointer transition-colors duration-200 no-underline hover:text-inherit'>
                                    {favorites?.includes(item.id) ? <MdOutlineFavorite className='text-red-600' /> : <MdOutlineFavoriteBorder />}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>

                      <button onClick={() => makeTest()}>
                        Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>

      <Botlane full={false} />
    </div>
  );
}

export default Catalog;
