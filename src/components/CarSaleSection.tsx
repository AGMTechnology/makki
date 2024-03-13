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

const CarSaleSection = () => {
    return (
        <BackgroundImage
            src={image}
            radius="sm"
        >
            <Container size={"xl"}>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A React components library
                        </Title>
                        <Text c="dimmed" mt="md">
                            Build fully functional accessible web applications faster than ever – Mantine includes
                            more than 120 customizable components and hooks to cover you in any situation
                        </Text>

                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck style={{ width: rem(12), height: rem(12), color: "#2b2a28" }} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>TypeScript based</b> – build type safe applications, all components and hooks
                                export types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                any project
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Button radius="sm" size="md" style={{ color: "#2b2a28" }} className={classes.control}>
                                Voir tous les véhicules
                            </Button>
                        </Group>
                    </div>
                    <div style={{ width: "50%" }} className={classes.image} >
                        <Title className={classes.subTitle}>
                            Notre sélection de véhicules d’occasion :
                        </Title>
                        <CardsCarousel />
                    </div>
                </div>
            </Container>
        </BackgroundImage>
    );
}
export default CarSaleSection;