import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from '../Icon';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class SearchResult extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultSearchResultIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    this.props.changeSearchString(this.props.match.params.search); // eslint-disable-line
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
      </section>
    );
  }
}

export default SearchResult;
