import Toplane from './Toplane';
import Bread from './Bread';
import Link from 'next/link';
import styles from '@/styles/Catalog.module.scss'
import Image from 'next/image';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineInfoCircle, AiOutlineEye } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import userData from './data';



const Catalog = () => {

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
                    <input type="checkbox" className='h-[20px] w-[20px] rounded bg-red-500 bg-opacity-50' />
                    <span className='pl-3'>Малиновка</span>
                  </div>

                  <div className='flex items-center py-1'>
                    <input type="checkbox" className='h-[20px] w-[20px]' />
                    <span className='pl-3'>Восток</span>
                  </div>

                  <div className='flex items-center py-1'>
                    <input type="checkbox" className='h-[20px] w-[20px]' />
                    <span className='pl-3'>Уручье</span>
                  </div>

                  <div className='flex items-center py-1'>
                    <input type="checkbox" className='h-[20px] w-[20px]' />
                    <span className='pl-3'>Сева</span>
                  </div>

                  <div className='flex items-center py-1'>
                    <input type="checkbox" className='h-[20px] w-[20px]' />
                    <span className='pl-3'>Инста</span>
                  </div>

                  <div className='flex items-center py-1'>
                    <input type="checkbox" className='h-[20px] w-[20px]' />
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
                  <Link href={`/products/${index}`} className='text-inherit no-underline hover:text-inherit hover:no-underline cursor-auto'>
                    <div className={styles.catalog_item}>
                      <div key={item.title} className='flex-col w-[185px] h-[323px] hover:shadow-lg p-1 mb-4 mr-5'>
                        <div className='relative flex items-center justify-center'>
                          <Image src={item.imgUrl} alt='banner' width={185} height={150} />
                          <div className={styles.eye}>
                            <AiOutlineEye />
                          </div>
                        </div>
                        <div className='cursor-pointer'><span>{item.title}</span></div>
                        <div className=' text-gray-700 pb-1 pt-4'><span>{item.description}</span></div>
                        <div className='flex h-[34px] justify-between '>
                          <button className='bg-red-400 rounded-md px-[15px] w-1/2 hover:bg-red-500 transition duration-300 ease-in-out'>
                            <div className='flex flex-col items-center justify-center cursor-pointer'>
                              <div className='text-2xl text-white'><FiShoppingCart fontSize="0.85em" /></div>
                            </div>
                          </button>
                          <div className='px-3  flex'>
                            <div className='text-2xl pr-4 text-[#b5b5b8] transition-colors duration-200 no-underline hover:text-inherit'><AiOutlineInfoCircle className='cursor-pointer' /></div>
                            <div className='text-2xl text-[#b5b5b8] transition-colors duration-200 no-underline hover:text-inherit'><MdOutlineFavoriteBorder className='cursor-pointer' /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

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