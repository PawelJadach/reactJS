import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = props => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <section className={styles.component}>
      <h3>{props.title}</h3>
    </section>
  );
};

export default Card;
