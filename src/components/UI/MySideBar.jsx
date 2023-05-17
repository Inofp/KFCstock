import styles from "@/styles/Home.module.scss";
import Link from "next/link";


const MySideBar = () => {

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


        </div>
  );
}

export default MySideBar