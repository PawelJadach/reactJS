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
    cards: PropTypes.node,
  };

  state = {
    cards: this.props.cards || [],
    icon: this.props.icon,
    // key: this.props.key
  };

  addCard(title) {
    this.setState(state => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }

  render() {
    console.log(this.state);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.state.icon} />
          </span>
          {this.props.title}
        </h3>
        <div>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <Creator
          text={settings.cardCreatorText}
          action={title => this.addCard(title)}
        />
      </section>
    );
  }
}

export default Column;
