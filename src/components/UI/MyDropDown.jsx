import React, { useState, useEffect, useRef } from 'react';
import { MdExpandMore } from 'react-icons/md';

const MyDropDown = ({ text, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropDownRef = useRef(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropDownRef}
            className='h-[44px] w-[360px] relative flex items-center cursor-pointer rounded-lg border-2 border-[#d8d8dd]'
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className='flex items-center w-full relative'>
                {selectedItem && (
                    <div className='absolute bg-white px-1 -top-4 z-100 text-[#777778] text-[12px]'>
                        {text}
                    </div>
                )}
                <div className='w-[85%] select-none pl-6'>{selectedItem || text}</div>
                <div className=''>
                    <MdExpandMore
                        className={`text-[34px] leading-[20px] text-[#b5b5b8] select-none ${isOpen
                                ? 'transform rotate-180 transition-transform duration-300 ease-in-out'
                                : 'transition-transform duration-300 ease-in-out'
                            }`}
                    />
                </div>
                {isOpen && (
                    <ul className='absolute top-11 left-0 right-0 rounded-lg bg-white shadow-md z-10 pl-0 shadow-sm'>
                        {data.map((item) => (
                            <li
                                key={item}
                                className='py-2 hover:bg-gray-100 pl-6'
                                onClick={() => handleSelectItem(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MyDropDown;
