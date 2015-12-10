import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const Card = ({children}) => {
  const cx = classNames.bind(style);
  let className = cx({
    "card": true
  });

  return <div className={className}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
