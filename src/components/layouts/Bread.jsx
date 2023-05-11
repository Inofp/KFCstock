import styles from '@/styles/Bread.module.scss'
import Link from 'next/link';

const Bread = () => {
    return (
        <div className='flex mt-2 justify-center'>
          <ul className={styles.catalog_links}>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Каплесборники</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Крышки</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Шейкеры</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Вентиляторы</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Ручки</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Трубки</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Платы</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Жаровни</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Панели управления</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Клапаны</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Термостаты</li></Link>
            <Link href="/" className=' text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e]'><li className='pr-5'>Розетки</li></Link>
          </ul>
        </div>
    );
};

export default Bread;