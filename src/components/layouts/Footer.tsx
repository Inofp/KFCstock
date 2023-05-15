import { FC } from 'react'
import styles from "@/styles/Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className='flex justify-around items-center'>
        <div className='flex text-[14px] text-[#777778]'>
          <div className='px-6'>О сервисе</div>
          <div className='px-6'>Контакты</div>
          <div className='px-6'>Вопрос-ответ</div>
        </div>
        <div className='flex mx-6 rounded-lg py-2 leading-[18px] text-[#1c1c1e] px-4 bg-[#f4f4f4] text-[14px] font-medium'>
            Связаться с нами
          </div>


      </div>
    </div>
  )
}

export default Footer