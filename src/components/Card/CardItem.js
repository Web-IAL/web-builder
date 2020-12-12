import React, { useContext } from 'react';
import classNames from 'classnames';
import { ContextOS } from 'store/OSContext';

const CardItem = (props) => {
  const { type } = useContext(ContextOS);
  const { header, footer, bordered, className, children } = props;
  const classes = classNames(
    className,
    type,
    bordered && `card-border`,
    header && `card-header`,
    footer && `card-footer`,
    !(header || footer) && `card-body`,
  );

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

CardItem.displayName = 'CardItem';

export default CardItem;
