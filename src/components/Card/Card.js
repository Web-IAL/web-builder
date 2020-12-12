import React, { useContext } from 'react';
import classNames from 'classnames';
import { OS_CARD } from '.';
import { ContextOS } from 'store/OSContext';

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

export default Card;
