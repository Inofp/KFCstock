import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

const MySideBar = ({ catalogLinks, title, opened }) => {
    const [showAll, setShowAll] = useState(false);
    const [isOpen, setIsOpen] = useState({ opened });

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className={`w-full mb-4 min-w-[212px] max-h-[306px] px-1 max-lg:hidden ${isOpen ? 'shadow-md' : ''}`}>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <span className='text-md font-semibold hover:text-[#5b5e67] select-none'>{title}</span>
                <MdExpandMore
                    className={`text-[34px] leading-[20px] text-[#b5b5b8] select-none ${isOpen
                        ? 'transform rotate-180 transition-transform duration-300 ease-in-out'
                        : 'transition-transform duration-300 ease-in-out'
                        }`}
                />
            </div>

            {isOpen && (
                <div className=''>
                    <div>
                        <form className='bg-[#f0eeee] font-medium w-full rounded-md px-1 mt-2 flex justify-start border-transparent border-solid border-2 hover:border-gray-500 transition border-color duration-200 ease-in-out'>
                            <input
                                type='text'
                                placeholder='Я ищу...'
                                className='bg-[#f0eeee] pl-2 text-md focus:outline-none w-full'
                            />

                            <button type='submit' className=' text-[20px] text-[#606061]'>
                                <AiOutlineSearch />
                            </button>
                        </form>
                    </div>

                    <div
                        className='mt-3 pb-3 transition-all duration-300 ease'
                        style={{
                            maxHeight: showAll ? '210px' : '195px',
                            overflowY: showAll ? 'scroll' : 'hidden',
                            transition: 'max-height 0.3s ease',
                        }}
                    >
                        {catalogLinks.map((link, index) => {
                            if (!showAll && index > 6) {
                                return null; // Hide elements after 'Платы'
                            }
                            return (
                                <div className='flex items-center py-1' key={index}>
                                    <div className='h-[20px] mr-4 w-[20px] border-[#d8d8dd] border-[1px]  hover:border-[#b5b5b8] rounded-[4.2px] transition-all duration-300'></div>
                                    <span className=''>{link.name}</span>
                                </div>
                            );
                        })}
                    </div>

                    {!showAll && (
                        <div className='mb-2'>
                            <span
                                className='text-[#0a84ff] text-[15px] font-normal hover:text-[#0058a6] cursor-pointer select-none'
                                onClick={handleShowAll}
                            >
                                Показать все
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MySideBar;

