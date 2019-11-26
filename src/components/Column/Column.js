import styles from './Column.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Column extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

export default Column;
