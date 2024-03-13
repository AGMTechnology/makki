import React, { useEffect, useState } from "react";
import Audi from "../assets/Audi_Q5.jpg"
import axios from 'axios';

import { BackgroundImage, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from "../assets/velar.jpg";
import classes from './HeroBullets.module.css';
import '@mantine/core/styles.css';
import { FeaturesCard } from "./Card";
import { CardsCarousel } from "./Carousel"

const Search = () => {
    return (
        <BackgroundImage
            src={image}
            radius="sm"
        >
        </BackgroundImage>
    );
}
export default Search;