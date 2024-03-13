import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import {FeaturesCard} from "./Card";

import dodge from "../assets/Dodge.jpg";
import golf from "../assets/golf.jpg";
import cupra from "../assets/cupra.jpg";
import mercedes from "../assets/mercedes.jpg";

interface CardProps {
  data: any;
}

function Card({ data }: CardProps) {
  return (
    <div style={{width:"100%", minWidth:266}}  className={classes.card}>
      <FeaturesCard data={data}/>
    </div>

  );
}

const data = [
  {
    image:
    dodge,
    title: 'DODGE CHARGER II',
    category: 'nature',
    Argument: 'V8 707 SRT HELLCAT',
    Prix: '84 990 €',
    Place: '5 places',
    Transmission: 'Automatique',
    Carburant: 'Essence',
    Garantie: '12 mois',
    Kilo: '40 100 km',
    Année: '2019',
  },
  {
    image:
    cupra,
    title: 'CUPRA FORMENTOR',
    category: 'nature',
    Argument: '2.5 TSI 390 VZ5',
    Prix: '77 990 €',
    Place: '5 places',
    Transmission: 'Automatique',
    Carburant: 'Essence',
    Garantie: '24 mois',
    Kilo: '15 000 km',
    Année: '2022',
  },
  {
    image:
    golf,
    title: 'VOLKSWAGEN GOLF VIII',
    category: 'nature',
    Argument: '1.4 HYBRID 245 GTE',
    Prix: '28 970 €',
    Place: '5 places',
    Transmission: 'Automatique',
    Carburant: 'Hybride essence électrique',
    Garantie: '12 mois',
    Kilo: '19 148 km',
    Année: '2021',
  },
  {
    image:
    mercedes,
    title: 'MERCEDES GLA II',
    category: 'nature',
    Argument: '2.0 200 D 150 AMG LINE',
    Prix: '35 900 €',
    Place: '5 places',
    Transmission: 'Automatique',
    Carburant: 'Diesel',
    Garantie: '24 mois',
    Kilo: '96 250 km',
    Année: '2020',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item,i) => (
    <Carousel.Slide key={item.title}>
      <Card data={data[i]} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '50%', sm: '50%' }}
      slideGap={{ base: 'lg', sm: 'xl' }}
      align="center"
      slidesToScroll={1}
      loop
      controlsOffset="xs"
      dragFree
    >
      {slides}
    </Carousel>
  );
}