import Slider from 'react-slick';
import Image from 'next/image';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // スライドショーが変化する秒数
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 表示している秒数
    pauseOnHover:false,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <Image src="/images/IMG_3323.JPG" alt="Image 1" height={1000} width={1000} layout="responsive"/>
        </div>
        <div>
          <Image src="/images/IMG_3384.JPG" alt="Image 2" height={1000} width={1000} layout="responsive"/>
        </div>
        <div>
          <Image src="/images/DSC00316.JPG" alt="Image 3" height={1000} width={1000} layout="responsive"/>
        </div>
        <div>
          <Image src="/images/IMG_5551.JPG" alt="Image 4" height={1000} width={1000} layout="responsive"/>
        </div>
        <div>
          <Image src="/images/IMG_7858.jpeg" alt="Image 5" height={1000} width={1000} layout="responsive"/>
        </div>
        <div>
          <Image src="/images/IMG_5767.JPG" alt="Image 6" height={1000} width={1000} layout="responsive"/>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;