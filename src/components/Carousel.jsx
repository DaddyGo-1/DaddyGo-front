import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/nuesa1.jpg';
import img2 from '../assets/images/nuesa2.jpg';
import img3 from '../assets/images/nuesa3.jpg';
// import 'bootstrap/scss/carousel.scss';

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='overlay'></div>
        <img src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <div className='overlay'></div>
      <img src={img2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <div className='overlay'></div>
      <img src={img3} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;