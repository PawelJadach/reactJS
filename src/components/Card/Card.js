import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = (props) => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
  };
  // console.log(props);
  const {title} = props;
  return (
    <section className={styles.component}>
      <h3>{title}</h3>
    </section>
  );
};

export default Card;
