import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.titleText} img={settings.info.img} />
    <h2>{settings.info.h2}</h2>
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;
