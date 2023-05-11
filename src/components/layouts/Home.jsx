import styles from "@/styles/Home.module.scss";
import MySlider from '../UI/MySlider';
import Toplane from './Toplane';
import Link from "next/link";




const Home = () => {
  
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__container}>
        
        <div>
          <Toplane/>
        </div>

        <div className='flex'>
          <div className={styles.home__sidebar}>
            <nav className={styles.home__sidebar__item}>
              <ul className={styles.catalog__list}>
                <Link href="/home"><li className={styles.catalog__list_item}>Каплесборники</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Крышки</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Шейкеры</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Вентиляторы</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Ручки</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Трубки</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Платы</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Жаровни</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Панели управления</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Клапаны</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Термостаты</li></Link>
                <Link href="/home"><li className={styles.catalog__list_item}>Розетки</li></Link>
              </ul>
            </nav>
          </div>


          <div className='w-[600px] h-[398px] ml-8'>
            <h1 className={styles.test}>Доступные склады</h1>
            <MySlider />
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home