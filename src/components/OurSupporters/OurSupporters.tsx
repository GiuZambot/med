import { useRef } from 'react'
import Slider from 'react-slick'
import bigData from '../../assets/big_data.png'
import dp6 from '../../assets/dp6.png'
import mulheresProdutos from '../../assets/mulheres_de_produto.png'
import teo from '../../assets/teo_me_why.png'
import tw from '../../assets/tw.png'
import zoho from '../../assets/zoho.png'
import styles from './OurSupporters.module.scss'

const OurSupporters = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const supporters = [
    { name: 'Big Data Brazil Experience', image: bigData },
    { name: 'Mulheres de produtos', image: mulheresProdutos },
    { name: 'Zoho Analytics', image: zoho },
    { name: 'Thoughtworks', image: tw },
    { name: 'Téo me Why', image: teo },
    { name: 'Dp6', image: dp6 },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.title}>MARCAS QUE NOS APOIAM</div>
      <div className={styles.supporters}>
        <Slider ref={sliderRef} {...settings}>
          {supporters.map((member, index) => (
            <div key={index}>
              <img src={member.image} alt={member.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default OurSupporters
