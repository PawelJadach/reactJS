import styles from './Container.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  Container.propTypes = {
    children: PropTypes.node,
  };

  return ( 
    <div className={styles.component}>
      {props.children}
    </div>
  );
};
 
export default Container;