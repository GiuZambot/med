import { useRef } from 'react'
import Slider from 'react-slick'
import group29 from '../../assets/women/group29.png'
import group31 from '../../assets/women/group31.png'
import group32 from '../../assets/women/group32.png'
import group33 from '../../assets/women/group33.png'
import group34 from '../../assets/women/group34.png'
import group38 from '../../assets/women/group38.png'
import group39 from '../../assets/women/group39.png'
import group40 from '../../assets/women/group40.png'
import group41 from '../../assets/women/group41.png'
import group42 from '../../assets/women/group42.png'
import group43 from '../../assets/women/group43.png'
import group44 from '../../assets/women/group44.png'
import group46 from '../../assets/women/group46.png'
import group47 from '../../assets/women/group47.png'
import group48 from '../../assets/women/group48.png'
import group49 from '../../assets/women/group49.png'
import group50 from '../../assets/women/group50.png'
import group51 from '../../assets/women/group51.png'
import group52 from '../../assets/women/group52.png'
import group53 from '../../assets/women/group53.png'
import group54 from '../../assets/women/group54.png'
import group55 from '../../assets/women/group55.png'
import group56 from '../../assets/women/group56.png'
import group57 from '../../assets/women/group57.png'
import group59 from '../../assets/women/group59.png'
import group60 from '../../assets/women/group60.png'
import group61 from '../../assets/women/group61.png'
import group62 from '../../assets/women/group62.png'
import group63 from '../../assets/women/group63.png'
import group64 from '../../assets/women/group64.png'
import group65 from '../../assets/women/group65.png'
import group66 from '../../assets/women/group66.png'
import group67 from '../../assets/women/group67.png'
import group69 from '../../assets/women/group69.png'
import group70 from '../../assets/women/group70.png'
import group71 from '../../assets/women/group71.png'
import group72 from '../../assets/women/group72.png'
import group73 from '../../assets/women/group73.png'
import group76 from '../../assets/women/group76.png'
import group77 from '../../assets/women/group77.png'
import group78 from '../../assets/women/group78.png'
import group79 from '../../assets/women/group79.png'
import group80 from '../../assets/women/group80.png'
import group82 from '../../assets/women/group82.png'
import group83 from '../../assets/women/group83.png'
import group84 from '../../assets/women/group84.png'
import group85 from '../../assets/women/group85.png'
import group86 from '../../assets/women/group86.png'
import group87 from '../../assets/women/group87.png'
import group88 from '../../assets/women/group88.png'
import group89 from '../../assets/women/group89.png'
import group90 from '../../assets/women/group90.png'
import group91 from '../../assets/women/group91.png'
import group92 from '../../assets/women/group92.png'
import group94 from '../../assets/women/group94.png'
import styles from './TeamSection.module.scss'

const teamMembers = [
  { name: 'Adriana Casadei', image: group29 },
  { name: 'Fernanda Duarte', image: group31 },
  { name: 'Juliana Viturino', image: group32 },
  { name: 'Marcella Galeotti', image: group33 },
  { name: 'Raquel Reis', image: group34 },
  { name: 'Aline Aguiar', image: group38 },
  { name: 'Amanda Shichinoe', image: group39 },
  { name: 'Ana Fátima', image: group40 },
  { name: 'Andressa Monteiro', image: group41 },
  { name: 'Anna Karoline', image: group42 },
  { name: 'Anna Karoline', image: group43 },
  { name: 'Aretuza dos Santos', image: group44 },
  { name: 'Camila Cruz', image: group46 },
  { name: 'Camila Leite', image: group47 },
  { name: 'Camila Moscatelli', image: group48 },
  { name: 'Camila Morais', image: group49 },
  { name: 'Carina Ameijeiras', image: group50 },
  { name: 'Caroline Gugliotti', image: group51 },
  { name: 'Cássia Santos', image: group52 },
  { name: 'Cibelle Goiabeira', image: group53 },
  { name: 'Crislane Costa', image: group54 },
  { name: 'Daiane Oliveira', image: group55 },
  { name: 'Daianny Gomes', image: group56 },
  { name: 'Dani Montenegro', image: group57 },
  { name: 'Fernanda Aurichio', image: group59 },
  { name: 'Gabriela Shiratori', image: group60 },
  { name: 'Jessica Aparecida', image: group61 },
  { name: 'Francini Santana', image: group62 },
  { name: 'Giuliana De-Jong', image: group63 },
  { name: 'Isis Baptista', image: group64 },
  { name: 'Jessica Lamosa', image: group65 },
  { name: 'Julia Freitas', image: group66 },
  { name: 'Letícia Figueiredo', image: group67 },
  { name: 'Lauane Cardoso', image: group69 },
  { name: 'Letícia Cândido', image: group70 },
  { name: 'Juliana Cruz', image: group71 },
  { name: 'Letícia Pires', image: group72 },
  { name: 'Maciela Rodrigues', image: group73 },
  { name: 'Mariana Mourão', image: group76 },
  { name: 'Luisa Ferraz', image: group77 },
  { name: 'Marina Paiano', image: group78 },
  { name: 'Nadinne Cavalcante', image: group79 },
  { name: 'Monike Quirino', image: group80 },
  { name: 'Natália Carvalho', image: group82 },
  { name: 'Michelle Penha', image: group83 },
  { name: 'Renata Almeida', image: group84 },
  { name: 'Talita', image: group85 },
  { name: 'Sabrina', image: group86 },
  { name: 'Tássia Giovanelli', image: group87 },
  { name: 'Rita Camargos', image: group88 },
  { name: 'Thais Fernandes', image: group89 },
  { name: 'Thaís Teles', image: group90 },
  { name: 'Vitoria Comarin', image: group91 },
  { name: 'Victoria Oliveira', image: group92 },
  { name: 'Thatiane Lima', image: group94 },
]

const TeamSection = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>NOSSA EQUIPE</h2>
      <p className={styles.text}>
        Uma comunidade construída por mulheres e para mulheres. Nossa equipe
        atua de forma voluntária, unindo nossos esforços para apoiar, inspirar e
        fortalecer todas as manas da área de dados.
      </p>
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img src={member.image} alt={member.name} />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default TeamSection
