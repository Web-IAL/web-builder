import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { OS_CARD } from '.';
import { ContextOS } from 'store/OSContext';

const propsTypes = {
  /**
   * Sets elevation
   * @type {(0|4|8|16|64)}
   */
  depth: PropTypes.number,
};

const Card = (props) => {
  const { type } = useContext(ContextOS);
  const { className, children, depth } = props;
  const theme = OS_CARD[type];

  const classes = classNames(
    className,
    type,
    'card',
    `depth-${depth || theme?.depth}`,
  );

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
Card.propTypes = propsTypes;

export default Card;
