import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className='mt-[56px] border-t-[1px] py-[30px] absolute bottom-0 w-full z-10 max-lg:pb-16'>
      <div className='flex justify-around items-center max-lg:mb-10'>
        <div className='flex text-[14px] text-[#777778] max-sm:flex-col max-sm:items-start'>
          <div className='px-6 max-sm:py-2 select-none cursor-pointer'>О сервисе</div>
          <div className='px-6 max-sm:py-2 select-none cursor-pointer'>Контакты</div>
          <div className='px-6 max-sm:py-2 select-none cursor-pointer'>Вопрос-ответ</div>
        </div>
        <div className='flex mx-6 rounded-lg py-2 leading-[18px] text-[#1c1c1e] px-4 bg-[#f4f4f4] text-[14px] font-medium cursor-pointer select-none'>
            Связаться с нами
          </div>


      </div>
    </div>
  )
}

export default Footer