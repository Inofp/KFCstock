import styles from "@/styles/Home.module.scss";
import MySlider from '../UI/MySlider';
import Toplane from './Toplane';
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';




const Home = () => {

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

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/catalog')
  }

  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__container}>

        <div>
          <Toplane />
        </div>

        <div className='flex'>
          <div className={styles.home__sidebar}>
            <nav className={styles.home__sidebar__item}>
              <ul className={styles.catalog__list}>
                {catalogLinks.map((linkText, index) => (
                  <Link href="/catalog" key={`catalog-link-${index}`}><li className={styles.catalog__list_item}>{linkText}</li></Link>
                ))}

              </ul>
            </nav>
          </div>


          <div className='w-[600px] h-[398px] ml-8 max-lg:hidden'>
            <h1 className={styles.test}>Доступные склады</h1>
            <MySlider />
          </div>

          <div className="">
            <button className='lg:hidden bg-red-500 text-white p-[11px] pr-[22px] rounded-xl flex justify-center items-center ml-6 font-medium text-base' onClick={handleClick}>
              <GiHamburgerMenu /> <span className='ml-2 '>Открыть каталог</span>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home