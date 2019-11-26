import React, { Component } from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    img: PropTypes.string
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} img={this.props.img} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title={'Tytuł 1'} />
          <Column title={'Tytuł 2'} />
          <Column title={'Tytuł 3'} />
        </div>
      </section>
    );
  }
}

export default List;
