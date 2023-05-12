import styles from '@/styles/Bread.module.scss'
import Link from 'next/link';

const Bread = () => {
  const catalogLinks = [
    'Каплесборники',
    'Крышки',
    'Шейкеры',
    'Вентиляторы',
    'Ручки',
    'Трубки',
    'Платы',
    'Жаровни',
    'Панели',
    'Клапаны',
    'Термостаты',
    'Розетки'
  ];

  return (
    <div className='flex mt-2 justify-center'>
      <div className='max-lg:mt-2 '>
        <ul className={styles.catalog_links}>
          {catalogLinks.map((linkText, index) => (
            <Link href="/" key={`catalog-link-${index}`} className='text-[#1c1c1e] text-[14px] hover:text-[#1c1c1e] max-lg:px-2'>
              <li className='pr-5 max-lg:border max-lg:border-gray-300 max-lg:p-2 max-lg:rounded-md'>{linkText}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bread;
