import React, { Component } from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import './Faq.scss';
import { settings } from '../../data/dataStore';

class Faq extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Hero titleText={settings.faq.titleText} img={settings.faq.img} />

        <h2>{settings.faq.h2}</h2>
        <p>
          <span>{settings.faq.content.question_1.question}</span>
          {settings.faq.content.question_1.answer}
        </p>
        <p>
          <span>{settings.faq.content.question_2.question}</span>
          {settings.faq.content.question_2.answer}
        </p>
        <p>
          <span>{settings.faq.content.question_3.question}</span>
          {settings.faq.content.question_3.answer}
        </p>
      </Container>
    );
  }
}

export default Faq;
