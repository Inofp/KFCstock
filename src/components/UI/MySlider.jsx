import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

function MySlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="/k1.jpg" className="d-block h-[398px] w-[600px]" alt='First slide' width={600} height={398} />
        <Carousel.Caption>
          <h3>Петровщина</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/k2.jpg" className="d-block h-[398px] w-[600px]" alt='Second slide' width={600} height={398} />
        <Carousel.Caption>
          <h3>Малиновка</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default MySlider;