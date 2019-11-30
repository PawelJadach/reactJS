import styles from './Column.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from '../Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class Column extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard } = this.props;
    // console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {cards.map(({ id, ...cardProps }) => (
            <Card key={id} {...cardProps} />
          ))}
        </div>
        <Creator
          text={settings.cardCreatorText}
          action={addCard}
        />
      </section>
    );
  }
}

export default Column;
